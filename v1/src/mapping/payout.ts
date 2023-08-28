import { Claimed } from '../../generated/ABPayout.json/ABPayout';
import { PayoutDistributed } from '../../generated/ABVault.json/ABVault';
import { Claim, Payout } from '../../generated/schema';

/**
 *  ROYALTY DEPOSIT HANDLER
 */
export function handleDistribute(event: PayoutDistributed): void {
  const id =
    event.params.dropId.toString() + '-' + event.transaction.hash.toHexString();
  const payout = new Payout(id);

  payout.underlying = event.params.underlying.toHexString();
  payout.dropId = event.params.dropId;
  payout.amount = event.params.amount;
  payout.transactionHash = event.transaction.hash;
  payout.timestamp = event.block.timestamp;
  payout.save();
}

export function handleClaimed(event: Claimed): void {
  const id =
    event.params.dropId.toHexString() + event.transaction.hash.toHexString();
  const claim = new Claim(id);

  claim.amount = event.params.amount;
  claim.dropId = event.params.dropId;
  claim.user = event.params.user.toHexString();
  claim.transactionHash = event.transaction.hash;
  claim.timestamp = event.block.timestamp;
  claim.save();
}
