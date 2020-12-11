# mt-block-editor-block

This package helps you define custom block types.

## Modules

* Block
* Component
* Context
* React
* decorator
* i18n
* icon
* util

## Example

* https://github.com/movabletype/mt-block-editor-block-form-element
* https://github.com/movabletype/mt-block-editor-block-oembed

## Usage

```typescript
import React from "mt-block-editor-block/React";
import { blockProperty } from "mt-block-editor-block/decorator";
import {
  BlockSetupCommon,
  BlockSetup,
  BlockLabel,
} from "mt-block-editor-block/Component";
import Block, {
  Metadata,
  NewFromHtmlOptions,
  EditorOptions,
} from "mt-block-editor-block/Block";

interface EditorProps {
  block: Input;
}

interface HtmlProps {
  block: Input;
}

const Editor: React.FC<EditorProps> = blockProperty(
  ({ block }: EditorProps) => (
    <div>
      <BlockSetupCommon block={block} />
      <BlockSetup block={block}>
        <label className="mt-be-label-name">
          <div>{t("Block Element")}</div>
          <select name="blockElement">
            <option value="">{t("None")}</option>
            <option value="p">P</option>
            <option value="h1">H1</option>
            <option value="h2">H2</option>
            <option value="h3">H3</option>
            <option value="h4">H4</option>
            <option value="h5">H5</option>
            <option value="h6">H6</option>
            <option value="pre">PRE</option>
          </select>
        </label>
      </BlockSetup>
      <BlockLabel block={block}>
        <input
          type="text"
          name="text"
          className="mt-be-input mt-be-input--full-width"
          data-mt-block-editor-focus-default
        />
      </BlockLabel>
    </div>
  )
);
```

## License

The MIT License (MIT)

Copyright (c) 2020 Six Apart Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
