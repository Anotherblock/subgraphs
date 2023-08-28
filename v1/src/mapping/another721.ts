import { BigInt } from '@graphprotocol/graph-ts';

import {
  Drop,
  DropPhase,
  Phase,
  TokenId,
  User,
  UserHoldings,
} from '../../generated/schema';
import {
  Another721,
  Transfer,
  UpdatedPhase,
} from '../../generated/templates/Another721/Another721';
import { ONE_BI, ZERO_ADDRESS, ZERO_BI } from '../constant';
import { getDropId } from '../utils/utils';

export function handlePhasesUpdated(event: UpdatedPhase): void {
  const contract = Another721.bind(event.address);

  const dropPhasesId = 'Phases-Drop-'.concat(event.params._dropId.toString());

  const dropPhases = new DropPhase(dropPhasesId);
  dropPhases.drop = event.params._dropId.toString();
  dropPhases.phases = new Array<string>(0);

  for (let i = 0; i < 4; i++) {
    const phaseId = 'Phase-Drop-'
      .concat(event.params._dropId.toString())
      .concat('-')
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
  // Connect to the NFT contract
  const contract = Another721.bind(event.address);

  // Get the drop ID associated to the token ID transferred
  const dropId = getDropId(event.address);

  // Update the Token ID Information (TokenId entity)
  let tokenId = TokenId.load(
    dropId.toString().concat('-').concat(event.params.tokenId.toString())
  );
  if (!tokenId) {
    tokenId = new TokenId(
      dropId.toString().concat('-').concat(event.params.tokenId.toString())
    );
    tokenId.dropId = dropId.toString();
  }
  tokenId.owner = event.params.to.toHexString();
  tokenId.save();

  // Update the New Owner (User entity)
  const newOwnerId = event.params.to.toHexString();
  let newOwner = User.load(newOwnerId);

  if (!newOwner) {
    newOwner = new User(newOwnerId);
    newOwner.totalHoldings = ZERO_BI;
  }
  newOwner.totalHoldings = newOwner.totalHoldings.plus(ONE_BI);

  // Update the New Owner Holdings (UserHoldings entity)
  const newUserHoldingId = newOwnerId.concat('-'.concat(dropId.toString()));
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
    dropId.toString().concat('-').concat(event.params.tokenId.toString())
  );
  newUserHoldings.tokenIds = tokenIds;
  let quantity = newUserHoldings.totalQuantity;
  quantity = quantity.plus(ONE_BI);
  newUserHoldings.totalQuantity = quantity;
  newUserHoldings.save();
  newOwner.save();

  // Update the Previous Owner (User entity)
  const previousOwnerId = event.params.from.toHexString();
  if (previousOwnerId != ZERO_ADDRESS) {
    const previousOwner = User.load(previousOwnerId);

    if (previousOwner) {
      previousOwner.totalHoldings = previousOwner.totalHoldings.minus(ONE_BI);

      const previousUserHoldingId = previousOwnerId.concat(
        '-'.concat(dropId.toString())
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
              .concat('-')
              .concat(event.params.tokenId.toString())
          ) {
            tokenIdsArray.splice(j, 1);
          }
        }
        previousUserHoldings.tokenIds = tokenIdsArray;
        previousUserHoldings.save();
      }
      previousOwner.save();
    }
  } else {
    const drop = Drop.load(dropId.toString());
    if (drop) {
      let dropSold = drop.sold;
      dropSold = dropSold.plus(ONE_BI);
      drop.sold = dropSold;
      drop.save();
    }
  }
}
