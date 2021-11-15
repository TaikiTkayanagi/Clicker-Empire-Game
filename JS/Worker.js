function getEFTStockMoneyPerSecond(invest) {
  let money;
  let price = invest.price;
  for (let i = 0; i < invest.numberOfPossession; i++) {
    money = price * 0.01;
    price
  }
}

//このファイルが呼び出された際に処理するロジックを書く
self.addEventListener("message", (e) => {
  //let userInfo = e.data.userInfo;
  let investInfo = e.data.investInfo;
  let days = e.data.days;

  for (let i = 0; i < investInfo.length; i++) {
    let invest = investInfo[i]
    if (invest.perMoney.indexOf("click") !== -1 || invest.numberOfPossession === 0) { continue; }

    //itemがEFTの際、の処理を行う
    if (invest.name === "EFT Stock") {

      let money = getEFTStockMoneyPerSecond(invest);

    } else if (invest.name === "EFT Bounds") {

    }
  }

  days++;

  postMessage(days)
});
