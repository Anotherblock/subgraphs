import { Address } from '@graphprotocol/graph-ts';

import {
  ABRoyaltyV1,
  Claimed,
  Deposited,
} from '../../generated/ABRoyaltyV1/ABRoyaltyV1';
import { Another721 } from '../../generated/Another721/Another721';
import { Claim, Deposit, TokenId, User } from '../../generated/schema';
import { DROP_ADDRESS, ROYALTY_ADDRESS, ZERO_BI } from '../constant';

/**
 *  ROYALTY CLAIM HANDLER
 */
export function handleClaimed(event: Claimed): void {
  const dropContract = Another721.bind(Address.fromString(DROP_ADDRESS));
  const royaltyContract = ABRoyaltyV1.bind(Address.fromString(ROYALTY_ADDRESS));

  let totalAmount = ZERO_BI;

  const dropIdsLength = event.params.dropIds.length;

  for (let i = 0; i < dropIdsLength; i++) {
    const id = event.transaction.hash
      .toHexString()
      .concat('-'.concat(event.params.dropIds[i].toString()));
    let claim = Claim.load(id);

    if (!claim) {
      claim = new Claim(id);
    }
    claim.dropId = event.params.dropIds[i].toString();
    claim.amount = event.params.amounts[i];
    claim.beneficiary = event.params.beneficiary.toHexString();
    claim.blockNumber = event.block.number;
    claim.timestamp = event.block.timestamp;

    claim.save();

    totalAmount = totalAmount.plus(event.params.amounts[i]);

    const userTokenIds = dropContract.try_tokensOfOwner(
      event.params.beneficiary
    );

    if (!userTokenIds.reverted) {
      for (let j = 0; j < userTokenIds.value.length; j++) {
        const claimedAmountPerTokenId = royaltyContract.try_claimedAmounts(
          userTokenIds.value[j]
        );
        if (!claimedAmountPerTokenId.reverted) {
          let tokenId = TokenId.load(userTokenIds.value[j].toString());

          if (!tokenId) {
            tokenId = new TokenId(userTokenIds.value[j].toString());
            tokenId.owner = event.params.beneficiary.toHexString();
          }
          tokenId.claimedAmount = claimedAmountPerTokenId.value;
          tokenId.save();
        }
      }
    }
  }
  const userId = event.params.beneficiary.toHexString();
  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
  }
  user.totalClaimed = user.totalClaimed.plus(totalAmount);

  user.save();
}

/**
 *  ROYALTY DEPOSIT HANDLER
 */
export function handleDeposited(event: Deposited): void {
  const royaltyContract = ABRoyaltyV1.bind(Address.fromString(ROYALTY_ADDRESS));

  const dropIdsLength = event.params.dropIds.length;
  for (let i = 0; i < dropIdsLength; i++) {
    const id = event.transaction.hash
      .toHexString()
      .concat('-'.concat(event.params.dropIds[i].toString()));

    let deposit = Deposit.load(id);
    if (!deposit) {
      deposit = new Deposit(id);
    }

    deposit.dropId = event.params.dropIds[i].toString();
    deposit.amount = event.params.amounts[i];
    deposit.overdue = event.params.overdues[i];
    deposit.rightHolder = event.params.rightHolders[i].toHexString();
    deposit.txHash = event.transaction.hash;
    deposit.blockNumber = event.block.number;
    deposit.timestamp = event.block.timestamp;

    const lastTokenId = royaltyContract.try_lastTokenIdAllowed(
      event.params.dropIds[i]
    );
    if (!lastTokenId.reverted) {
      deposit.lastTokenIdAllowed = lastTokenId.value;
    }

    const totalDeposited = royaltyContract.try_totalDeposited(
      event.params.dropIds[i]
    );
    if (!totalDeposited.reverted) {
      deposit.totalDeposited = totalDeposited.value;
    }
    deposit.save();
  }
}
