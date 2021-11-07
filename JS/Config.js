//Configが未定義の際のみ、新しい名前空間を作成する
var Config = Config || {};

Config.Member = function(main, login){
  this.mainPage = main;
  this.loginPage = login;
}

Config.Member.prototype = {
  loginPage : () => {return this.loginPage;},
  mainPage : () => {return this.mainPage;}
}
