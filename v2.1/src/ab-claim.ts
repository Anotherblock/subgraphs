import { BigInt } from "@graphprotocol/graph-ts";

import {
  ABClaim,
  RoyaltyDistributed,
  RoyaltyClaimed,
  HoldingsBatchUpdated,
  HoldingsUpdated,
  RoyaltyDistributedMultiDrop,
  DropDataUpdated,
  DropDataBatchUpdated,
} from "../generated/ABClaim/ABClaim";

import { Payout, Claim, TokenId } from "../generated/schema";

export function handleRoyaltyDistributedMultiDrop(
  event: RoyaltyDistributedMultiDrop
): void {
  let dropsIds = event.params.dropIds;

  for (let i = 0; i < dropsIds.length; i++) {
    const id =
      event.params.dropIds[i].toString() +
      "-" +
      event.transaction.hash.toHexString();
    const payout = new Payout(id);
    payout.dropId = event.params.dropIds[i];
    payout.amount = event.params.amount[i];
    payout.createdBlockNumber = event.block.number;
    payout.transactionHash = event.transaction.hash;
    payout.timestamp = event.block.timestamp;
    payout.save();
  }
}

export function handleRoyaltyDistributedSingleDrop(
  event: RoyaltyDistributed
): void {
  const id =
    event.params.dropId.toString() + "-" + event.transaction.hash.toHexString();
  const payout = new Payout(id);
  payout.dropId = event.params.dropId;
  payout.amount = event.params.amount;
  payout.createdBlockNumber = event.block.number;
  payout.transactionHash = event.transaction.hash;
  payout.timestamp = event.block.timestamp;
  payout.save();
}

export function handleRoyaltyClaimed(event: RoyaltyClaimed): void {
  let contract = ABClaim.bind(event.address);

  const id =
    event.params.dropId.toString() + "-" + event.transaction.hash.toHexString();
  const claim = new Claim(id);
  claim.amount = event.params.amount;
  claim.dropId = event.params.dropId;
  claim.transactionHash = event.transaction.hash;
  claim.timestamp = event.block.timestamp;
  claim.tokenIds = new Array<string>(0);

  const tokenIds = claim.tokenIds;

  for (let i = 0; i < event.params.tokenIds.length; i++) {
    let tokenId = TokenId.load(
      event.params.dropId.toString() + "-" + event.params.tokenIds[i].toString()
    );

    tokenId!.claimed = contract.claimedAmount(
      event.params.dropId,
      event.params.tokenIds[i]
    );
    tokenId!.save();

    tokenIds.push(tokenId!.id);
  }
  claim.tokenIds = tokenIds;

  claim.save();
}

export function handleHoldingsUpdated(event: HoldingsUpdated): void {
  let contract = ABClaim.bind(event.address);

  let tokenId = TokenId.load(
    event.params.dropId.toString() + "-" + event.params.tokenId.toString()
  );

  if (!tokenId) {
    tokenId = new TokenId(
      event.params.dropId.toString() + "-" + event.params.tokenId.toString()
    );
  }
  tokenId.dropId = event.params.dropId;
  tokenId.claimed = contract.claimedAmount(
    event.params.dropId,
    event.params.tokenId
  );
  tokenId.owner = event.params.newOwner.toHexString();
  tokenId.save();
}

export function handleHoldingsBatchUpdated(event: HoldingsBatchUpdated): void {
  let contract = ABClaim.bind(event.address);

  for (let i = 0; i < event.params.tokenIds.length; i++) {
    let tokenId = TokenId.load(
      event.params.dropId.toString() + "-" + event.params.tokenIds[i].toString()
    );

    if (!tokenId) {
      tokenId = new TokenId(
        event.params.dropId.toString() +
          "-" +
          event.params.tokenIds[i].toString()
      );
    }
    tokenId.dropId = event.params.dropId;
    tokenId.claimed = contract.claimedAmount(
      event.params.dropId,
      event.params.tokenIds[i]
    );
    tokenId.owner = event.params.newOwners[i].toHexString();
    tokenId.save();
  }
}

export function handleDropDataUpdated(event: DropDataUpdated): void {
  let contract = ABClaim.bind(event.address);

  for (let i = 1; i <= parseInt(event.params.supply.toString()); i++) {
    let tokenId = TokenId.load(
      event.params.dropId.toString() + "-" + i.toString()
    );

    if (!tokenId) {
      tokenId = new TokenId(
        event.params.dropId.toString() + "-" + i.toString()
      );
    }
    tokenId.dropId = event.params.dropId;
    tokenId.claimed = contract.claimedAmount(
      event.params.dropId,
      new BigInt(i)
    );
    tokenId.save();
  }
}
export function handleDropDataBatchUpdated(event: DropDataBatchUpdated): void {
  let contract = ABClaim.bind(event.address);

  for (let j = 0; j < event.params.dropId.length; j++)
    for (let i = 1; i <= parseInt(event.params.supply[j].toString()); i++) {
      let tokenId = TokenId.load(
        event.params.dropId[j].toString() + "-" + i.toString()
      );

      if (!tokenId) {
        tokenId = new TokenId(
          event.params.dropId[j].toString() + "-" + i.toString()
        );
      }
      tokenId.dropId = event.params.dropId[j];
      tokenId.claimed = contract.claimedAmount(
        event.params.dropId[j],
        new BigInt(i)
      );
      tokenId.save();
    }
}
