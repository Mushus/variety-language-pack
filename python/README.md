# Python

* `python`
  * Python
  * ぱいそん
  * https://www.python.org/

## 環境構築

手元の環境 ( Windows Subsystem for Linux ) の Ubuntu では既に入れていた( Python 3.5 )。
多分標準。

最新版を使いたいので `pyenv` を入れた。

* `pyenv`
  * Simple Python Version Management
  * `python` のバージョン管理ツール
  * https://github.com/pyenv/pyenv
  * 簡単にインストールできるように[インストーラーがある](https://github.com/pyenv/pyenv-installer)
  * `venv` のラッパーらしい

インストール方法はインストーラーそのまま使った。

`pyenv install 3.7.0` したときにいろいろ足りないとエラーが出たので先に追加しておいた。
もしかしたらビルドツール入れたら全部ついてくるのかもしれない。
余計なものを入れたかもしれないが一応これで全部エラーが消えた。
```bash
# zipimport.ZipImportError: can't decompress data; zlib not available
sudo apt-get install zlib1g-dev
# ModuleNotFoundError: No module named '_ctypes'
sudo apt-get install libffi-dev
# WARNING: The Python bz2 extension was not compiled. Missing the bzip2 lib?
sudo apt-get install libbz2-dev
# WARNING: The Python readline extension was not compiled. Missing the GNU readline lib?
sudo apt-get install libreadline6 libreadline6-dev
# ERROR: The Python ssl extension was not compiled. Missing the OpenSSL lib?
sudo apt-get install libssl-dev openssl
# WARNING: The Python sqlite3 extension was not compiled. Missing the SQLite3 lib?
sudo apt-get install libsqlite3-dev
```

最新の python を入れる。現行は `3.7.0` が最新だった。
```bash
pyenv install --list
pyenv install 3.7.0
```

開発環境の `python` のバージョンを設定する
```bash
pyenv local 3.7.0
python -V
pip -V
```

自動で入るみたいだけど今回は使わなさそう。ライブラリは使う予定ないので。

* `pip`
  * PyPI
  * pythonのパッケージマネージャー
  * https://pypi.org/

## 依存解決


## 実行

```bash
python helloworld.py
```

## テスト

標準ライブラリがサポートしてる。
```bash
```
