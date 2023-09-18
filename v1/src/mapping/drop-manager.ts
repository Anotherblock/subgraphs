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
  const dropInfo = contract.drops(event.params.dropId);

  let nftAddress: string;
  if (
    dropInfo.value5 == Address.fromString(ZERO_ADDRESS) &&
    event.params.dropId != ZERO_BI
  ) {
    nftAddress = DROP_ADDRESS;
  } else {
    nftAddress = dropInfo.value5.toHexString();
  }

  let collection = Collection.load(nftAddress);

  if (!collection) {
    collection = new Collection(nftAddress);
    collection.publisher = abPublisher.id;
    collection.createdBlockNumber = event.block.number;
    collection.timestamp = event.block.timestamp;
    collection.createdTransactionHash = event.transaction.hash;
    collection.save();
  }

  drop.createdTransactionHash = event.transaction.hash;
  drop.createdBlockNumber = event.block.number;
  drop.timestamp = event.block.timestamp;

  drop.id = dropInfo.value0.toString();
  drop.currentSupply = dropInfo.value1;
  drop.maxSupply = dropInfo.value3.supply;
  drop.sharePerToken = dropInfo.value3.royaltySharePerToken;
  drop.collection = collection.id;
  drop.type = "ERC721";
  drop.royaltyCurrency = "0x5441085b042845215052df2238c02c3e0e06f0a4";

  drop.save();
  if (nftAddress != DROP_ADDRESS)
    Another721.create(Address.fromString(nftAddress));
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
  const dropInfo = contract.drops(event.params.dropId);

  let nftAddress: string;
  if (
    dropInfo.value5 == Address.fromString(ZERO_ADDRESS) &&
    event.params.dropId != ZERO_BI
  ) {
    nftAddress = DROP_ADDRESS;
  } else {
    nftAddress = dropInfo.value5.toHexString();
  }

  let collection = Collection.load(nftAddress);

  if (!collection) {
    collection = new Collection(nftAddress);
    collection.publisher = abPublisher.id;
    collection.createdBlockNumber = event.block.number;
    collection.timestamp = event.block.timestamp;
    collection.createdTransactionHash = event.transaction.hash;
  }

  drop.id = dropInfo.value0.toString();
  drop.currentSupply = dropInfo.value1;
  drop.maxSupply = dropInfo.value3.supply;
  drop.sharePerToken = dropInfo.value3.royaltySharePerToken;
  drop.collection = collection.id;
  drop.type = "ERC721";
  drop.royaltyCurrency = "0x5441085b042845215052df2238c02c3e0e06f0a4";

  drop.save();
}
