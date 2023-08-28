import { Address, BigInt } from '@graphprotocol/graph-ts';

import { Another721 } from '../../generated/templates/Another721/Another721';

export function getDropId(dropAddress: Address): BigInt {
  const contract = Another721.bind(dropAddress);
  const call = contract.try_dropId();

  if (!call.reverted) {
    const dropId = call.value;
    return dropId;
  } else return BigInt.fromI32(999999);
}
