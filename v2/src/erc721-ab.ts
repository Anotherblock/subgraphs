import { BigInt } from "@graphprotocol/graph-ts";

import {
  ERC721AB,
  Transfer,
  UpdatedPhase,
} from "../generated/templates/ERC721AB/ERC721AB";

import { CollectionCreated } from "../generated/AnotherCloneFactory/AnotherCloneFactory";
import {
  Collection,
  Drop,
  DropPhase,
  Phase,
  TokenId,
  User,
  UserHoldings,
} from "../generated/schema";

export function handleTransfer(event: Transfer): void {
  // Connect to the NFT contract
  const contract = ERC721AB.bind(event.address);

  // Get the drop ID associated to the token ID transferred
  const dropId = contract.dropId();

  // Update the Token ID Information (TokenId entity)
  let tokenId = TokenId.load(
    dropId
      .toString()
      .concat("-")
      .concat(event.params.tokenId.toString())
  );
  if (!tokenId) {
    tokenId = new TokenId(
      dropId
        .toString()
        .concat("-")
        .concat(event.params.tokenId.toString())
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
    newOwner.totalHoldings = BigInt.fromI32(0);
  }
  newOwner.totalHoldings = newOwner.totalHoldings.plus(BigInt.fromI32(1));

  // Update the New Owner Holdings (UserHoldings entity)
  const newUserHoldingId = newOwnerId.concat("-".concat(dropId.toString()));
  let newUserHoldings = UserHoldings.load(newUserHoldingId);
  if (!newUserHoldings) {
    newUserHoldings = new UserHoldings(newUserHoldingId);
    newUserHoldings.user = newOwnerId;
    newUserHoldings.dropId = dropId.toString();
    newUserHoldings.totalQuantity = BigInt.fromI32(0);
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
  quantity = quantity.plus(BigInt.fromI32(1));
  newUserHoldings.totalQuantity = quantity;
  newUserHoldings.save();
  newOwner.save();

  // Update the Previous Owner (User entity)
  const previousOwnerId = event.params.from.toHexString();
  if (previousOwnerId != "0x0000000000000000000000000000000000000000") {
    const previousOwner = User.load(previousOwnerId);

    if (previousOwner) {
      previousOwner.totalHoldings = previousOwner.totalHoldings.minus(
        BigInt.fromI32(1)
      );

      const previousUserHoldingId = previousOwnerId.concat(
        "-".concat(dropId.toString())
      );

      const previousUserHoldings = UserHoldings.load(previousUserHoldingId);

      if (previousUserHoldings) {
        let quantity = previousUserHoldings.totalQuantity;
        quantity = quantity.minus(BigInt.fromI32(1));
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
      previousOwner.save();
    }
  } else {
    const drop = Drop.load(dropId.toString());
    if (drop) {
      let currentSupply = contract.totalSupply();
      drop.currentSupply = currentSupply;
      drop.save();
    }
  }
}

export function handlePhasesUpdated(event: UpdatedPhase): void {
  // Connect to the NFT contract
  const contract = ERC721AB.bind(event.address);

  // Get the drop ID associated to the token ID transferred
  const dropId = contract.dropId();

  const dropPhasesId = "Phases-Drop-".concat(dropId.toString());

  const dropPhases = new DropPhase(dropPhasesId);
  dropPhases.drop = dropId.toString();
  dropPhases.phases = new Array<string>(0);

  const numOfPhase = parseInt(event.params.numOfPhase.toString());
  for (let i = 0; i < numOfPhase; i++) {
    const phaseId = "Phase-Drop-"
      .concat(dropId.toString())
      .concat("-")
      .concat(i.toString());

    const phase = new Phase(phaseId);
    const phaseInfo = contract.try_phases(BigInt.fromI32(i));
    if (!phaseInfo.reverted) {
      phase.phaseStart = phaseInfo.value.value0;
      phase.phaseEnd = phaseInfo.value.value1;
      phase.price = phaseInfo.value.value2;
      phase.maxMint = phaseInfo.value.value3;
      phase.isPublic = phaseInfo.value.value4;
      phase.save();
      dropPhases.phases.push(phaseId);
      dropPhases.save();
    }
  }
  dropPhases.save();
}
