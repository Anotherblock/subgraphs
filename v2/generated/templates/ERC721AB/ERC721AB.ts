// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class UpdatedPhase extends ethereum.Event {
  get params(): UpdatedPhase__Params {
    return new UpdatedPhase__Params(this);
  }
}

export class UpdatedPhase__Params {
  _event: UpdatedPhase;

  constructor(event: UpdatedPhase) {
    this._event = event;
  }

  get numOfPhase(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ConsecutiveTransfer extends ethereum.Event {
  get params(): ConsecutiveTransfer__Params {
    return new ConsecutiveTransfer__Params(this);
  }
}

export class ConsecutiveTransfer__Params {
  _event: ConsecutiveTransfer;

  constructor(event: ConsecutiveTransfer) {
    this._event = event;
  }

  get fromTokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get toTokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ERC721AB__phasesResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    return map;
  }

  getPhaseStart(): BigInt {
    return this.value0;
  }

  getPhaseEnd(): BigInt {
    return this.value1;
  }

  getPriceETH(): BigInt {
    return this.value2;
  }

  getPriceERC20(): BigInt {
    return this.value3;
  }

  getMaxMint(): BigInt {
    return this.value4;
  }

  getIsPublic(): boolean {
    return this.value5;
  }
}

export class ERC721AB extends ethereum.SmartContract {
  static bind(address: Address): ERC721AB {
    return new ERC721AB("ERC721AB", address);
  }

  maxSupply(): BigInt {
    let result = super.call("maxSupply", "maxSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSupply", "maxSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  abDataRegistry(): Address {
    let result = super.call("abDataRegistry", "abDataRegistry():(address)", []);

    return result[0].toAddress();
  }

  try_abDataRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "abDataRegistry",
      "abDataRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  abKYCModule(): Address {
    let result = super.call("abKYCModule", "abKYCModule():(address)", []);

    return result[0].toAddress();
  }

  try_abKYCModule(): ethereum.CallResult<Address> {
    let result = super.tryCall("abKYCModule", "abKYCModule():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  abVerifier(): Address {
    let result = super.call("abVerifier", "abVerifier():(address)", []);

    return result[0].toAddress();
  }

  try_abVerifier(): ethereum.CallResult<Address> {
    let result = super.tryCall("abVerifier", "abVerifier():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  acceptedCurrency(): Address {
    let result = super.call(
      "acceptedCurrency",
      "acceptedCurrency():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_acceptedCurrency(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "acceptedCurrency",
      "acceptedCurrency():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  dropId(): BigInt {
    let result = super.call("dropId", "dropId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_dropId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("dropId", "dropId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mintedPerPhase(user: Address, phaseId: BigInt): BigInt {
    let result = super.call(
      "mintedPerPhase",
      "mintedPerPhase(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(phaseId)
      ]
    );

    return result[0].toBigInt();
  }

  try_mintedPerPhase(
    user: Address,
    phaseId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintedPerPhase",
      "mintedPerPhase(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(phaseId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  phases(param0: BigInt): ERC721AB__phasesResult {
    let result = super.call(
      "phases",
      "phases(uint256):(uint256,uint256,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ERC721AB__phasesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBoolean()
    );
  }

  try_phases(param0: BigInt): ethereum.CallResult<ERC721AB__phasesResult> {
    let result = super.tryCall(
      "phases",
      "phases(uint256):(uint256,uint256,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ERC721AB__phasesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBoolean()
      )
    );
  }

  publisher(): Address {
    let result = super.call("publisher", "publisher():(address)", []);

    return result[0].toAddress();
  }

  try_publisher(): ethereum.CallResult<Address> {
    let result = super.tryCall("publisher", "publisher():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sharePerToken(): BigInt {
    let result = super.call("sharePerToken", "sharePerToken():(uint256)", []);

    return result[0].toBigInt();
  }

  try_sharePerToken(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sharePerToken",
      "sharePerToken():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(_tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(_tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _publisher(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _abDataRegistry(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _abVerifier(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _abKYCModule(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get _newBaseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetDropPhasesCall extends ethereum.Call {
  get inputs(): SetDropPhasesCall__Inputs {
    return new SetDropPhasesCall__Inputs(this);
  }

  get outputs(): SetDropPhasesCall__Outputs {
    return new SetDropPhasesCall__Outputs(this);
  }
}

export class SetDropPhasesCall__Inputs {
  _call: SetDropPhasesCall;

  constructor(call: SetDropPhasesCall) {
    this._call = call;
  }

  get _phases(): Array<SetDropPhasesCall_phasesStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      SetDropPhasesCall_phasesStruct
    >();
  }
}

export class SetDropPhasesCall__Outputs {
  _call: SetDropPhasesCall;

  constructor(call: SetDropPhasesCall) {
    this._call = call;
  }
}

export class SetDropPhasesCall_phasesStruct extends ethereum.Tuple {
  get phaseStart(): BigInt {
    return this[0].toBigInt();
  }

  get phaseEnd(): BigInt {
    return this[1].toBigInt();
  }

  get priceETH(): BigInt {
    return this[2].toBigInt();
  }

  get priceERC20(): BigInt {
    return this[3].toBigInt();
  }

  get maxMint(): BigInt {
    return this[4].toBigInt();
  }

  get isPublic(): boolean {
    return this[5].toBoolean();
  }
}

export class SetSharePerTokenCall extends ethereum.Call {
  get inputs(): SetSharePerTokenCall__Inputs {
    return new SetSharePerTokenCall__Inputs(this);
  }

  get outputs(): SetSharePerTokenCall__Outputs {
    return new SetSharePerTokenCall__Outputs(this);
  }
}

export class SetSharePerTokenCall__Inputs {
  _call: SetSharePerTokenCall;

  constructor(call: SetSharePerTokenCall) {
    this._call = call;
  }

  get _newSharePerToken(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetSharePerTokenCall__Outputs {
  _call: SetSharePerTokenCall;

  constructor(call: SetSharePerTokenCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawERC20Call extends ethereum.Call {
  get inputs(): WithdrawERC20Call__Inputs {
    return new WithdrawERC20Call__Inputs(this);
  }

  get outputs(): WithdrawERC20Call__Outputs {
    return new WithdrawERC20Call__Outputs(this);
  }
}

export class WithdrawERC20Call__Inputs {
  _call: WithdrawERC20Call;

  constructor(call: WithdrawERC20Call) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawERC20Call__Outputs {
  _call: WithdrawERC20Call;

  constructor(call: WithdrawERC20Call) {
    this._call = call;
  }
}

export class WithdrawERC20ToRightholderCall extends ethereum.Call {
  get inputs(): WithdrawERC20ToRightholderCall__Inputs {
    return new WithdrawERC20ToRightholderCall__Inputs(this);
  }

  get outputs(): WithdrawERC20ToRightholderCall__Outputs {
    return new WithdrawERC20ToRightholderCall__Outputs(this);
  }
}

export class WithdrawERC20ToRightholderCall__Inputs {
  _call: WithdrawERC20ToRightholderCall;

  constructor(call: WithdrawERC20ToRightholderCall) {
    this._call = call;
  }
}

export class WithdrawERC20ToRightholderCall__Outputs {
  _call: WithdrawERC20ToRightholderCall;

  constructor(call: WithdrawERC20ToRightholderCall) {
    this._call = call;
  }
}

export class WithdrawToRightholderCall extends ethereum.Call {
  get inputs(): WithdrawToRightholderCall__Inputs {
    return new WithdrawToRightholderCall__Inputs(this);
  }

  get outputs(): WithdrawToRightholderCall__Outputs {
    return new WithdrawToRightholderCall__Outputs(this);
  }
}

export class WithdrawToRightholderCall__Inputs {
  _call: WithdrawToRightholderCall;

  constructor(call: WithdrawToRightholderCall) {
    this._call = call;
  }
}

export class WithdrawToRightholderCall__Outputs {
  _call: WithdrawToRightholderCall;

  constructor(call: WithdrawToRightholderCall) {
    this._call = call;
  }
}
