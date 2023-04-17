module.exports = {
    parser: "@typescript-eslint/parser", //定义eslint的解析器
    extends: [
        "prettier/@typescript-eslint",
        "plugin:@typescript-eslint/recommended",
    ], //定义文件继承的子规范
    // plugins: [
    //     "@typescript-eslint",

    // ],//定义了该eslint文件所依赖的插件
    setting: {
        "react": {
            "pragma": "React",
            "version": "detect",
        }
    },
    parserOptions: {
        "ecmaVersion": 2019,
        "sourceType": "module",
        "ecmaFeatures": {
            jsx: true
        }
    },
    env: {                          //指定代码的运行环境
        browser: true,
        node: true,
    }
}