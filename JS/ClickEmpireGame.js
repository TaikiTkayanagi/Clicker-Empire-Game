var Validation ={

  isInputNull: function (target) {
    if (target !== "") { return false; }
    else {
      Validation.inputMessage("名前");
      return true;
    }
  },

  inputMessage: function (message) {
    window.alert(`${message}を入力してください。`);
  },

  canPurchaseItems: function (money, price, quantity) {
    let finalPrice = price * quantity;
    if (money >= finalPrice) { return true; }
    else {
      Validation.notEnoughMoneyMessage(finalPrice - money);
      return false;
    }
  },

  notEnoughMoneyMessage(money) {
    window.alert(`¥${money}不足しています`);
  }

}

const investImgUrls = ["https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png", "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png", "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png", "https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png", "https://cdn.pixabay.com/photo/2020/01/30/12/37/ice-cream-4805333_960_720.png", "https://cdn.pixabay.com/photo/2016/03/31/18/42/home-1294564_960_720.png", "https://cdn.pixabay.com/photo/2019/06/15/22/30/modern-house-4276598_960_720.png", "https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_960_720.png", "https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png", "https://cdn.pixabay.com/photo/2012/05/07/18/03/skyscrapers-48853_960_720.png", "https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png"];

const investNames = ["Flip machine", "EFT Stock", "EFT Bonds", "LEmonade Stand", "Ice Cream Truck", "House", "Town House", "Mansion", "Industrial Space", "Hotel Skyscraper", "Bullet-Speed Sky"];

const investPrices = [1500, 300000, 300000, 30000, 100000, 20000000, 40000000, 250000000, 1000000000, 10000000000, 100000000000];

const perMoneys = ["¥25 /click", "¥0.1 /sec", "¥0.07 /sec", "¥30 /sec", "¥120 /sec", "¥32000 /sec", "¥64000 /sec", "¥500000 /sec", "￥2200000 /sec", "￥25000000 /sec", "￥30000000000 /sec"];

const maxPurchases = [500, null, null, 1000, 500, 100, 100, 20, 10, 5, 1];

const investItems = [];
investImgUrls.forEach((url, i) => {
  investItems.push(new InvestItem(url, investNames[i], investPrices[i], 0, perMoneys[i], maxPurchases[i]))
});

function displayPageShow(page) {
  page.classList.remove("d-none");
}

function displayPageNone(page) {
  page.classList.add("d-none");
}

function initializeMenuContainer(config, userInfo) {
  let target = document.querySelector(".menu-container");
  config.mainPage.removeChild(target);
  config.mainPage.append(createMenuContainer(userInfo, config));
}

function formatPerMoney(perMoney){
  return Number(perMoney.split(" ")[0].substring(1));
}

function getBurgerMoney(){
  let money;
  let possession;

  investItems.forEach(invest => {
    if(invest.name === "Flip machine"){
      money = formatPerMoney(invest.perMoney);
      possession = invest.numberOfPossession;
    }

  });
  return possession === 0 ? money : money * possession;

}

function setLoadData(jsonLoadData, userInfo){
  let loadData = JSON.parse(jsonLoadData);
  userInfo = loadData.userInfo;
  let test = loadData.test;
  investItems = loadData.investsInfo;
}

function setInvestClick(investFields, investFieldAndBtnsField, userInfo, config) {
  investFields.forEach((invest, i) => {

    investFields[i].addEventListener("click", () => {
      let field = document.querySelector(".invest-field");
      field.classList.remove("over-flow");
      field.classList.add("bg-darkblue");

      let investImg = investFields[i].querySelector(".img-fluid");
      let investName = investFields[i].querySelector(".invest-name");
      let investPrice = investFields[i].querySelector(".invest-price");
      let investNumber = investFields[i].querySelector(".invest-number");
      let investPerMoney = investFields[i].querySelector(".invest-perMoney");
      let investMax = investFields[i].querySelector(".invest-max");

      field.innerHTML = "";

      field.innerHTML =
        `
              <div class="invest-info-container d-flex justify-content-between align-items-center">
                <div class="invest-info col-6 px-1 over-flow-hidden">
                  <h3 class="text-light">${investName.innerHTML}</h3>
                  <p class="text-light">Max purchases: ${investMax.value}</p>
                  <p class="text-light">Price: ¥${investPrice.innerHTML}</p>
                  <p class="text-light">Get ${investPerMoney.innerHTML}</p>
                </div>
                <div class="invest-img col-6 d-flex justify-content-end">
                  <img src="${investImg.src}" class="img-detail">
                </div>
              </div>
              <div class="input-buy-container">
                <p class="text-light">How many would you like to buy?</p>
                <input type="number" class="quantity full-width" placeholder="0">
                <div class="full-size d-flex justify-content-end">
                  <p class="text-light">total: ￥0</p>
                </div>
              </div>
              <div class="action-btns-container">
                <div class="full-size d-flex justify-content-between align-items-end">
                  <div class="col-5">
                    <input type="button" id="back-btn" class="btn btn-outline-light btns-action" value="Go Back">
                  </div>
                  <div class="col-5">
                    <input type="button" id="purchase-btn" class="btn btn-light btns-action" value="Purchase">
                  </div>
                </div>
              </div>
      `

      //購入ページのボタンを押した際の設定を行う
      let backBtn = field.querySelector("#back-btn");
      backBtn.addEventListener("click", () => {
        initializeMenuContainer(config, userInfo);
      });


      let purchaseBtn = field.querySelector("#purchase-btn");
      purchaseBtn.addEventListener("click", () => {
        if (Validation.canPurchaseItems(userInfo.money, investPrice.innerHTML, field.querySelector(".quantity").value)) {
          //買える際の処理

        }
        initializeMenuContainer(config, userInfo);
      });
    })
  });
}

//ハンバーガのクリックイベントの設定
function setBurgerClick(burger, config, userInfo){
  burger.addEventListener("click", () => {
    userInfo.clickCount++;
    userInfo.money = Number(userInfo.money) + getBurgerMoney();

    let clickContainer = document.querySelector(".click-container");
    let menuContainer = document.querySelector(".menu-container");

    config.mainPage.removeChild(clickContainer);
    //createClickContainerでsetBurgerClickが呼ばれる
    config.mainPage.insertBefore(createClickContainer(userInfo, config), menuContainer);

    menuContainer.removeChild(document.querySelector(".user-info-container"));
    menuContainer.insertBefore(createUserInfoContainer(userInfo), document.querySelector(".select-invest-container"));
  });
}

//todo:Json形式でデータを保存する関数を作成する
function setSaveAndReset(saveBtn, resetBtn, userInfo){
  saveBtn.addEventListener("click", () => {
    //Json文字列=>オブジェクト=>Jsonの流れ
    let jsonString = `[{"userInfo": ${userInfo}, "investsInfo": ${investItems}, "test": 1}]`;
    let jsonDecode = JSON.parse(jsonString);
    let jsonEncode = JSON.stringify(jsonDecode);
    localStorage.setItem(userInfo.name, jsonEncode);
  });

  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("clickEmpire");
  });
}

function createClickContainer(userInfo, config) {
  let container = document.createElement("div");
  container.classList.add("click-container", "d-flex", "justify-content-center", "align-items-center")

  container.innerHTML =
    `
        <div class="click-field bg-darkviolet">
          <div class="burgers-info-container d-flex justify-content-center align-items-center">
            <div class="burgers-info-field bg-darkblue d-flex flex-wrap">
              <div class="col-12 d-flex justify-content-center height-half">
                <h4 class="text-light">${userInfo.clickCount} Burgers</h4>
              </div>
              <div class="col-12 d-flex justify-content-center align-items-end height-half">
                <h5 class="text-light">one click ${getBurgerMoney()}</h5>
              </div>
            </div>
          </div>
          <div class="money-effect-container d-flex justify-content-center">
            <div class="money-effect-field d-flex justify-content-end align-items-end">
              <i class="fas fa-money-bill-alt money"></i>
            </div>
          </div>
          <div class="burgers-btn-container">
            <div class="burgers-btn-field d-flex justify-content-center">
              <img src="https://cdn.pixabay.com/photo/2014/04/02/17/00/burger-307648_960_720.png" height="70%"
                width="50%" class="py-2 hover img-fuid" id="burger">
            </div>
          </div>
        </div>
  `

  setBurgerClick(container.querySelector("#burger"), config, userInfo);

  return container;
}

function createMenuContainer(userInfo, config) {
  let container = document.createElement("div");
  container.classList.add("menu-container");

  container.append(createUserInfoContainer(userInfo));
  container.append(createInvestContainer(userInfo, config));

  return container;
}

function createUserInfoContainer(userInfo) {
  let container = document.createElement("div");
  container.classList.add("user-info-container", "d-flex", "justify-content-center", "align-items-center");

  container.innerHTML =
    `
          <div class="user-info-field bg-darkviolet d-flex flex-wrap">
            <div class="forth-container col-6 d-flex justify-content-center align-items-center">
              <div class="forth-field bg-darkblue d-flex justify-content-center">
                <p class="text-light">${userInfo.name}</h5>
              </div>
            </div>
            <div class="forth-container col-6 d-flex justify-content-center align-items-center">
              <div class="forth-field bg-darkblue d-flex justify-content-center">
                <p class="text-light">${userInfo.age}</p>
              </div>
            </div>
            <div class="forth-container col-6 d-flex justify-content-center align-items-center">
              <div class="forth-field bg-darkblue d-flex justify-content-center">
                <p class="text-light">10 days</p>
              </div>
            </div>
            <div class="forth-container col-6 d-flex justify-content-center align-items-center">
              <div class="forth-field bg-darkblue d-flex justify-content-center">
                <p class="text-light">¥${userInfo.money}</p>
              </div>
            </div>
          </div>
  `

  return container;
}

function createInvestContainer(userInfo, config) {
  let container = document.createElement("div");
  container.classList.add("select-invest-container", "d-flex", "align-items-center", "justify-content-center", "flex-wrap");

  let investFieldAndBtnsField = document.createElement("div");
  investFieldAndBtnsField.classList.add("invest-and-btns-field", "bg-darkviolet", "col-12", "d-flex", "flex-wrap", "justify-content-center");

  investFieldAndBtnsField.append(createInvestList());
  investFieldAndBtnsField.append(createInvestBtns());

  container.append(investFieldAndBtnsField);

  setInvestClick(investFieldAndBtnsField.querySelectorAll(".invest"), investFieldAndBtnsField, userInfo, config)
  setSaveAndReset(container.querySelector(".save-btn"), container.querySelector(".reset-btn"), userInfo);

  return container;
}

function createInvestList() {
  let field = document.createElement("div");
  field.classList.add("invest-field", "over-flow", "my-1");

  investItems.forEach(invest => {
    field.innerHTML +=
      `
              <div class="invest col-12 d-flex bg-darkblue my-1">
                <div class=" invest-img col-3 d-flex justify-content-center">
                  <img src="${invest.img}" class="img-fluid">
                </div>
                <div class=" invest-title col-6 over-flow-hidden">
                  <h3 class="text-light invest-name">${invest.name}</h3>
                  <p class="text-light invest-price">${invest.price}</p>
                </div>
                <div class=" invest-count col-3 over-flow-hidden">
                  <h3 class="text-light invest-number">${invest.numberOfPossession}</h3>
                  <p class="text-success invest-perMoney">${invest.perMoney}</p>
                  <input type="hidden" class="invest-max" value="${invest.maxPurchases}">
                </div>
              </div>
    `
  });

  return field;
}

function createInvestBtns() {
  let container = document.createElement("div");
  container.classList.add("save-and-reset-btns-container", "d-flex", "justify-content-end");

  container.innerHTML =
    `
              <div class="save-and-reset-btns save-and-field-bnts-field d-flex justify-content-end align-items-end">
                <div class="save-btn setting-btns d-flex justify-content-end">
                  <button class="full-size btn btn-outline-light save-btn">
                    <i class="fas fa-save btn-icon-size"></i>
                    <p>Save</p>
                  </button>
                </div>
                <div class="refresh-bth setting-btns d-flex justify-content-end">
                  <button class="full-size btn btn-outline-light reset-btn">
                    <i class="fas fa-redo btn-icon-size"></i>
                    <p>Reset</p>
                  </button>
                </div>
              <div>
  `


  return container;
}

function initializeMain(config, userInfo) {
  let main = config.mainPage;
  let login = config.loginPage

  displayPageShow(main);
  displayPageNone(login);

  main.append(createClickContainer(userInfo, config));
  main.append(createMenuContainer(userInfo, config));
}

document.addEventListener("DOMContentLoaded", () => {
  //名前空間を生成する
  let config = new Config.Member(document.getElementById("main-page"), document.getElementById("login-page"));


  let loginWindowBtns = config.loginPage.querySelectorAll(".login-window-btns");


  loginWindowBtns.forEach((value, i) => {
    loginWindowBtns[i].addEventListener('click', () => {
      let inputName = config.loginPage.querySelector(".input-name").value;

      //validation:値が入力されていな際、警告メッセージを出す
      if (Validation.isInputNull(inputName)) {
        return;
      }

      let btnValue = loginWindowBtns[i].value;
      var userInfo = new UserInfo(inputName, 20, 0, 0);
      if (btnValue === "New") {

        initializeMain(config, userInfo);

      } else if (btnValue === "Login") {

        let jsonLoadData = localStorage.getItem(inputName);
        //データを書き換える
        setLoadData(jsonLoadData, userInfo);
        initializeMain(config, userInfo);
      }
    });
  });
});
