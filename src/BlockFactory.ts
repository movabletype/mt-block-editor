import Block from "./Block";

class BlockFactory {
  public static allTypes: Array<typeof Block> = [];

  public static registerType(t: typeof Block): void {
    this.allTypes.push(t);
  }

  public static deregisterType(t: typeof Block | string): void {
    this.allTypes = this.allTypes.filter((registered) =>
      typeof t === "string" ? registered.typeId === t : registered !== t
    );
  }

  public types(): Array<typeof Block> {
    return BlockFactory.allTypes;
  }

  public selectableTypes(): Array<typeof Block> {
    return BlockFactory.allTypes.filter((t) => t.selectable);
  }

  public lookupType(typeId: string): typeof Block {
    const t = BlockFactory.allTypes.find((t) => t.typeId === typeId);

    if (!t) {
      throw `Unknown typeId: ${typeId}`;
    }

    return t;
  }
}

export default BlockFactory;
