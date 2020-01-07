import Block from "./Block";

class BlockFactory {
  public static allTypes: Array<typeof Block> = [];
  public static registerType(t: typeof Block): void {
    this.allTypes.push(t);
  }

  public types(): Array<typeof Block> {
    return BlockFactory.allTypes;
  }

  public selectableTypes(): Array<typeof Block> {
    return BlockFactory.allTypes.filter(t => t.selectable);
  }
}

export default BlockFactory;
