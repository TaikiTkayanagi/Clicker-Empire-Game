class InvestItem{
  constructor(img, name, price, numberOfPossession, perMoney, maxPurchases, currentPerMoneyNum=0){
    this.img = img;
    this.name = name;
    this.price = price;
    this.numberOfPossession = numberOfPossession;
    //表示する際のPerMoney(不変)
    this.perMoney = perMoney;
    this.maxPurchases = maxPurchases
    this.currentPerMoneyNum = currentPerMoneyNum
  }

  increaseNumberOfPossession(quantity){
    this.numberOfPossession += quantity;
  }


  getPerMoneyNum(){
    return Number(this.perMoney.split(" ")[0].substring(1));
  }

  sold(quantity){
    this.increaseNumberOfPossession(quantity);
    this.currentPerMoneyNum = this.numberOfPossession * this.getPerMoneyNum();
  }

  getCurrentPerMoneyNum(){
    return this.currentPerMoneyNum;
  }
}
