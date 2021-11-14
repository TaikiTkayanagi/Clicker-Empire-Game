class InvestItem{
  constructor(img, name, price, numberOfPossession, perMoney, maxPurchases){
    this.img = img;
    this.name = name;
    this.price = price;
    this.numberOfPossession = numberOfPossession;
    //表示する際のPerMoney(不変)
    this.perMoney = perMoney;
    //現在のPerMoneyを取得(可変)
    this.currentPerMoneyNum = perMoney;
    this.maxPurchases = maxPurchases
  }

  setNumberOfPossession(num){
    this.numberOfPossession = num;
  }

  setCurrentPerMoney(){
    this.currentPerMoneyNum = this.currentPerMoneyNum + (this.numberOfPossession * this.perMoney);
  }

  getCurrentPerMoneyNum(){
    return this.currentPerMoneyNum;
  }

  sold(){
    this.numberOfPossession++;
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
