#! /usr/bin/env node
const Program = require("commander");


Program
    .version(require('../package').version)
    .description("接口文档模板")
    .option("-i, --init","模板初始化")

Program
    .command("init")
    .description("初始化模板")
    .action(() => {
      require('../command/init')()
    });

Program.parse(process.argv);