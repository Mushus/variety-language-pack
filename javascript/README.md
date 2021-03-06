# JavaScript

* `node`
  * Node.js
  * JavaScript の実行環境　
  * https://nodejs.org/ja/

* インデント
  * 2 space
* スタイルガイド
  * たくさんある
    * [JavaScript Standard Style](https://standardjs.com/)
    * [Airbnb JavaScript Style Guide() {](https://github.com/airbnb/javascript)
    * [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
  * Prettier と ESLint 使うのが標準的か
    * [Prettier](https://prettier.io/)
    * [ESLint](https://eslint.org/)
* `index.js`
  * モジュールとしてロードするときにindexの部分を省略できる
  * ディレクトリの中のモジュールのコード郡をまとめるときに有効

## 環境構築

手元の環境 ( Windows Subsystem for Linux ) では既に入れていたが、 `nvm` を入れてからが良さそう

* `nvm`
  * Node Version Manager
  * `node` のバージョン管理ツール
  * https://github.com/creationix/nvm

`node` 最新版を入れる
```bash
nvm install node
node -v
```

標準のパッケージマネージャーの `npm` のアップデート
```bash
npm i npm
npm -v
```

* `npm`
  * npm
  * Node.js 標準のパッケージマネージャー
  * https://www.npmjs.com/

`yarn` が使いたいので `npm` 経由で入れる
```bash
npm i -g yarn
```

* `yarn`
  * Yarn
  * facebook 製のパッケージマネージャー。キャッシュが効いて依存解決がはやい。
  * https://yarnpkg.com/lang/ja/

## 依存解決

パッケージ配下に移動して `yarn` で行う
```bash
yarn install
```

## 実行

`yarn` の npm スクリプト経由で実行すると余計な文字列が表示されるので
直接実行するコマンドも示す。
```bash
yarn run
# or
node index.js
```

## テスト

* `jest`
  * Jest
  * facebook 製のテストツール。簡単。
  * http://jestjs.io/

`jest` は `devDependency` としてパッケージと同様に管理している
npm スクリプトに組み込んでいる
```bash
yarn test
```
