import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  ABDataRegistry,
  PublisherRegistered,
  DropRegistered,
} from "../generated/ABDataRegistry/ABDataRegistry";

import { Publisher } from "../generated/schema";

export function handlePublisherRegistered(event: PublisherRegistered): void {
  let contract = ABDataRegistry.bind(event.address);

  let publisher = Publisher.load(event.params.account.toString());

  if (!publisher) {
    publisher = new Publisher(event.params.account.toHexString());
  }

  let publisherFee = contract.publisherFees(
    Address.fromString(event.params.account.toHexString())
  );

  publisher.royalty = event.params.abRoyalty.toHexString();
  publisher.publisherFee = publisherFee;
  publisher.registeredTransactionHash = event.transaction.hash;
  publisher.registeredBlockNumber = event.block.number;
  publisher.timestamp = event.block.timestamp;

  publisher.save();
}
export function handleDropRegistered(event: DropRegistered): void {}
