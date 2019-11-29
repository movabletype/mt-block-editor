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

import TextBlock from "./Block/TextBlock";
//import Image from "./Block/Image";
//import File from "./Block/File";
import Table from "./Block/Table";
import Horizontalrule from "./Block/Horizontalrule";
import Html from "./Block/Html";
import Columns from "./Block/Columns";
import Column from "./Block/Column";

BlockFactory.registerType(TextBlock);
//BlockFactory.registerType(Image);
//BlockFactory.registerType(File);
BlockFactory.registerType(Table);
BlockFactory.registerType(Horizontalrule);
BlockFactory.registerType(Html);
BlockFactory.registerType(Columns);
BlockFactory.registerType(Column);

export default BlockFactory;
