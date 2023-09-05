import { BigInt } from '@graphprotocol/graph-ts';

import { Transfer } from '../../generated/Old721V1/Old721V1';
import { Drop, TokenId, User, UserHoldings } from '../../generated/schema';
import {ONE_BI, ZERO_ADDRESS, ZERO_BI } from '../constant';

/**
 *  TRANSFER HANDLER
 */
export function handleOldTransfer(event: Transfer): void {
  // Get the drop ID associated to the token ID transferred

  let dropId = BigInt.fromI32(3);

  if (event.params.tokenId <= BigInt.fromI32(250)) {
    dropId = BigInt.fromI32(1);
  } else if (event.params.tokenId <= BigInt.fromI32(650)) {
    dropId = BigInt.fromI32(2);
  }

  // Update the Token ID Information (TokenId entity)
  let tokenId = TokenId.load(
    dropId.toString().concat('-').concat(event.params.tokenId.toString())
  );
  if (!tokenId) {
    tokenId = new TokenId(
      dropId.toString().concat('-').concat(event.params.tokenId.toString())
    );
    tokenId.dropId = dropId.toString();
  }
  tokenId.owner = event.params.to.toHexString();
  tokenId.save();

  const newOwnerId = event.params.to.toHexString();
  let newOwner = User.load(newOwnerId);
  if (!newOwner) {
    newOwner = new User(newOwnerId);
    newOwner.totalHoldings = ZERO_BI;
  }
  newOwner.totalHoldings = newOwner.totalHoldings.plus(ONE_BI);

  const newUserHoldingId = newOwnerId.concat('-'.concat(dropId.toString()));

  let newUserHoldings = UserHoldings.load(newUserHoldingId);

  if (!newUserHoldings) {
    newUserHoldings = new UserHoldings(newUserHoldingId);
    newUserHoldings.user = newOwnerId;
    newUserHoldings.dropId = dropId.toString();
    newUserHoldings.totalQuantity = ZERO_BI;
    newUserHoldings.tokenIds = new Array<string>(0);
  }

  const tokenIds = newUserHoldings.tokenIds;
  tokenIds.push(
    dropId.toString().concat('-').concat(event.params.tokenId.toString())
  );
  newUserHoldings.tokenIds = tokenIds;
  let quantity = newUserHoldings.totalQuantity;
  quantity = quantity.plus(ONE_BI);
  newUserHoldings.totalQuantity = quantity;
  newUserHoldings.save();
  newOwner.save();

  const previousOwnerId = event.params.from.toHexString();

  if (previousOwnerId != ZERO_ADDRESS) {
    const previousOwner = User.load(previousOwnerId);

    if (previousOwner) {
      previousOwner.totalHoldings = previousOwner.totalHoldings.minus(ONE_BI);

      const previousUserHoldingId = previousOwnerId.concat(
        '-'.concat(dropId.toString())
      );

      const previousUserHoldings = UserHoldings.load(previousUserHoldingId);

      if (previousUserHoldings) {
        let quantity = previousUserHoldings.totalQuantity;
        quantity = quantity.minus(ONE_BI);
        previousUserHoldings.totalQuantity = quantity;

        const tokenIdsArray = previousUserHoldings.tokenIds;

        for (let j = 0; j < tokenIdsArray.length; j++) {
          if (
            tokenIdsArray[j] ==
            dropId
              .toString()
              .concat('-')
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
      let dropSold = drop.sold;
      dropSold = dropSold.plus(ONE_BI);
      drop.sold = dropSold;
      drop.save();
    }
  }
}