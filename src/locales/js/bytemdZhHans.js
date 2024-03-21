// 导入汉化文件
const zhHansMain = require("bytemd/locales/zh_Hans.json");
const zhHansPluginMath = require("@bytemd/plugin-math/locales/zh_Hans.json");
const zhHansPluginGfm = require("@bytemd/plugin-gfm/locales/zh_Hans.json");
const zhHansPluginMermaid = require("@bytemd/plugin-mermaid/locales/zh_Hans.json");


// 合并
const zhHansObj = Object.assign({}, zhHansMain, zhHansPluginGfm, zhHansPluginMath, zhHansPluginMermaid);

// 转换 json
const zhHansJson = JSON.stringify(zhHansObj);

// 保存文件
const fs = require("fs");
fs.writeFileSync("../bytemd/zhHans.json", zhHansJson);
