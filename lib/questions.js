const loginQuestions = [{
  type: 'input',
  name: 'appName',
  message: '请输入你的项目名称: ',
  validate(value) {
    if (value.length) {
      return true;
    } else {
      return '请输入你的项目名称：';
    }
  }
}]
module.exports = loginQuestions;