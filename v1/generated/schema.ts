// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  BigInt,
  Bytes,
  Entity,
  store,
  Value,
  ValueKind} from "@graphprotocol/graph-ts";

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

  get dropId(): BigInt {
    let value = this.get("dropId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set dropId(value: BigInt) {
    this.set("dropId", Value.fromBigInt(value));
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

  get supply(): BigInt {
    let value = this.get("supply");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set supply(value: BigInt) {
    this.set("supply", Value.fromBigInt(value));
  }

  get royaltySharePerToken(): BigInt {
    let value = this.get("royaltySharePerToken");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set royaltySharePerToken(value: BigInt) {
    this.set("royaltySharePerToken", Value.fromBigInt(value));
  }

  get rightHolderFee(): BigInt {
    let value = this.get("rightHolderFee");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set rightHolderFee(value: BigInt) {
    this.set("rightHolderFee", Value.fromBigInt(value));
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

  get nft(): string {
    let value = this.get("nft");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set nft(value: string) {
    this.set("nft", Value.fromString(value));
  }

  get sold(): BigInt {
    let value = this.get("sold");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set sold(value: BigInt) {
    this.set("sold", Value.fromBigInt(value));
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

  get holdings(): Array<string> {
    let value = this.get("holdings");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
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

  get merkle(): string {
    let value = this.get("merkle");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set merkle(value: string) {
    this.set("merkle", Value.fromString(value));
  }
}

export class Payout extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Payout entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Payout must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Payout", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Payout | null {
    return changetype<Payout | null>(store.get_in_block("Payout", id));
  }

  static load(id: string): Payout | null {
    return changetype<Payout | null>(store.get("Payout", id));
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

  get underlying(): string {
    let value = this.get("underlying");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set underlying(value: string) {
    this.set("underlying", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get dropId(): BigInt {
    let value = this.get("dropId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set dropId(value: BigInt) {
    this.set("dropId", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
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
}

export class Claim extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Claim entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Claim must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Claim", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Claim | null {
    return changetype<Claim | null>(store.get_in_block("Claim", id));
  }

  static load(id: string): Claim | null {
    return changetype<Claim | null>(store.get("Claim", id));
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

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get dropId(): BigInt {
    let value = this.get("dropId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set dropId(value: BigInt) {
    this.set("dropId", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
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
}

export class AnotherPFP extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AnotherPFP entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AnotherPFP must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AnotherPFP", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AnotherPFP | null {
    return changetype<AnotherPFP | null>(store.get_in_block("AnotherPFP", id));
  }

  static load(id: string): AnotherPFP | null {
    return changetype<AnotherPFP | null>(store.get("AnotherPFP", id));
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
