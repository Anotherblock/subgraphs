import { Transfer } from '../../generated/AnotherPFP/AnotherPFP';
import { AnotherPFP } from '../../generated/schema';

/**
 *  TRANSFER HANDLER
 */

export function handlePfpTransfer(event: Transfer): void {
  let tokenId = AnotherPFP.load(event.params.tokenId.toString());
  if (!tokenId) {
    tokenId = new AnotherPFP(event.params.tokenId.toString());
  }
  tokenId.owner = event.params.to.toHexString();
  tokenId.save();
}
