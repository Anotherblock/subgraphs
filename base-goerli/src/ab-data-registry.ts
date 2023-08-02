import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  ABDataRegistry,
  PublisherRegistered,
  DropRegistered,
  SetPublisherFeeCall,
} from "../generated/ABDataRegistry/ABDataRegistry";

import { ERC721AB } from "../generated/ABDataRegistry/ERC721AB";

import { ERC1155AB } from "../generated/ABDataRegistry/ERC1155AB";

import { Collection, Drop, Publisher } from "../generated/schema";

export function handlePublisherRegistered(event: PublisherRegistered): void {
  let contract = ABDataRegistry.bind(event.address);

  let publisher = Publisher.load(event.params.account.toHexString());

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

// export function handlePublisherFeeUpdated(event: PublisherFeeUpdated): void {
//   let contract = ABDataRegistry.bind(event.address);

//   let publisher = Publisher.load(event.params.publisher.toHexString());

//   if (publisher) {
//     publisher.publisherFee = event.params.fee;
//     publisher.save();
//   }
// }

export function handleDropRegistered(event: DropRegistered): void {
  let drop = Drop.load(event.params.dropId.toString());

  if (!drop) {
    drop = new Drop(event.params.dropId.toString());
  }

  let collection = Collection.load(event.params.nft.toHexString());
  if (!collection) return;

  let maxSupply = BigInt.fromI32(0);
  let currentSupply = BigInt.fromI32(0);
  let sharePerToken = BigInt.fromI32(0);

  if (event.params.tokenId == BigInt.fromI32(0)) {
    let nftContract = ERC721AB.bind(event.params.nft);
    maxSupply = nftContract.maxSupply();
    currentSupply = nftContract.totalSupply();
    sharePerToken = nftContract.sharePerToken();
  } else {
    let nftContract = ERC1155AB.bind(event.params.nft);
    let details = nftContract.tokensDetails(event.params.tokenId);
    currentSupply = details.value1;
    maxSupply = details.value2;
    sharePerToken = details.value4;
  }

  drop.tokenId = event.params.tokenId;
  drop.collection = collection.id;
  drop.maxSupply = maxSupply;
  drop.currentSupply = currentSupply;
  drop.sharePerToken = sharePerToken;

  drop.createdTransactionHash = event.transaction.hash;
  drop.createdBlockNumber = event.block.number;
  drop.timestamp = event.block.timestamp;

  drop.save();
}
