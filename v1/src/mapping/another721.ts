import { BigInt, log } from "@graphprotocol/graph-ts";

import {
  Drop,
  DropPhase,
  Phase,
  TokenId,
  User,
  UserHoldings,
} from "../../generated/schema";
import {
  Another721,
  Transfer,
  UpdatedPhase,
} from "../../generated/templates/Another721/Another721";
import { ONE_BI, ZERO_ADDRESS, ZERO_BI } from "../constant";
import { getDropId } from "../utils/utils";

export function handlePhasesUpdated(event: UpdatedPhase): void {
  const contract = Another721.bind(event.address);

  const dropPhasesId = "Phases-Drop-".concat(event.params._dropId.toString());

  const dropPhases = new DropPhase(dropPhasesId);
  dropPhases.drop = event.params._dropId.toString();
  dropPhases.phases = new Array<string>(0);

  for (let i = 0; i < 4; i++) {
    const phaseId = "Phase-Drop-"
      .concat(event.params._dropId.toString())
      .concat("-")
      .concat(i.toString());

    const phase = new Phase(phaseId);
    const phaseInfo = contract.try_phasesPerDrop(BigInt.fromI32(i));
    if (!phaseInfo.reverted) {
      phase.phaseStart = phaseInfo.value.value0;
      phase.maxMint = phaseInfo.value.value1;
      phase.merkle = phaseInfo.value.value2.toHexString();
      phase.save();
      dropPhases.phases.push(phaseId);
      dropPhases.save();
    }
  }
  dropPhases.save();
}

/**
 *  TRANSFER HANDLER
 */

export function handleTransfer(event: Transfer): void {
  // Get the drop ID associated to the token transferred
  const dropId = getDropId(event.address);

  // Get the corresponding TokenId instance
  let tokenId = TokenId.load(
    dropId
      .toString()
      .concat("-")
      .concat(event.params.tokenId.toString())
  );

  // If the TokenId instance does not exists, create it
  if (!tokenId) {
    tokenId = new TokenId(
      dropId
        .toString()
        .concat("-")
        .concat(event.params.tokenId.toString())
    );
    tokenId.dropId = dropId.toString();
  }

  // Update the TokenId owner
  tokenId.owner = event.params.to.toHexString().toLowerCase();

  // Save the updated TokenId instance
  tokenId.save();

  // Update the New Owner (User entity)
  const newOwnerId = event.params.to.toHexString().toLowerCase();
  let newOwner = User.load(newOwnerId);

  if (!newOwner) {
    newOwner = new User(newOwnerId);
    newOwner.totalHoldings = ZERO_BI;

    if (newOwnerId == "0xf3476b36fc9942083049c04e9404516703369ef3") {
      log.warning(
        "-----CREATE NEW OWNER ENTITY : id {}, totalholdings {}, hash {}",
        [
          newOwnerId,
          newOwner.totalHoldings.toString(),
          event.transaction.hash.toHexString(),
        ]
      );
    }
  }

  if (newOwnerId == "0xf3476b36fc9942083049c04e9404516703369ef3") {
    log.warning("-----INCREMENT HOLDINGS: previous {}, new {}, hash {}", [
      newOwner.totalHoldings.toString(),
      newOwner.totalHoldings.plus(ONE_BI).toString(),
      event.transaction.hash.toHexString(),
    ]);
  }
  const newOwnerTotalHoldings = newOwner.totalHoldings;
  newOwner.totalHoldings = newOwnerTotalHoldings.plus(ONE_BI);
  newOwner.save();

  // Update the New Owner Holdings (UserHoldings entity)
  const newUserHoldingId = newOwnerId.concat("-".concat(dropId.toString()));
  let newUserHoldings = UserHoldings.load(newUserHoldingId);
  if (!newUserHoldings) {
    newUserHoldings = new UserHoldings(newUserHoldingId);
    newUserHoldings.user = newOwnerId;
    newUserHoldings.dropId = dropId.toString();
    newUserHoldings.totalQuantity = ZERO_BI;
    newUserHoldings.tokenIds = new Array<string>(0);
  }
  const tokenIds = newUserHoldings.tokenIds;
  tokenIds.push(
    dropId
      .toString()
      .concat("-")
      .concat(event.params.tokenId.toString())
  );
  newUserHoldings.tokenIds = tokenIds;
  let quantity = newUserHoldings.totalQuantity;
  quantity = quantity.plus(ONE_BI);
  newUserHoldings.totalQuantity = quantity;
  newUserHoldings.save();

  // Update the Previous Owner (User entity)
  const previousOwnerId = event.params.from.toHexString().toLowerCase();
  if (previousOwnerId != ZERO_ADDRESS) {
    const previousOwner = User.load(previousOwnerId);

    if (!previousOwner)
      log.warning("-----NEW PREVIOUS OWNER: hash {}", [
        event.transaction.hash.toHexString(),
      ]);

    if (previousOwner) {
      if (previousOwnerId == "0xf3476b36fc9942083049c04e9404516703369ef3") {
        log.warning("-----DECREMENT HOLDINGS: previous {}, new {}, hash {}", [
          previousOwner.totalHoldings.toString(),
          previousOwner.totalHoldings.minus(ONE_BI).toString(),
          event.transaction.hash.toHexString(),
        ]);
      }

      const previousOwnerTotalHoldings = previousOwner.totalHoldings;
      previousOwner.totalHoldings = previousOwnerTotalHoldings.minus(ONE_BI);
      previousOwner.save();

      const previousUserHoldingId = previousOwnerId.concat(
        "-".concat(dropId.toString())
      );

      const previousUserHoldings = UserHoldings.load(previousUserHoldingId);

      if (previousUserHoldings) {
        let quantity = previousUserHoldings.totalQuantity;
        quantity = quantity.minus(ONE_BI);
        previousUserHoldings.totalQuantity = quantity;

        const tokenIdsArray = previousUserHoldings.tokenIds;

        for (let j = 0; j < tokenIdsArray.length; j++) {
          if (
            tokenIdsArray[j] ==
            dropId
              .toString()
              .concat("-")
              .concat(event.params.tokenId.toString())
          ) {
            tokenIdsArray.splice(j, 1);
          }
        }
        previousUserHoldings.tokenIds = tokenIdsArray;
        previousUserHoldings.save();
      }
    }
  } else {
    const drop = Drop.load(dropId.toString());
    if (drop) {
      let dropSold = drop.currentSupply;
      dropSold = dropSold.plus(ONE_BI);
      drop.currentSupply = dropSold;
      drop.save();
    }
  }
}
