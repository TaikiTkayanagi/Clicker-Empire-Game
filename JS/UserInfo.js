class UserInfo{
  //日数は、UserInfoに適していないと考え入れない
  constructor(name, age, money){
    this.name = name;
    this.age = age;
    this.money = money
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
