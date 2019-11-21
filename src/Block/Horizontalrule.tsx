import React from "react";
import Block from "../Block";

const Editor: React.FC = () => {
  return <hr />;
};

class Horizontalrule extends Block {
  public static typeId = "horizontalrule";
  public static label = "Horizontalrule";
  public static selectable = true;

  public editor(): JSX.Element {
    return <Editor key={this.id} />;
  }

  public html(): JSX.Element {
    return <hr />;
  }

  public static newFromHtml(): Block {
    return new Horizontalrule();
  }
}

export default Horizontalrule;
