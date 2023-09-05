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

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
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

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ERC1155AB__getPhaseInfoResult_phaseStruct extends ethereum.Tuple {
  get phaseStart(): BigInt {
    return this[0].toBigInt();
  }

  get phaseEnd(): BigInt {
    return this[1].toBigInt();
  }

  get price(): BigInt {
    return this[2].toBigInt();
  }

  get maxMint(): BigInt {
    return this[3].toBigInt();
  }

  get isPublic(): boolean {
    return this[4].toBoolean();
  }
}

export class ERC1155AB__tokensDetailsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: string;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: string
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
    map.set("value5", ethereum.Value.fromString(this.value5));
    return map;
  }

  getDropId(): BigInt {
    return this.value0;
  }

  getMintedSupply(): BigInt {
    return this.value1;
  }

  getMaxSupply(): BigInt {
    return this.value2;
  }

  getNumOfPhase(): BigInt {
    return this.value3;
  }

  getSharePerToken(): BigInt {
    return this.value4;
  }

  getUri(): string {
    return this.value5;
  }
}

export class ERC1155AB extends ethereum.SmartContract {
  static bind(address: Address): ERC1155AB {
    return new ERC1155AB("ERC1155AB", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  IMPLEMENTATION_VERSION(): i32 {
    let result = super.call(
      "IMPLEMENTATION_VERSION",
      "IMPLEMENTATION_VERSION():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_IMPLEMENTATION_VERSION(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "IMPLEMENTATION_VERSION",
      "IMPLEMENTATION_VERSION():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
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

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getPhaseInfo(
    _tokenId: BigInt,
    _phaseId: BigInt
  ): ERC1155AB__getPhaseInfoResult_phaseStruct {
    let result = super.call(
      "getPhaseInfo",
      "getPhaseInfo(uint256,uint256):((uint256,uint256,uint256,uint256,bool))",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_phaseId)
      ]
    );

    return changetype<ERC1155AB__getPhaseInfoResult_phaseStruct>(
      result[0].toTuple()
    );
  }

  try_getPhaseInfo(
    _tokenId: BigInt,
    _phaseId: BigInt
  ): ethereum.CallResult<ERC1155AB__getPhaseInfoResult_phaseStruct> {
    let result = super.tryCall(
      "getPhaseInfo",
      "getPhaseInfo(uint256,uint256):((uint256,uint256,uint256,uint256,bool))",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_phaseId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ERC1155AB__getPhaseInfoResult_phaseStruct>(value[0].toTuple())
    );
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
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
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mintedPerPhase(user: Address, tokenId: BigInt, phaseId: BigInt): BigInt {
    let result = super.call(
      "mintedPerPhase",
      "mintedPerPhase(address,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(phaseId)
      ]
    );

    return result[0].toBigInt();
  }

  try_mintedPerPhase(
    user: Address,
    tokenId: BigInt,
    phaseId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintedPerPhase",
      "mintedPerPhase(address,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(phaseId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nextTokenId(): BigInt {
    let result = super.call("nextTokenId", "nextTokenId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nextTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nextTokenId", "nextTokenId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  tokensDetails(tokenId: BigInt): ERC1155AB__tokensDetailsResult {
    let result = super.call(
      "tokensDetails",
      "tokensDetails(uint256):(uint256,uint256,uint256,uint256,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return new ERC1155AB__tokensDetailsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toString()
    );
  }

  try_tokensDetails(
    tokenId: BigInt
  ): ethereum.CallResult<ERC1155AB__tokensDetailsResult> {
    let result = super.tryCall(
      "tokensDetails",
      "tokensDetails(uint256):(uint256,uint256,uint256,uint256,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ERC1155AB__tokensDetailsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toString()
      )
    );
  }

  uri(_tokenId: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toString();
  }

  try_uri(_tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

export class InitDropCall extends ethereum.Call {
  get inputs(): InitDropCall__Inputs {
    return new InitDropCall__Inputs(this);
  }

  get outputs(): InitDropCall__Outputs {
    return new InitDropCall__Outputs(this);
  }
}

export class InitDropCall__Inputs {
  _call: InitDropCall;

  constructor(call: InitDropCall) {
    this._call = call;
  }

  get _initDropParams(): Array<InitDropCall_initDropParamsStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      InitDropCall_initDropParamsStruct
    >();
  }
}

export class InitDropCall__Outputs {
  _call: InitDropCall;

  constructor(call: InitDropCall) {
    this._call = call;
  }
}

export class InitDropCall_initDropParamsStruct extends ethereum.Tuple {
  get maxSupply(): BigInt {
    return this[0].toBigInt();
  }

  get sharePerToken(): BigInt {
    return this[1].toBigInt();
  }

  get mintGenesis(): BigInt {
    return this[2].toBigInt();
  }

  get genesisRecipient(): Address {
    return this[3].toAddress();
  }

  get royaltyCurrency(): Address {
    return this[4].toAddress();
  }

  get uri(): string {
    return this[5].toString();
  }
}

export class InitDrop1Call extends ethereum.Call {
  get inputs(): InitDrop1Call__Inputs {
    return new InitDrop1Call__Inputs(this);
  }

  get outputs(): InitDrop1Call__Outputs {
    return new InitDrop1Call__Outputs(this);
  }
}

export class InitDrop1Call__Inputs {
  _call: InitDrop1Call;

  constructor(call: InitDrop1Call) {
    this._call = call;
  }

  get _initDropParams(): InitDrop1Call_initDropParamsStruct {
    return changetype<InitDrop1Call_initDropParamsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class InitDrop1Call__Outputs {
  _call: InitDrop1Call;

  constructor(call: InitDrop1Call) {
    this._call = call;
  }
}

export class InitDrop1Call_initDropParamsStruct extends ethereum.Tuple {
  get maxSupply(): BigInt {
    return this[0].toBigInt();
  }

  get sharePerToken(): BigInt {
    return this[1].toBigInt();
  }

  get mintGenesis(): BigInt {
    return this[2].toBigInt();
  }

  get genesisRecipient(): Address {
    return this[3].toAddress();
  }

  get royaltyCurrency(): Address {
    return this[4].toAddress();
  }

  get uri(): string {
    return this[5].toString();
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
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _mintParams(): MintCall_mintParamsStruct {
    return changetype<MintCall_mintParamsStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MintCall_mintParamsStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get phaseId(): BigInt {
    return this[1].toBigInt();
  }

  get quantity(): BigInt {
    return this[2].toBigInt();
  }

  get signature(): Bytes {
    return this[3].toBytes();
  }
}

export class MintBatchCall extends ethereum.Call {
  get inputs(): MintBatchCall__Inputs {
    return new MintBatchCall__Inputs(this);
  }

  get outputs(): MintBatchCall__Outputs {
    return new MintBatchCall__Outputs(this);
  }
}

export class MintBatchCall__Inputs {
  _call: MintBatchCall;

  constructor(call: MintBatchCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _mintParams(): Array<MintBatchCall_mintParamsStruct> {
    return this._call.inputValues[1].value.toTupleArray<
      MintBatchCall_mintParamsStruct
    >();
  }
}

export class MintBatchCall__Outputs {
  _call: MintBatchCall;

  constructor(call: MintBatchCall) {
    this._call = call;
  }
}

export class MintBatchCall_mintParamsStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get phaseId(): BigInt {
    return this[1].toBigInt();
  }

  get quantity(): BigInt {
    return this[2].toBigInt();
  }

  get signature(): Bytes {
    return this[3].toBytes();
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

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
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

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
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

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _phases(): Array<SetDropPhasesCall_phasesStruct> {
    return this._call.inputValues[1].value.toTupleArray<
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

  get price(): BigInt {
    return this[2].toBigInt();
  }

  get maxMint(): BigInt {
    return this[3].toBigInt();
  }

  get isPublic(): boolean {
    return this[4].toBoolean();
  }
}

export class SetMaxSupplyCall extends ethereum.Call {
  get inputs(): SetMaxSupplyCall__Inputs {
    return new SetMaxSupplyCall__Inputs(this);
  }

  get outputs(): SetMaxSupplyCall__Outputs {
    return new SetMaxSupplyCall__Outputs(this);
  }
}

export class SetMaxSupplyCall__Inputs {
  _call: SetMaxSupplyCall;

  constructor(call: SetMaxSupplyCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _maxSupply(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetMaxSupplyCall__Outputs {
  _call: SetMaxSupplyCall;

  constructor(call: SetMaxSupplyCall) {
    this._call = call;
  }
}

export class SetTokenURICall extends ethereum.Call {
  get inputs(): SetTokenURICall__Inputs {
    return new SetTokenURICall__Inputs(this);
  }

  get outputs(): SetTokenURICall__Outputs {
    return new SetTokenURICall__Outputs(this);
  }
}

export class SetTokenURICall__Inputs {
  _call: SetTokenURICall;

  constructor(call: SetTokenURICall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _uri(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetTokenURICall__Outputs {
  _call: SetTokenURICall;

  constructor(call: SetTokenURICall) {
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