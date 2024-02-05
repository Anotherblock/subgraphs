// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

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

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class HoldingsBatchUpdated extends ethereum.Event {
  get params(): HoldingsBatchUpdated__Params {
    return new HoldingsBatchUpdated__Params(this);
  }
}

export class HoldingsBatchUpdated__Params {
  _event: HoldingsBatchUpdated;

  constructor(event: HoldingsBatchUpdated) {
    this._event = event;
  }

  get dropId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get newOwners(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }
}

export class HoldingsUpdated extends ethereum.Event {
  get params(): HoldingsUpdated__Params {
    return new HoldingsUpdated__Params(this);
  }
}

export class HoldingsUpdated__Params {
  _event: HoldingsUpdated;

  constructor(event: HoldingsUpdated) {
    this._event = event;
  }

  get dropId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newOwner(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoyaltyClaimed extends ethereum.Event {
  get params(): RoyaltyClaimed__Params {
    return new RoyaltyClaimed__Params(this);
  }
}

export class RoyaltyClaimed__Params {
  _event: RoyaltyClaimed;

  constructor(event: RoyaltyClaimed) {
    this._event = event;
  }

  get dropId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RoyaltyDistributed extends ethereum.Event {
  get params(): RoyaltyDistributed__Params {
    return new RoyaltyDistributed__Params(this);
  }
}

export class RoyaltyDistributed__Params {
  _event: RoyaltyDistributed;

  constructor(event: RoyaltyDistributed) {
    this._event = event;
  }

  get dropId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RoyaltyDistributedMultiDrop extends ethereum.Event {
  get params(): RoyaltyDistributedMultiDrop__Params {
    return new RoyaltyDistributedMultiDrop__Params(this);
  }
}

export class RoyaltyDistributedMultiDrop__Params {
  _event: RoyaltyDistributedMultiDrop;

  constructor(event: RoyaltyDistributedMultiDrop) {
    this._event = event;
  }

  get dropIds(): Array<BigInt> {
    return this._event.parameters[0].value.toBigIntArray();
  }

  get amount(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }
}

export class DropDataBatchUpdated extends ethereum.Event {
  get params(): DropDataBatchUpdated__Params {
    return new DropDataBatchUpdated__Params(this);
  }
}

export class DropDataBatchUpdated__Params {
  _event: DropDataBatchUpdated;

  constructor(event: DropDataBatchUpdated) {
    this._event = event;
  }

  get dropId(): Array<BigInt> {
    return this._event.parameters[0].value.toBigIntArray();
  }

  get nft(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }

  get isL1(): Array<boolean> {
    return this._event.parameters[2].value.toBooleanArray();
  }

  get supply(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }
}

export class DropDataUpdated extends ethereum.Event {
  get params(): DropDataUpdated__Params {
    return new DropDataUpdated__Params(this);
  }
}

export class DropDataUpdated__Params {
  _event: DropDataUpdated;

  constructor(event: DropDataUpdated) {
    this._event = event;
  }

  get dropId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nft(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get isL1(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get supply(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ABClaim__dropDataResult {
  value0: Address;
  value1: boolean;
  value2: BigInt;

  constructor(value0: Address, value1: boolean, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getNft(): Address {
    return this.value0;
  }

  getIsL1(): boolean {
    return this.value1;
  }

  getSupply(): BigInt {
    return this.value2;
  }
}

export class ABClaim extends ethereum.SmartContract {
  static bind(address: Address): ABClaim {
    return new ABClaim("ABClaim", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RELAYER_ROLE(): Bytes {
    let result = super.call("RELAYER_ROLE", "RELAYER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_RELAYER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("RELAYER_ROLE", "RELAYER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  USDC(): Address {
    let result = super.call("USDC", "USDC():(address)", []);

    return result[0].toAddress();
  }

  try_USDC(): ethereum.CallResult<Address> {
    let result = super.tryCall("USDC", "USDC():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  abKycModule(): Address {
    let result = super.call("abKycModule", "abKycModule():(address)", []);

    return result[0].toAddress();
  }

  try_abKycModule(): ethereum.CallResult<Address> {
    let result = super.tryCall("abKycModule", "abKycModule():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  claimedAmount(dropId: BigInt, tokenId: BigInt): BigInt {
    let result = super.call(
      "claimedAmount",
      "claimedAmount(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(dropId),
        ethereum.Value.fromUnsignedBigInt(tokenId),
      ],
    );

    return result[0].toBigInt();
  }

  try_claimedAmount(
    dropId: BigInt,
    tokenId: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "claimedAmount",
      "claimedAmount(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(dropId),
        ethereum.Value.fromUnsignedBigInt(tokenId),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  dropData(dropId: BigInt): ABClaim__dropDataResult {
    let result = super.call(
      "dropData",
      "dropData(uint256):(address,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(dropId)],
    );

    return new ABClaim__dropDataResult(
      result[0].toAddress(),
      result[1].toBoolean(),
      result[2].toBigInt(),
    );
  }

  try_dropData(dropId: BigInt): ethereum.CallResult<ABClaim__dropDataResult> {
    let result = super.tryCall(
      "dropData",
      "dropData(uint256):(address,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(dropId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ABClaim__dropDataResult(
        value[0].toAddress(),
        value[1].toBoolean(),
        value[2].toBigInt(),
      ),
    );
  }

  getClaimableAmount(_dropId: BigInt, _tokenIds: Array<BigInt>): BigInt {
    let result = super.call(
      "getClaimableAmount",
      "getClaimableAmount(uint256,uint256[]):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_dropId),
        ethereum.Value.fromUnsignedBigIntArray(_tokenIds),
      ],
    );

    return result[0].toBigInt();
  }

  try_getClaimableAmount(
    _dropId: BigInt,
    _tokenIds: Array<BigInt>,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getClaimableAmount",
      "getClaimableAmount(uint256,uint256[]):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_dropId),
        ethereum.Value.fromUnsignedBigIntArray(_tokenIds),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getClaimableAmount1(_dropId: BigInt, _tokenId: BigInt): BigInt {
    let result = super.call(
      "getClaimableAmount",
      "getClaimableAmount(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_dropId),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
      ],
    );

    return result[0].toBigInt();
  }

  try_getClaimableAmount1(
    _dropId: BigInt,
    _tokenId: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getClaimableAmount",
      "getClaimableAmount(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_dropId),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role),
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  ownerOf(dropId: BigInt, tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256,uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(dropId),
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(dropId: BigInt, tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ownerOf",
      "ownerOf(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(dropId),
        ethereum.Value.fromUnsignedBigInt(tokenId),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalDepositedPerDrop(dropId: BigInt): BigInt {
    let result = super.call(
      "totalDepositedPerDrop",
      "totalDepositedPerDrop(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(dropId)],
    );

    return result[0].toBigInt();
  }

  try_totalDepositedPerDrop(dropId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalDepositedPerDrop",
      "totalDepositedPerDrop(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(dropId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BatchUpdateL1HoldingsCall extends ethereum.Call {
  get inputs(): BatchUpdateL1HoldingsCall__Inputs {
    return new BatchUpdateL1HoldingsCall__Inputs(this);
  }

  get outputs(): BatchUpdateL1HoldingsCall__Outputs {
    return new BatchUpdateL1HoldingsCall__Outputs(this);
  }
}

export class BatchUpdateL1HoldingsCall__Inputs {
  _call: BatchUpdateL1HoldingsCall;

  constructor(call: BatchUpdateL1HoldingsCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _owners(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }
}

export class BatchUpdateL1HoldingsCall__Outputs {
  _call: BatchUpdateL1HoldingsCall;

  constructor(call: BatchUpdateL1HoldingsCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _signature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimOnBehalfCall extends ethereum.Call {
  get inputs(): ClaimOnBehalfCall__Inputs {
    return new ClaimOnBehalfCall__Inputs(this);
  }

  get outputs(): ClaimOnBehalfCall__Outputs {
    return new ClaimOnBehalfCall__Outputs(this);
  }
}

export class ClaimOnBehalfCall__Inputs {
  _call: ClaimOnBehalfCall;

  constructor(call: ClaimOnBehalfCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _user(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _signature(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class ClaimOnBehalfCall__Outputs {
  _call: ClaimOnBehalfCall;

  constructor(call: ClaimOnBehalfCall) {
    this._call = call;
  }
}

export class DepositRoyaltyCall extends ethereum.Call {
  get inputs(): DepositRoyaltyCall__Inputs {
    return new DepositRoyaltyCall__Inputs(this);
  }

  get outputs(): DepositRoyaltyCall__Outputs {
    return new DepositRoyaltyCall__Outputs(this);
  }
}

export class DepositRoyaltyCall__Inputs {
  _call: DepositRoyaltyCall;

  constructor(call: DepositRoyaltyCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositRoyaltyCall__Outputs {
  _call: DepositRoyaltyCall;

  constructor(call: DepositRoyaltyCall) {
    this._call = call;
  }
}

export class DepositRoyalty1Call extends ethereum.Call {
  get inputs(): DepositRoyalty1Call__Inputs {
    return new DepositRoyalty1Call__Inputs(this);
  }

  get outputs(): DepositRoyalty1Call__Outputs {
    return new DepositRoyalty1Call__Outputs(this);
  }
}

export class DepositRoyalty1Call__Inputs {
  _call: DepositRoyalty1Call;

  constructor(call: DepositRoyalty1Call) {
    this._call = call;
  }

  get _dropIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class DepositRoyalty1Call__Outputs {
  _call: DepositRoyalty1Call;

  constructor(call: DepositRoyalty1Call) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
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

  get _usdc(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _abKycModule(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _relayer(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SetDropDataCall extends ethereum.Call {
  get inputs(): SetDropDataCall__Inputs {
    return new SetDropDataCall__Inputs(this);
  }

  get outputs(): SetDropDataCall__Outputs {
    return new SetDropDataCall__Outputs(this);
  }
}

export class SetDropDataCall__Inputs {
  _call: SetDropDataCall;

  constructor(call: SetDropDataCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _nft(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _isL1(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get _supply(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SetDropDataCall__Outputs {
  _call: SetDropDataCall;

  constructor(call: SetDropDataCall) {
    this._call = call;
  }
}

export class SetDropData1Call extends ethereum.Call {
  get inputs(): SetDropData1Call__Inputs {
    return new SetDropData1Call__Inputs(this);
  }

  get outputs(): SetDropData1Call__Outputs {
    return new SetDropData1Call__Outputs(this);
  }
}

export class SetDropData1Call__Inputs {
  _call: SetDropData1Call;

  constructor(call: SetDropData1Call) {
    this._call = call;
  }

  get _dropIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _nfts(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _isL1(): Array<boolean> {
    return this._call.inputValues[2].value.toBooleanArray();
  }

  get _supplies(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }
}

export class SetDropData1Call__Outputs {
  _call: SetDropData1Call;

  constructor(call: SetDropData1Call) {
    this._call = call;
  }
}

export class UpdateL1HoldingsCall extends ethereum.Call {
  get inputs(): UpdateL1HoldingsCall__Inputs {
    return new UpdateL1HoldingsCall__Inputs(this);
  }

  get outputs(): UpdateL1HoldingsCall__Outputs {
    return new UpdateL1HoldingsCall__Outputs(this);
  }
}

export class UpdateL1HoldingsCall__Inputs {
  _call: UpdateL1HoldingsCall;

  constructor(call: UpdateL1HoldingsCall) {
    this._call = call;
  }

  get _dropId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _newOwner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class UpdateL1HoldingsCall__Outputs {
  _call: UpdateL1HoldingsCall;

  constructor(call: UpdateL1HoldingsCall) {
    this._call = call;
  }
}
