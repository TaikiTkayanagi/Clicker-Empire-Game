class InvestItem{
  constructor(img, name, price, numberOfPossession, perMoney, maxPurchases){
    this.img = img;
    this.name = name;
    this.price = price;
    this.numberOfPossession = numberOfPossession;
    this.perMoney = perMoney;
    this.maxPurchases = maxPurchases
  }

  setNumberOfPossession(num){
    this.numberOfPossession = num;
  }
}
