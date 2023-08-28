module.exports = {
    //コードベースないでtypescript-eslintのルールを使うことができる
    plugins: ['@typescript-eslint', 'prettier'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'react-app', 'react-app/jest', 'prettier'],

    //ソースファイルを解析するためにインストールした@typescript-eslint/parseパッケージを使う。ないと、JavaScriptのようにTypeScriptの解析を行う
    parser: '@typescript-eslint/parser',
    //parserの設定値
    parserOptions: {
        ecmaVersion: 'latest'
    },
    root: true,
    env: {
        browser: true,
    },
    //ルールにprettierを適用することで、prettierコーディング規約違反をエラーにする
    //rulesにはコーディング規約を記載する
    rules: {
        'prettier/prettier': 'error'
    },
    ignorePatterns: ["node_modules", "build", "eslint.config.cjs"],
}
