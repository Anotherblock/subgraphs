import { BigInt } from "@graphprotocol/graph-ts";
import {
  AnotherCloneFactory,
  Initialized,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
} from "../generated/AnotherCloneFactory/AnotherCloneFactory";

import { CollectionCreated } from "../generated/AnotherCloneFactory/AnotherCloneFactory";

import { Collection } from "../generated/schema";

export function handleCollectionCreated(event: CollectionCreated): void {
  let contract = AnotherCloneFactory.bind(event.address);

  let collection = Collection.load(event.params.nft.toHexString());

  if (!collection) {
    collection = new Collection(event.params.nft.toHexString());
  }

  collection.publisher = event.params.publisher.toHexString();

  collection.createdTransactionHash = event.transaction.hash;
  collection.createdBlockNumber = event.block.number;
  collection.timestamp = event.block.timestamp;

  collection.save();
}

// export function handleInitialized(event: Initialized): void {
//   // Entities can be loaded from the store using a string ID; this ID
//   // needs to be unique across all entities of the same type
//   let entity = ExampleEntity.load(event.transaction.from.toHex());

//   // Entities only exist after they have been saved to the store;
//   // `null` checks allow to create entities on demand
//   if (!entity) {
//     entity = new ExampleEntity(event.transaction.from.toHex());

//     // Entity fields can be set using simple assignments
//     entity.count = BigInt.fromI32(0);
//   }

//   // BigInt and BigDecimal math are supported
//   entity.count = entity.count + BigInt.fromI32(1);

//   // Entity fields can be set based on event parameters
//   entity.version = event.params.version;

//   // Entities can be written to the store with `.save()`
//   entity.save();

//   // Note: If a handler doesn't require existing field values, it is faster
//   // _not_ to load the entity from the store. Instead, create it fresh with
//   // `new Entity(...)`, set the fields that should be updated and save the
//   // entity back to the store. Fields that were not set or unset remain
//   // unchanged, allowing for partial updates to be applied.

//   // It is also possible to access smart contracts from mappings. For
//   // example, the contract that has emitted the event can be connected to
//   // with:
//   //
//   // let contract = Contract.bind(event.address)
//   //
//   // The following functions can then be called on this contract to access
//   // state variables and other data:
//   //
//   // - contract.AB_ADMIN_ROLE(...)
//   // - contract.DEFAULT_ADMIN_ROLE(...)
//   // - contract.PUBLISHER_ROLE(...)
//   // - contract.abDataRegistry(...)
//   // - contract.abVerifier(...)
//   // - contract.collections(...)
//   // - contract.erc1155Impl(...)
//   // - contract.erc721Impl(...)
//   // - contract.getRoleAdmin(...)
//   // - contract.hasPublisherRole(...)
//   // - contract.hasRole(...)
//   // - contract.predictERC1155Address(...)
//   // - contract.predictERC721Address(...)
//   // - contract.royaltyImpl(...)
//   // - contract.supportsInterface(...)
// }

// export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

// export function handleRoleGranted(event: RoleGranted): void {}

// export function handleRoleRevoked(event: RoleRevoked): void {}
