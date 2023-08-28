// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  BigInt,
  Bytes,
  ethereum,
  TypedMap} from "@graphprotocol/graph-ts";

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

  get _dropId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Another721__phasesPerDropResult {
  value0: BigInt;
  value1: BigInt;
  value2: Bytes;

  constructor(value0: BigInt, value1: BigInt, value2: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromFixedBytes(this.value2));
    return map;
  }
}

export class Another721 extends ethereum.SmartContract {
  static bind(address: Address): Another721 {
    return new Another721("Another721", address);
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

  dropManager(): Address {
    let result = super.call("dropManager", "dropManager():(address)", []);

    return result[0].toAddress();
  }

  try_dropManager(): ethereum.CallResult<Address> {
    let result = super.tryCall("dropManager", "dropManager():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  locked(): boolean {
    let result = super.call("locked", "locked():(bool)", []);

    return result[0].toBoolean();
  }

  try_locked(): ethereum.CallResult<boolean> {
    let result = super.tryCall("locked", "locked():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mintedPerPhase(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "mintedPerPhase",
      "mintedPerPhase(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_mintedPerPhase(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintedPerPhase",
      "mintedPerPhase(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
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

  operatorFilteringEnabled(): boolean {
    let result = super.call(
      "operatorFilteringEnabled",
      "operatorFilteringEnabled():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_operatorFilteringEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "operatorFilteringEnabled",
      "operatorFilteringEnabled():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  phasesPerDrop(param0: BigInt): Another721__phasesPerDropResult {
    let result = super.call(
      "phasesPerDrop",
      "phasesPerDrop(uint256):(uint256,uint256,bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Another721__phasesPerDropResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBytes()
    );
  }

  try_phasesPerDrop(
    param0: BigInt
  ): ethereum.CallResult<Another721__phasesPerDropResult> {
    let result = super.tryCall(
      "phasesPerDrop",
      "phasesPerDrop(uint256):(uint256,uint256,bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Another721__phasesPerDropResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBytes()
      )
    );
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

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
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

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
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

  get _dropManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _abPFP(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _baseUri(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _name(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MintAllowlistCall extends ethereum.Call {
  get inputs(): MintAllowlistCall__Inputs {
    return new MintAllowlistCall__Inputs(this);
  }

  get outputs(): MintAllowlistCall__Outputs {
    return new MintAllowlistCall__Outputs(this);
  }
}

export class MintAllowlistCall__Inputs {
  _call: MintAllowlistCall;

  constructor(call: MintAllowlistCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _proof(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }
}

export class MintAllowlistCall__Outputs {
  _call: MintAllowlistCall;

  constructor(call: MintAllowlistCall) {
    this._call = call;
  }
}

export class MintPfpHolderCall extends ethereum.Call {
  get inputs(): MintPfpHolderCall__Inputs {
    return new MintPfpHolderCall__Inputs(this);
  }

  get outputs(): MintPfpHolderCall__Outputs {
    return new MintPfpHolderCall__Outputs(this);
  }
}

export class MintPfpHolderCall__Inputs {
  _call: MintPfpHolderCall;

  constructor(call: MintPfpHolderCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _proof(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }
}

export class MintPfpHolderCall__Outputs {
  _call: MintPfpHolderCall;

  constructor(call: MintPfpHolderCall) {
    this._call = call;
  }
}

export class MintPublicCall extends ethereum.Call {
  get inputs(): MintPublicCall__Inputs {
    return new MintPublicCall__Inputs(this);
  }

  get outputs(): MintPublicCall__Outputs {
    return new MintPublicCall__Outputs(this);
  }
}

export class MintPublicCall__Inputs {
  _call: MintPublicCall;

  constructor(call: MintPublicCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintPublicCall__Outputs {
  _call: MintPublicCall;

  constructor(call: MintPublicCall) {
    this._call = call;
  }
}

export class MintSeasonHolderCall extends ethereum.Call {
  get inputs(): MintSeasonHolderCall__Inputs {
    return new MintSeasonHolderCall__Inputs(this);
  }

  get outputs(): MintSeasonHolderCall__Outputs {
    return new MintSeasonHolderCall__Outputs(this);
  }
}

export class MintSeasonHolderCall__Inputs {
  _call: MintSeasonHolderCall;

  constructor(call: MintSeasonHolderCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _proof(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }
}

export class MintSeasonHolderCall__Outputs {
  _call: MintSeasonHolderCall;

  constructor(call: MintSeasonHolderCall) {
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

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
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

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
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

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _approved(): boolean {
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

export class SetDropIdCall extends ethereum.Call {
  get inputs(): SetDropIdCall__Inputs {
    return new SetDropIdCall__Inputs(this);
  }

  get outputs(): SetDropIdCall__Outputs {
    return new SetDropIdCall__Outputs(this);
  }
}

export class SetDropIdCall__Inputs {
  _call: SetDropIdCall;

  constructor(call: SetDropIdCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDropIdCall__Outputs {
  _call: SetDropIdCall;

  constructor(call: SetDropIdCall) {
    this._call = call;
  }
}

export class SetDropManagerCall extends ethereum.Call {
  get inputs(): SetDropManagerCall__Inputs {
    return new SetDropManagerCall__Inputs(this);
  }

  get outputs(): SetDropManagerCall__Outputs {
    return new SetDropManagerCall__Outputs(this);
  }
}

export class SetDropManagerCall__Inputs {
  _call: SetDropManagerCall;

  constructor(call: SetDropManagerCall) {
    this._call = call;
  }

  get _dropManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDropManagerCall__Outputs {
  _call: SetDropManagerCall;

  constructor(call: SetDropManagerCall) {
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

  get maxMint(): BigInt {
    return this[1].toBigInt();
  }

  get merkle(): Bytes {
    return this[2].toBytes();
  }
}

export class SetOperatorFilteringEnabledCall extends ethereum.Call {
  get inputs(): SetOperatorFilteringEnabledCall__Inputs {
    return new SetOperatorFilteringEnabledCall__Inputs(this);
  }

  get outputs(): SetOperatorFilteringEnabledCall__Outputs {
    return new SetOperatorFilteringEnabledCall__Outputs(this);
  }
}

export class SetOperatorFilteringEnabledCall__Inputs {
  _call: SetOperatorFilteringEnabledCall;

  constructor(call: SetOperatorFilteringEnabledCall) {
    this._call = call;
  }

  get value(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetOperatorFilteringEnabledCall__Outputs {
  _call: SetOperatorFilteringEnabledCall;

  constructor(call: SetOperatorFilteringEnabledCall) {
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

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
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

export class WithdrawAllCall extends ethereum.Call {
  get inputs(): WithdrawAllCall__Inputs {
    return new WithdrawAllCall__Inputs(this);
  }

  get outputs(): WithdrawAllCall__Outputs {
    return new WithdrawAllCall__Outputs(this);
  }
}

export class WithdrawAllCall__Inputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }
}

export class WithdrawAllCall__Outputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
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

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawToRightholderCall__Outputs {
  _call: WithdrawToRightholderCall;

  constructor(call: WithdrawToRightholderCall) {
    this._call = call;
  }
}
