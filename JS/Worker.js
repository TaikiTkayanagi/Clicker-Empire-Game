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
  let investInfo = e.data.investInfo;
  let days = e.data.days;
  let totalPerMoney = 0;

  for (let i = 0; i < investInfo.length; i++) {
    let invest = investInfo[i]
    if (invest.perMoney.indexOf("click") !== -1 || invest.numberOfPossession === 0) { continue; }

    totalPerMoney += invest.currentPerMoneyNum;
  }

  days++;
  postMessage({Day: days, Money: totalPerMoney});
});
