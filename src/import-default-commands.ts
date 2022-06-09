import CommandManager from "./CommandManager";

import copyBlock from "./commands/copyBlock";
import pasteBlock from "./commands/pasteBlock";
import duplicateBlock from "./commands/duplicateBlock";
import deleteBlock from "./commands/deleteBlock";

CommandManager.registerCommand(copyBlock);
CommandManager.registerCommand(pasteBlock);
CommandManager.registerCommand(duplicateBlock);
CommandManager.registerCommand(deleteBlock);
