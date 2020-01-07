import BlockFactory from "./BlockFactory";

import Text from "./Block/Text";
import Image from "./Block/Image";
import File from "./Block/File";
import Table from "./Block/Table";
import Horizontalrule from "./Block/Horizontalrule";
import Html from "./Block/Html";
import Columns from "./Block/Columns";
import Column from "./Block/Column";

BlockFactory.registerType(Text);
BlockFactory.registerType(Image);
BlockFactory.registerType(File);
BlockFactory.registerType(Table);
BlockFactory.registerType(Horizontalrule);
BlockFactory.registerType(Html);
BlockFactory.registerType(Columns);
BlockFactory.registerType(Column);
