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

export class DropCreated extends ethereum.Event {
  get params(): DropCreated__Params {
    return new DropCreated__Params(this);
  }
}

export class DropCreated__Params {
  _event: DropCreated;

  constructor(event: DropCreated) {
    this._event = event;
  }

  get dropId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DropUpdated extends ethereum.Event {
  get params(): DropUpdated__Params {
    return new DropUpdated__Params(this);
  }
}

export class DropUpdated__Params {
  _event: DropUpdated;

  constructor(event: DropUpdated) {
    this._event = event;
  }

  get dropId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
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

export class ABDropManager__dropsResultTokenInfoStruct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get supply(): BigInt {
    return this[1].toBigInt();
  }

  get royaltySharePerToken(): BigInt {
    return this[2].toBigInt();
  }
}

export class ABDropManager__dropsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: ABDropManager__dropsResultTokenInfoStruct;
  value4: Address;
  value5: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: ABDropManager__dropsResultTokenInfoStruct,
    value4: Address,
    value5: Address
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
    map.set("value3", ethereum.Value.fromTuple(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    return map;
  }

  getDropId(): BigInt {
    return this.value0;
  }

  getSold(): BigInt {
    return this.value1;
  }

  getRightHolderFee(): BigInt {
    return this.value2;
  }

  getTokenInfo(): ABDropManager__dropsResultTokenInfoStruct {
    return this.value3;
  }

  getOwner(): Address {
    return this.value4;
  }

  getNft(): Address {
    return this.value5;
  }
}

export class ABDropManager extends ethereum.SmartContract {
  static bind(address: Address): ABDropManager {
    return new ABDropManager("ABDropManager", address);
  }

  drops(param0: BigInt): ABDropManager__dropsResult {
    let result = super.call(
      "drops",
      "drops(uint256):(uint256,uint256,uint256,(uint256,uint256,uint256),address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ABDropManager__dropsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      changetype<ABDropManager__dropsResultTokenInfoStruct>(
        result[3].toTuple()
      ),
      result[4].toAddress(),
      result[5].toAddress()
    );
  }

  try_drops(param0: BigInt): ethereum.CallResult<ABDropManager__dropsResult> {
    let result = super.tryCall(
      "drops",
      "drops(uint256):(uint256,uint256,uint256,(uint256,uint256,uint256),address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ABDropManager__dropsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        changetype<ABDropManager__dropsResultTokenInfoStruct>(
          value[3].toTuple()
        ),
        value[4].toAddress(),
        value[5].toAddress()
      )
    );
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

  treasury(): Address {
    let result = super.call("treasury", "treasury():(address)", []);

    return result[0].toAddress();
  }

  try_treasury(): ethereum.CallResult<Address> {
    let result = super.tryCall("treasury", "treasury():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _supply(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _royaltySharePerToken(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _rightHolderFee(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _baseFlow(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _nftAddress(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
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

  get _treasury(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _messenger(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _relay(): Address {
    return this._call.inputValues[2].value.toAddress();
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

export class SetDropNFTCall extends ethereum.Call {
  get inputs(): SetDropNFTCall__Inputs {
    return new SetDropNFTCall__Inputs(this);
  }

  get outputs(): SetDropNFTCall__Outputs {
    return new SetDropNFTCall__Outputs(this);
  }
}

export class SetDropNFTCall__Inputs {
  _call: SetDropNFTCall;

  constructor(call: SetDropNFTCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _nftAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetDropNFTCall__Outputs {
  _call: SetDropNFTCall;

  constructor(call: SetDropNFTCall) {
    this._call = call;
  }
}

export class SetGasLimitCall extends ethereum.Call {
  get inputs(): SetGasLimitCall__Inputs {
    return new SetGasLimitCall__Inputs(this);
  }

  get outputs(): SetGasLimitCall__Outputs {
    return new SetGasLimitCall__Outputs(this);
  }
}

export class SetGasLimitCall__Inputs {
  _call: SetGasLimitCall;

  constructor(call: SetGasLimitCall) {
    this._call = call;
  }

  get _gasLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetGasLimitCall__Outputs {
  _call: SetGasLimitCall;

  constructor(call: SetGasLimitCall) {
    this._call = call;
  }
}

export class SetRightHolderInfoCall extends ethereum.Call {
  get inputs(): SetRightHolderInfoCall__Inputs {
    return new SetRightHolderInfoCall__Inputs(this);
  }

  get outputs(): SetRightHolderInfoCall__Outputs {
    return new SetRightHolderInfoCall__Outputs(this);
  }
}

export class SetRightHolderInfoCall__Inputs {
  _call: SetRightHolderInfoCall;

  constructor(call: SetRightHolderInfoCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _rightHolderFee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _owner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SetRightHolderInfoCall__Outputs {
  _call: SetRightHolderInfoCall;

  constructor(call: SetRightHolderInfoCall) {
    this._call = call;
  }
}

export class SetTreasuryCall extends ethereum.Call {
  get inputs(): SetTreasuryCall__Inputs {
    return new SetTreasuryCall__Inputs(this);
  }

  get outputs(): SetTreasuryCall__Outputs {
    return new SetTreasuryCall__Outputs(this);
  }
}

export class SetTreasuryCall__Inputs {
  _call: SetTreasuryCall;

  constructor(call: SetTreasuryCall) {
    this._call = call;
  }

  get _newTreasury(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTreasuryCall__Outputs {
  _call: SetTreasuryCall;

  constructor(call: SetTreasuryCall) {
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

export class UpdateDropCounterCall extends ethereum.Call {
  get inputs(): UpdateDropCounterCall__Inputs {
    return new UpdateDropCounterCall__Inputs(this);
  }

  get outputs(): UpdateDropCounterCall__Outputs {
    return new UpdateDropCounterCall__Outputs(this);
  }
}

export class UpdateDropCounterCall__Inputs {
  _call: UpdateDropCounterCall;

  constructor(call: UpdateDropCounterCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateDropCounterCall__Outputs {
  _call: UpdateDropCounterCall;

  constructor(call: UpdateDropCounterCall) {
    this._call = call;
  }
}

export class UpdateDropPriceCall extends ethereum.Call {
  get inputs(): UpdateDropPriceCall__Inputs {
    return new UpdateDropPriceCall__Inputs(this);
  }

  get outputs(): UpdateDropPriceCall__Outputs {
    return new UpdateDropPriceCall__Outputs(this);
  }
}

export class UpdateDropPriceCall__Inputs {
  _call: UpdateDropPriceCall;

  constructor(call: UpdateDropPriceCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateDropPriceCall__Outputs {
  _call: UpdateDropPriceCall;

  constructor(call: UpdateDropPriceCall) {
    this._call = call;
  }
}

export class UpdateDropRoyaltyShareCall extends ethereum.Call {
  get inputs(): UpdateDropRoyaltyShareCall__Inputs {
    return new UpdateDropRoyaltyShareCall__Inputs(this);
  }

  get outputs(): UpdateDropRoyaltyShareCall__Outputs {
    return new UpdateDropRoyaltyShareCall__Outputs(this);
  }
}

export class UpdateDropRoyaltyShareCall__Inputs {
  _call: UpdateDropRoyaltyShareCall;

  constructor(call: UpdateDropRoyaltyShareCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _share(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateDropRoyaltyShareCall__Outputs {
  _call: UpdateDropRoyaltyShareCall;

  constructor(call: UpdateDropRoyaltyShareCall) {
    this._call = call;
  }
}

export class UpdateDropSupplyCall extends ethereum.Call {
  get inputs(): UpdateDropSupplyCall__Inputs {
    return new UpdateDropSupplyCall__Inputs(this);
  }

  get outputs(): UpdateDropSupplyCall__Outputs {
    return new UpdateDropSupplyCall__Outputs(this);
  }
}

export class UpdateDropSupplyCall__Inputs {
  _call: UpdateDropSupplyCall;

  constructor(call: UpdateDropSupplyCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _supply(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateDropSupplyCall__Outputs {
  _call: UpdateDropSupplyCall;

  constructor(call: UpdateDropSupplyCall) {
    this._call = call;
  }
}

export class UpdateOnTransferCall extends ethereum.Call {
  get inputs(): UpdateOnTransferCall__Inputs {
    return new UpdateOnTransferCall__Inputs(this);
  }

  get outputs(): UpdateOnTransferCall__Outputs {
    return new UpdateOnTransferCall__Outputs(this);
  }
}

export class UpdateOnTransferCall__Inputs {
  _call: UpdateOnTransferCall;

  constructor(call: UpdateOnTransferCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _dropId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _quantity(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class UpdateOnTransferCall__Outputs {
  _call: UpdateOnTransferCall;

  constructor(call: UpdateOnTransferCall) {
    this._call = call;
  }
}
