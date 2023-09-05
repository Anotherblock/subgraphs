// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Collection extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Collection entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Collection must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Collection", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Collection | null {
    return changetype<Collection | null>(store.get_in_block("Collection", id));
  }

  static load(id: string): Collection | null {
    return changetype<Collection | null>(store.get("Collection", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get publisher(): string {
    let value = this.get("publisher");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set publisher(value: string) {
    this.set("publisher", Value.fromString(value));
  }

  get createdBlockNumber(): BigInt {
    let value = this.get("createdBlockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createdBlockNumber(value: BigInt) {
    this.set("createdBlockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get createdTransactionHash(): Bytes {
    let value = this.get("createdTransactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set createdTransactionHash(value: Bytes) {
    this.set("createdTransactionHash", Value.fromBytes(value));
  }
}

export class Publisher extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Publisher entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Publisher must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Publisher", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Publisher | null {
    return changetype<Publisher | null>(store.get_in_block("Publisher", id));
  }

  static load(id: string): Publisher | null {
    return changetype<Publisher | null>(store.get("Publisher", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get royalty(): string {
    let value = this.get("royalty");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set royalty(value: string) {
    this.set("royalty", Value.fromString(value));
  }

  get publisherFee(): BigInt {
    let value = this.get("publisherFee");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set publisherFee(value: BigInt) {
    this.set("publisherFee", Value.fromBigInt(value));
  }

  get registeredBlockNumber(): BigInt {
    let value = this.get("registeredBlockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set registeredBlockNumber(value: BigInt) {
    this.set("registeredBlockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get registeredTransactionHash(): Bytes {
    let value = this.get("registeredTransactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set registeredTransactionHash(value: Bytes) {
    this.set("registeredTransactionHash", Value.fromBytes(value));
  }
}

export class Drop extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Drop entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Drop must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Drop", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Drop | null {
    return changetype<Drop | null>(store.get_in_block("Drop", id));
  }

  static load(id: string): Drop | null {
    return changetype<Drop | null>(store.get("Drop", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get collection(): string {
    let value = this.get("collection");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get maxSupply(): BigInt {
    let value = this.get("maxSupply");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set maxSupply(value: BigInt) {
    this.set("maxSupply", Value.fromBigInt(value));
  }

  get currentSupply(): BigInt {
    let value = this.get("currentSupply");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set currentSupply(value: BigInt) {
    this.set("currentSupply", Value.fromBigInt(value));
  }

  get sharePerToken(): BigInt {
    let value = this.get("sharePerToken");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sharePerToken(value: BigInt) {
    this.set("sharePerToken", Value.fromBigInt(value));
  }

  get royaltyCurrency(): string {
    let value = this.get("royaltyCurrency");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set royaltyCurrency(value: string) {
    this.set("royaltyCurrency", Value.fromString(value));
  }

  get createdBlockNumber(): BigInt {
    let value = this.get("createdBlockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createdBlockNumber(value: BigInt) {
    this.set("createdBlockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get createdTransactionHash(): Bytes {
    let value = this.get("createdTransactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set createdTransactionHash(value: Bytes) {
    this.set("createdTransactionHash", Value.fromBytes(value));
  }
}

export class DropPhase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DropPhase entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DropPhase must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DropPhase", id.toString(), this);
    }
  }

  static loadInBlock(id: string): DropPhase | null {
    return changetype<DropPhase | null>(store.get_in_block("DropPhase", id));
  }

  static load(id: string): DropPhase | null {
    return changetype<DropPhase | null>(store.get("DropPhase", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get drop(): string {
    let value = this.get("drop");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set drop(value: string) {
    this.set("drop", Value.fromString(value));
  }

  get phases(): Array<string> {
    let value = this.get("phases");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set phases(value: Array<string>) {
    this.set("phases", Value.fromStringArray(value));
  }
}

export class Phase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Phase entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Phase must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Phase", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Phase | null {
    return changetype<Phase | null>(store.get_in_block("Phase", id));
  }

  static load(id: string): Phase | null {
    return changetype<Phase | null>(store.get("Phase", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get phaseStart(): BigInt {
    let value = this.get("phaseStart");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set phaseStart(value: BigInt) {
    this.set("phaseStart", Value.fromBigInt(value));
  }

  get phaseEnd(): BigInt {
    let value = this.get("phaseEnd");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set phaseEnd(value: BigInt) {
    this.set("phaseEnd", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get maxMint(): BigInt {
    let value = this.get("maxMint");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set maxMint(value: BigInt) {
    this.set("maxMint", Value.fromBigInt(value));
  }

  get isPublic(): boolean {
    let value = this.get("isPublic");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isPublic(value: boolean) {
    this.set("isPublic", Value.fromBoolean(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static loadInBlock(id: string): User | null {
    return changetype<User | null>(store.get_in_block("User", id));
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalHoldings(): BigInt {
    let value = this.get("totalHoldings");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalHoldings(value: BigInt) {
    this.set("totalHoldings", Value.fromBigInt(value));
  }

  get holdings(): UserHoldingsLoader {
    return new UserHoldingsLoader(
      "User",
      this.get("id")!.toString(),
      "holdings"
    );
  }
}

export class UserHoldings extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserHoldings entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserHoldings must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserHoldings", id.toString(), this);
    }
  }

  static loadInBlock(id: string): UserHoldings | null {
    return changetype<UserHoldings | null>(
      store.get_in_block("UserHoldings", id)
    );
  }

  static load(id: string): UserHoldings | null {
    return changetype<UserHoldings | null>(store.get("UserHoldings", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get dropId(): string {
    let value = this.get("dropId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set dropId(value: string) {
    this.set("dropId", Value.fromString(value));
  }

  get totalQuantity(): BigInt {
    let value = this.get("totalQuantity");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalQuantity(value: BigInt) {
    this.set("totalQuantity", Value.fromBigInt(value));
  }

  get tokenIds(): Array<string> {
    let value = this.get("tokenIds");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set tokenIds(value: Array<string>) {
    this.set("tokenIds", Value.fromStringArray(value));
  }
}

export class TokenId extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenId entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenId must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenId", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TokenId | null {
    return changetype<TokenId | null>(store.get_in_block("TokenId", id));
  }

  static load(id: string): TokenId | null {
    return changetype<TokenId | null>(store.get("TokenId", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dropId(): string {
    let value = this.get("dropId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set dropId(value: string) {
    this.set("dropId", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class UserHoldingsLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): UserHoldings[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<UserHoldings[]>(value);
  }
}
