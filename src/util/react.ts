import React from "react";

export const nl2br = (() => {
  const regex = /(\r\n|\r|\n)/g;

  return function nl2br(str: string): Array<string | JSX.Element> {
    if (typeof str !== "string") {
      return str;
    }

    return str.split(regex).map((line, index) => {
      if (line.match(regex)) {
        return React.createElement("br", { key: index });
      }
      return line;
    });
  };
})();
