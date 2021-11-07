class UserInfo{
  //日数は、UserInfoに適していないと考え入れない
  constructor(name, age, money, oneClick, clickCount){
    this.name = name;
    this.age = age;
    this.money = money
    this.oneClick = oneClick
    this.clickCount = clickCount
  }

  setName(name){
    this.name = name;
  }

  setAge(age){
    this.age = age;
  }

  setMoney(money){
    this.money = money;
  }
}
