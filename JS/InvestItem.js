class InvestItem{
  constructor(img, name, price, numberOfPossession, perMoneyStr, perMoneyNum, maxPurchases){
    this.img = img;
    this.name = name;
    this.price = price;
    this.numberOfPossession = numberOfPossession;
    //文字列で表示する際の
    this.perMoneyStr = perMoneyStr;
    this.perMoneyNum = perMoneyNum
    this.maxPurchases = maxPurchases
  }

  setNumberOfPossession(num){
    this.numberOfPossession = num;
  }

  setPerMoneyNumByNumberOfPossession(){
    this.perMoneyNum = this.perMoneyNum + (this.numberOfPossession * this.perMoneyNum);
  }

  getPerMoneyNum(){
    if(this.name === "EFT Stock"){return getEFTStockPerMoneyNum();}
    let perMoney = 0;
    if(this.numberOfPossession > 0){
      perMoney = this.perMoneyNum - (this.numberOfPossession * this.perMoneyNum);
    }
    return perMoney === 0 ? this.perMoneyNum : perMoney;
  }

  //todo:データの役割をそれぞれ考えて、setとgetのロジックを考える
  setEFTStockPerMoneyNum(){
    let increase = 1.1;
  }

  getEFTStockPerMoneyNum(){
    let perMoney = 0;
    if(this.numberOfPossession > 0){
      let currentPrice = this.price
      let increase = 0.1;
      for(let i = 0; i < this.numberOfPossession; i++){
        perMoney += currentPrice * this.perMoneyNum;
        currentPrice -= (currentPrice * increase);
      }
    }

    return perMoney = 0 ? this.perMoneyNum : perMoney;
  }
}
