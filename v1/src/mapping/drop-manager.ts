import { Address } from "@graphprotocol/graph-ts";

import {
  ABDropManager,
  DropCreated,
  DropUpdated,
} from "../../generated/ABDropManager/ABDropManager";
import { Collection, Drop, Publisher } from "../../generated/schema";
import { Another721 } from "../../generated/templates";
import {
  DROP_ADDRESS,
  DROP_MANAGER_ADDRESS,
  ZERO_ADDRESS,
  AB_PAYOUT,
  ZERO_BI,
} from "../constant";

export function handleDropCreated(event: DropCreated): void {
  let abPublisher = Publisher.load(ZERO_ADDRESS);

  if (!abPublisher) {
    abPublisher = new Publisher(ZERO_ADDRESS);
    abPublisher.royalty = AB_PAYOUT;
    abPublisher.publisherFee = ZERO_BI;
    abPublisher.registeredBlockNumber = event.block.number;
    abPublisher.timestamp = event.block.timestamp;
    abPublisher.registeredTransactionHash = event.transaction.hash;
    abPublisher.save();
  }

  let drop = Drop.load(event.params.dropId.toString());

  if (!drop) {
    drop = new Drop(event.params.dropId.toString());
  }
  const contract = ABDropManager.bind(Address.fromString(DROP_MANAGER_ADDRESS));
  const dropInfo = contract.try_drops(event.params.dropId);

  let nftAddress;
  if (dropInfo.value.value5.toHexString() == ZERO_ADDRESS) {
    nftAddress = DROP_ADDRESS;
  } else {
    nftAddress = dropInfo.value.value5.toHexString();
  }

  let collection = Collection.load(nftAddress);

  if (!collection) {
    collection = new Collection(nftAddress);
    collection.publisher = abPublisher.id;
    collection.createdBlockNumber = event.block.number;
    collection.timestamp = event.block.timestamp;
    collection.createdTransactionHash = event.transaction.hash;
  }

  drop.createdTransactionHash = event.transaction.hash;
  drop.createdBlockNumber = event.block.number;
  drop.timestamp = event.block.timestamp;

  if (!dropInfo.reverted) {
    drop.id = dropInfo.value.value0.toString();
    drop.currentSupply = dropInfo.value.value1;
    drop.maxSupply = dropInfo.value.value3.supply;
    drop.sharePerToken = dropInfo.value.value3.royaltySharePerToken;
    drop.collection = collection.id;
    drop.type = "ERC721";
    drop.royaltyCurrency = "0x5441085b042845215052df2238c02c3e0e06f0a4";

    drop.save();

    Another721.create(dropInfo.value.value5);
  }
}

export function handleDropUpdated(event: DropUpdated): void {
  let abPublisher = Publisher.load(ZERO_ADDRESS);

  if (!abPublisher) {
    abPublisher = new Publisher(ZERO_ADDRESS);
    abPublisher.royalty = AB_PAYOUT;
    abPublisher.publisherFee = ZERO_BI;
    abPublisher.registeredBlockNumber = event.block.number;
    abPublisher.timestamp = event.block.timestamp;
    abPublisher.registeredTransactionHash = event.transaction.hash;
    abPublisher.save();
  }

  let drop = Drop.load(event.params.dropId.toString());

  if (!drop) {
    drop = new Drop(event.params.dropId.toString());
    drop.createdTransactionHash = event.transaction.hash;
    drop.createdBlockNumber = event.block.number;
    drop.timestamp = event.block.timestamp;
  }
  const contract = ABDropManager.bind(event.address);
  const dropInfo = contract.try_drops(event.params.dropId);

  let nftAddress;
  if (dropInfo.value.value5.toHexString() == ZERO_ADDRESS) {
    nftAddress = DROP_ADDRESS;
  } else {
    nftAddress = dropInfo.value.value5.toHexString();
  }

  let collection = Collection.load(nftAddress);

  if (!collection) {
    collection = new Collection(nftAddress);
    collection.publisher = abPublisher.id;
    collection.createdBlockNumber = event.block.number;
    collection.timestamp = event.block.timestamp;
    collection.createdTransactionHash = event.transaction.hash;
  }

  if (!dropInfo.reverted) {
    drop.id = dropInfo.value.value0.toString();
    drop.currentSupply = dropInfo.value.value1;
    drop.maxSupply = dropInfo.value.value3.supply;
    drop.sharePerToken = dropInfo.value.value3.royaltySharePerToken;
    drop.collection = collection.id;
    drop.type = "ERC721";
    drop.royaltyCurrency = "0x5441085b042845215052df2238c02c3e0e06f0a4";

    drop.save();
  }
}
