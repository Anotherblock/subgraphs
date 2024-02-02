import { BigInt } from "@graphprotocol/graph-ts";

import {
  ABClaim,
  RoyaltyDistributed,
  RoyaltyClaimed,
  HoldingsBatchUpdated,
  HoldingsUpdated,
  RoyaltyDistributedMultiDrop,
} from "../generated/ABClaim/ABClaim";

import { Payout, Claim, TokenId } from "../generated/schema";

export function handleRoyaltyDistributedMultiDrop(
  event: RoyaltyDistributedMultiDrop
): void {
  let dropsIds = event.params.dropIds;
}

export function handleRoyaltyDistributedSingleDrop(
  event: RoyaltyDistributed
): void {}

export function handleRoyaltyClaimed(event: RoyaltyClaimed): void {}
export function handleHoldingsUpdated(event: HoldingsUpdated): void {}
export function handleHoldingsBatchUpdated(event: HoldingsBatchUpdated): void {}
