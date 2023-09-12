import { Address } from "@graphprotocol/graph-ts";

import {
  ABDropManager,
  DropCreated,
  DropUpdated,
} from "../../generated/ABDropManager/ABDropManager";
import { Drop } from "../../generated/schema";
import { Another721 } from "../../generated/templates";
import { DROP_ADDRESS, DROP_MANAGER_ADDRESS, ZERO_ADDRESS } from "../constant";
import { ZERO_BI } from "../constant.template";

export function handleDropCreated(event: DropCreated): void {
  let drop = Drop.load(event.params.dropId.toString());

  if (!drop) {
    drop = new Drop(event.params.dropId.toString());
  }
  const contract = ABDropManager.bind(Address.fromString(DROP_MANAGER_ADDRESS));
  const dropInfo = contract.try_drops(event.params.dropId);

  drop.createdTransactionHash = event.transaction.hash;
  drop.createdBlockNumber = event.block.number;
  drop.timestamp = event.block.timestamp;

  if (!dropInfo.reverted) {
    drop.dropId = dropInfo.value.value0;
    drop.sold = dropInfo.value.value1;
    drop.rightHolderFee = dropInfo.value.value2;
    drop.price = dropInfo.value.value3.price;
    drop.supply = dropInfo.value.value3.supply;
    drop.royaltySharePerToken = dropInfo.value.value3.royaltySharePerToken;
    drop.owner = dropInfo.value.value4.toHexString();
    if (
      dropInfo.value.value5 == Address.fromString(ZERO_ADDRESS) &&
      event.params.dropId != ZERO_BI
    ) {
      drop.nft = DROP_ADDRESS;
    } else {
      drop.nft = dropInfo.value.value5.toHexString();
    }
    drop.save();

    Another721.create(dropInfo.value.value5);
  }
}

export function handleDropUpdated(event: DropUpdated): void {
  let drop = Drop.load(event.params.dropId.toString());

  if (!drop) {
    drop = new Drop(event.params.dropId.toString());
    drop.createdTransactionHash = event.transaction.hash;
    drop.createdBlockNumber = event.block.number;
    drop.timestamp = event.block.timestamp;
  }
  const contract = ABDropManager.bind(event.address);
  const dropInfo = contract.try_drops(event.params.dropId);

  if (!dropInfo.reverted) {
    drop.dropId = dropInfo.value.value0;
    drop.sold = dropInfo.value.value1;
    drop.rightHolderFee = dropInfo.value.value2;
    drop.price = dropInfo.value.value3.price;
    drop.supply = dropInfo.value.value3.supply;
    drop.royaltySharePerToken = dropInfo.value.value3.royaltySharePerToken;
    drop.owner = dropInfo.value.value4.toHexString();
    if (
      dropInfo.value.value5 == Address.fromString(ZERO_ADDRESS) &&
      event.params.dropId != ZERO_BI
    ) {
      drop.nft = DROP_ADDRESS;
    } else {
      drop.nft = dropInfo.value.value5.toHexString();
    }
    drop.save();
  }
}
