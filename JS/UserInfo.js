class UserInfo{
  //日数は、UserInfoに適していないと考え入れない
  constructor(name, age, money, clickCount){
    this.name = name;
    this.age = age;
    this.money = money
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
