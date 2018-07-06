const chalk = require('chalk');
const path = require('path');
const clear = require('clear');
const figlet = require('figlet');
const Promise = require("bluebird");
const fse = Promise.promisifyAll(require('fs-extra'));
const fs=require('fs');


module.exports = {
  customCopy(src,dst,objName){
    let vm=this;
    if(fs.existsSync(src)){
      fs.readdir(src,function(err,files){
          if(err){console.log(err);return;}
          files.forEach(function(filename){
            let url = path.join(src,filename),
            dest = path.join(dst,filename);
            fs.stat(path.join(src,filename),function(err, stats){
              if (err) throw err;
              if(stats.isFile()){
                  vm.readFile(url).then(res=>{
                  if(filename=='package.json'){
                    res=res.replace("./doc",objName)
                  }
                  vm.outPutFile(dest,res);
                });
                
            //如果是目录
            }
            })
           
          
          })
      })
    }
  },
  //创建目录
  ensureDir(dir) { 
    return new Promise((resolve, reject) => {
      fse.ensureDir(dir, err => {
        if (!err) resolve(true);

        reject(err);
      })
    })
  },
  //拷贝文件
  copy(from, to) {
    return new Promise((resolve, reject) => {
      fse.copy(from, to, err => {
        if (!err) resolve(true);

        reject(err);
      })
    })
  },

  outPutFile(file, content = '') {
    return new Promise((resolve, reject) => {
      fse.outputFile(file, content, err => {
        if (!err) resolve(true);

        reject(err);
      })
    })
  },
  readFile(file){
    return new Promise((resolve, reject) => {
      fse.readFile(file,'utf8', (err, data) => {
        if (!err) resolve(data);

        reject(err);
      })
    })
  },
  readJson(file) {
    return new Promise((resolve, reject) => {
      fse.readJson(file, (err, data) => {
        if (!err) resolve(data);

        reject(err);
      })
    })
  },

  getCurrentDirectoryBase() {
    return path.basename(process.cwd());
  },

  getCurrentRootPath() {
    return process.cwd();
  },

  isDirExists(filePath) {
    try {
      return fse.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  },

  showNpmInfo() {
    clear();
    console.log(
      chalk.yellow(
        figlet.textSync('DOC', { horizontalLayout: 'full' })
      ));
  },

  showCreateDirInfo(type = 'begin') {
    if (type == 'begin') {
      console.log(chalk.white('\n Start creating Project...'))
    } else if (type == 'end') {
      console.log(chalk.green('\n Creating Project Ok...'))
    }

  },

  showCreatePageModulesInfo(type = 'begin') {
    if (type == 'begin') {
      console.log(chalk.white('\n Start creating page modules ...'))
    } else if (type == 'end') {
      console.log(chalk.green('\n Creating page modules Ok...'))
    }
  },

  // inputPageModuleFile(path) {
  //   let fixes = ['.json', '.js', '.wxml', '.wxss'], str;

  //   for (let i in fixes) {
  //     if (fixes.hasOwnProperty(i)) {
  //       str = fixes[i] == '.js' ? data.str : '';

  //       this.outPutFile(path + fixes[i], str);
  //     }
  //   }

  //   this.showCreatePageModulesInfo('end');
  // }

};