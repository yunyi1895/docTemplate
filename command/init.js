var path = require('path');

var inquirer = require('inquirer');
var fs = require('../lib/file');
var question = require('../lib/questions');
module.exports = function () {
  // 清空屏幕并显示 npm 信息
  fs.showNpmInfo();

  // 等待用户输入项目信息
  inquirer
      .prompt(question)
      .then((args) => {
        console.log('开始创建')
          let dir = path.resolve(process.cwd(), './' + args.appName);
          let templatePath=path.resolve(path.dirname(__filename),'../template')
          let toDocPath=path.join(dir+'/'+args.appName);
          let docPath=path.resolve(path.dirname(__filename),'../template/doc')
          fs.ensureDir(toDocPath).then((flag)=>{
            return flag==true?fs.copy(docPath,toDocPath):Promise.reject(flag);
          }).then(()=>{
            fs.customCopy(templatePath,dir,'./'+args.appName);
          }).then(res=>{
            console.log('创建成功')
          })
      
      })
    
         
};