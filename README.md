#　九州工業大学 オープンキャンパス 2023 年 C3 企画

## 環境構築

1.  ### ローカル環境の構築

    -   pnpm の使用

        本プロダクトでは `pnpm` という `npm` より高速に動くパッケージマネージャを使用しています。
        以下コマンドを実行して`pnpm`をインストールしてください。

        `curl -fsSL https://get.pnpm.io/install.sh | sh -`

    -   volta の使用

        本プロダクトでは`volta`という node のバージョンマネージャを使用しています。
        以下コマンドを実行して`volta`をインストールしてください。

        `curl https://get.volta.sh | bash`

2.  ### リポジトリのクローン

    以下コマンドを実行してローカルにリポジトリをクローンしてください

    `git clone git@github.com:Kyutech-C3/OC_2023_frontend.git`

3.  ### ライブラリインストール

    以下コマンドを実行してライブラリをインストールしてください

    `pnpm install`

## 開発の手引き

-   storybook の使用

    本プロダクトでは`storybook`というライブラリを使用し、コンポーネント単位でのブラウザ出力を可能としている。
    以下コマンドを実行すると storybook が起動する

    `pnpm storybook`

    `http://localhost:6006`にアクセスすることでコンポーネントをレンダリングすることができる

-   コンポーネント作成

    本プロダクトでは`hygen`というライブラリを使用し、ファイル生成を容易にしている。

    コンポーネントを作成する際は以下コマンドを実行しファイルを生成する。

    `pnpm new`

    実行すると対話形式でファイル生成が開始される

    ```
    ✔ What is the component name? ·
    ✔ Where is the directory? (No problem in blank) ·
    ✔ Is it have props? (y/N) · false
    ```

    1. コンポーネントの名前を記入する(Header など)
    2. 次に ディレクトリ指定をする 入力なしの場合は`src/components/`配下に生成される。
       特定の場合においてはディレクトリ名を指定する必要がある。
       例えば`Common`という様々なとこに使用されるコンポーネントをまとめるディレクトリが作成されているときは`Common`と入力すれば`src/components/Common`以下にファイルが生成される。
    3. `props`をもつかを記入　入力なしで false(props を持たない)
       必要に応じて使用

-   ブランチ

    -   ブランチのルート

        ブランチは`develop`ブランチから生やす

    -   ブランチの命名規則

        ブランチは基本以下のように命名する
        `[feature | fix]/[issue番号]-[issue内容]`
        例えば issue 番号が`#14`で issue の内容が`headerの作成`だった場合以下のようになる

        `feature/#14-header`
        また不具合修正の場合`feature`の部分が`fix`となる

-   コミットメッセージ
    コミットメッセージは以下のように記述する

    `[add | change | fix | delete]:[メッセージ] [issue番号]`

    例えば issue 番号が`#14`で issue の内容が`headerの作成`だった場合以下のようになる

    `add:ヘッダーの追加 #14`

    機能追加の場合は`add`,機能変更の場合は`change`,不具合修正の場合は`fix`,機能削除の場合は`delete`となる。

    またメッセージの部分はわかりやすく簡潔にする。

**以上のことに対しわからないことや対応できないエラーの発生の際は`土佐犬`に連絡をください**
