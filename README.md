## これは何か

* MovableType.net向けに開発しているブロックエディタ
* まだ「とりあえずそれっぽく動く」程度
    * ライセンス的に問題のある svg ファイルが含まれています

## とりあえず動かしてみる場合

```shell
$ npm install
$ npm run start
```

## 特徴

* WYSIWYG的に気持ちよく編集が可能でありながら、ブロック的な構造も意識して編集することができる
* 出力されるHTMLに無駄がなく、再利用もしやすい
* JSによるブロックタイプの追加に対応している

## sub-projects以下について

以下のディレクトリは、ブロックタイプの追加のためのユーティリティ、およびブロックタイプの参照実装が含まれている。

これらは将来的には、オープンソースライセンスとして公開され、npmでインストールできるようになる。（おそらく）

### mt-block-editor-block

ブロックタイプを作成するためのユーティリティ。ブロックタイプを作成する場合に、以下のように定義をインポートしたりするために利用する。
```javascript
import Block from "mt-block-editor-block/Block";
```

### generator-mt-block-editor-block

ブロックタイプの雛形を作成する。以下のような感じで実行できる。
```
npx -p yo -p ./generator-mt-block-editor-block -- yo mt-block-editor-block
```

### mt-block-editor-block-oembed

参照実装その１。

oEmbed を埋め込むためのブロックタイプ。

### mt-block-editor-block-form-element

参照実装その2。

* INPUT
* TEXTAREA
* SELECT

といったシンプルなフォーム要素を埋め込むためのブロックタイプ。
