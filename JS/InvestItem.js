class InvestItem{
  constructor(img, name, price, numberOfPossession, perMoney, maxPurchases, currentPerMoneyNum=null){
    this.img = img;
    this.name = name;
    this.price = price;
    this.numberOfPossession = numberOfPossession;
    //表示する際のPerMoney(不変)
    this.perMoney = perMoney;
    this.maxPurchases = maxPurchases
    if(currentPerMoneyNum === null){this.currentPerMoneyNum = this.getPerMoneyNum();}
    else {this.currentPerMoneyNum = currentPerMoneyNum;}
  }



  getPerMoneyNum(){
    return Number(this.perMoney.split(" ")[0].substring(1));
  }

  sold(){
    this.numberOfPossession++;
    this.currentPerMoneyNum = this.numberOfPossession * this.getPerMoneyNum();
  }

  getCurrentPerMoneyNum(){
    return this.currentPerMoneyNum;
  }
}
