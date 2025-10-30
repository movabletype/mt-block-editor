import React, { memo } from "react";

import { StylesheetType } from "../Editor";
import type Editor from "../Editor";

interface StylesheetsProps {
  editor: Editor;
}

const Stylesheets: React.FC<StylesheetsProps> = memo(function Stylesheets({
  editor,
}: StylesheetsProps) {
  return (
    <>
      {editor.stylesheets.map((s, i) => {
        if (s.type === StylesheetType.css) {
          return (
            <style type="text/css" key={i}>
              {s.data}
            </style>
          );
        } else {
          return <link rel="stylesheet" key={i} href={s.data} />;
        }
      })}
    </>
  );
});

export default Stylesheets;
