class InvestItem{
  constructor(img, name, price, numberOfPossession, perMoney, maxPurchases){
    this.img = img;
    this.name = name;
    this.price = price;
    this.numberOfPossession = numberOfPossession;
    //表示する際のPerMoney(不変)
    this.perMoney = perMoney;
    //現在のPerMoneyを取得(可変)
    this.currentPerMoneyNum = this.getPerMoneyNum();
    this.maxPurchases = maxPurchases
  }

  //PerMoney文字列を数値を取り出して数値型にする
  getPerMoneyNum(){
    return Number(this.perMoney.split(" ")[0].substring(1));
  }

  //purchaseした際の処理を増やす
  sold(){
    this.numberOfPossession++;
    this.currentPerMoneyNum += this.getPerMoneyNum();
  }

  getCurrentPerMoneyNum(){
    return this.currentPerMoneyNum;
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
