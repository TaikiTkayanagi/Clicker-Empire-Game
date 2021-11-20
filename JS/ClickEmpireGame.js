var Validation = {

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

  canPurchaseItems: function (invest, userInfo, quantity) {
    if (quantity <= 0) { Validation.notPositiveInteger(quantity); }
    let finalPrice = invest.price * quantity;

    if (finalPrice > userInfo.money) {
      Validation.notEnoughMoneyMessage(finalPrice - userInfo.money);
      return false;
    }

    if (invest.maxPurchases !== null && invest.numberOfPossession > invest.maxPurchases) {
      Validation.limitNumberOfPossession(invest.numberOfPossession);
      return false;
    }

    return true;
  },

  notPositiveInteger(number) {
    window.alert("0より大きい値を入力してください");
  },

  notEnoughMoneyMessage: function (money) {
    window.alert(`¥${money}不足しています`);
  },

  limitNumberOfPossession: function (numberOfPossession) {
    window.alert(`${numberOfPossession}までしか所持できません`)
  },

  isDataLocalStorage: function (name) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === name) {
        return true;
      }
    }
    Validation.notData(name);
    return false;
  },

  notData: function (name) {
    window.alert(`${name}はセーブデータにありません`);
  }
}

const investImgUrls = ["https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png", "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png", "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png", "https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png", "https://cdn.pixabay.com/photo/2020/01/30/12/37/ice-cream-4805333_960_720.png", "https://cdn.pixabay.com/photo/2016/03/31/18/42/home-1294564_960_720.png", "https://cdn.pixabay.com/photo/2019/06/15/22/30/modern-house-4276598_960_720.png", "https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_960_720.png", "https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png", "https://cdn.pixabay.com/photo/2012/05/07/18/03/skyscrapers-48853_960_720.png", "https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png"];

const investNames = ["Flip machine", "EFT Stock", "EFT Bonds", "LEmonade Stand", "Ice Cream Truck", "House", "Town House", "Mansion", "Industrial Space", "Hotel Skyscraper", "Bullet-Speed Sky"];

const investPrices = [1500, 300000, 300000, 30000, 100000, 20000000, 40000000, 250000000, 1000000000, 10000000000, 100000000000];

const perMoneys = ["¥25 /click", "¥0.1 /sec", "¥0.07 /sec", "¥30 /sec", "¥120 /sec", "¥3200 /sec", "¥6400 /sec", "¥500000 /sec", "¥2200000 /sec", "¥25000000 /sec", "¥30000000000 /sec"];

const maxPurchases = [500, null, null, 1000, 500, 100, 100, 20, 10, 5, 1];

//Itemsのリスト
let investItems = [];
investImgUrls.forEach((url, i) => {
  let currentPerMoneyNum = 0;

  if(investNames[i] === "Flip machine"){
    currentPerMoneyNum = 25
  }

  investItems.push(new InvestItem(url, investNames[i], investPrices[i], 0, perMoneys[i], maxPurchases[i], currentPerMoneyNum))
});

//日付
var days = 1;
var totalSecMoney = 0;

function displayPageShow(page) {
  page.classList.remove("d-none");
}

function displayPageNone(page) {
  page.classList.add("d-none");
}

function displayChange(showPage, nonePage) {
  displayPageShow(showPage);
  displayPageNone(nonePage);
}

function soldFlipMachine(invest, quantity){
  invest.currentPerMoneyNum += invest.getPerMoneyNum() * quantity;
  invest.numberOfPossession += quantity;
}

function soldETF(invest, quantity) {
  invest.currentPerMoneyNum += invest.price * invest.getPerMoneyNum();
  if (invest.name === "EFT Stock") { invest.price += invest.currentPerMoneyNum; }
  invest.increaseNumberOfPossession(quantity);
}

function soldInvestItem(invest, quantity) {
  if (invest.name.indexOf("EFT") !== -1) {

    soldETF(invest, quantity);

  } else if(invest.name === "Flip machine"){

    soldFlipMachine(invest, quantity);

  } else {

    invest.sold(quantity);

  }
}

function hamburgerWork(userInfo, config) {
  userInfo.work(getBurgerMoney());
  initializeClickContainer(config, userInfo);
  initializeUserInfoContainer(config, userInfo);
}

function initializeMenuContainer(config, userInfo) {
  let target = document.querySelector(".menu-container");
  config.mainPage.removeChild(target);
  config.mainPage.append(createMenuContainer(userInfo, config));
}

function initializeUserInfoContainer(config, userInfo) {
  let menuContainer = document.querySelector(".menu-container");
  menuContainer.removeChild(document.querySelector(".user-info-container"));
  menuContainer.insertBefore(createUserInfoContainer(userInfo), document.querySelector(".select-invest-container"));
}

function initializeClickContainer(config, userInfo) {
  let clickContainer = config.mainPage.querySelector(".click-container");
  let menuContainer = config.mainPage.querySelector(".menu-container");
  config.mainPage.removeChild(clickContainer);
  //createClickContainerでsetBurgerClickが呼ばれる
  config.mainPage.insertBefore(createClickContainer(userInfo, config), menuContainer);
}

function getTargetInvestItem(investName) {
  let invest;
  for (let i = 0; i < investItems.length; i++) {
    if (investItems[i].name === investName) {
      invest = investItems[i];
      break;
    }
  }
  return invest
}

//初期の状態の際は、getPerMoneyNumを返す。
function getBurgerMoney() {
  let invest = getTargetInvestItem("Flip machine");
  return invest.getCurrentPerMoneyNum() === 0 ? invest.getPerMoneyNum() : invest.getCurrentPerMoneyNum();
}

function setLoadData(jsonLoadData) {
  let loadData = JSON.parse(jsonLoadData);
  let investsObject = loadData.investsInfo;
  let userInfoObject = loadData.userInfo;
  let tmp = [];

  investsObject.forEach((invest, i) => {
    tmp.push(new InvestItem(invest.img, invest.name, invest.price, invest.numberOfPossession, invest.perMoney, invest.maxPurchases, invest.currentPerMoneyNum));
  })
  //ロードしたデータにinvestItemsを差し替える
  investItems = tmp;
  days = loadData.date;

  return new UserInfo(userInfoObject.name, userInfoObject.age, userInfoObject.money, userInfoObject.clickCount);
}

//todo:Enterを押したら、この関数を実行するようにする
//Investの購入ページに移動する機能を作成
function setInvestClick(investFields, userInfo, config) {
  investFields.forEach((invest, i) => {

    investFields[i].addEventListener("click", () => {
      let field = document.querySelector(".invest-field");
      field.classList.remove("over-flow");
      field.classList.add("bg-darkblue");

      let investName = investFields[i].querySelector(".invest-name");
      let invest = getTargetInvestItem(investName.innerHTML);

      field.innerHTML = "";

      field.innerHTML =
        `
              <div class="invest-info-container d-flex justify-content-between align-items-center">
                <div class="invest-info col-6 px-1 over-flow-hidden">
                  <h3 class="text-light">${invest.name}</h3>
                  <p class="text-light">Max purchases: ${invest.maxPurchases}</p>
                  <p class="text-light">Price: ¥${invest.price}</p>
                  <p class="text-light">Get ${invest.price}</p>
                </div>
                <div class="invest-img col-6 d-flex justify-content-end">
                  <img src="${invest.img}" class="img-detail">
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
      //イベントを関数でsetする
      let backBtn = field.querySelector("#back-btn");//購入ページのボタンを押した際の設定を行う
      backBtn.addEventListener("click", () => {
        initializeMenuContainer(config, userInfo);
      });

      //itemの購入イベント
      let purchaseBtn = field.querySelector("#purchase-btn");
      purchaseBtn.addEventListener("click", () => {
        let price = invest.price;
        let quantity = Number(field.querySelector(".quantity").value);

        if (Validation.canPurchaseItems(invest, userInfo, quantity)) {
          userInfo.purchase(price * quantity);
          soldInvestItem(invest, quantity);
        }
        config.mainPage.innerHTML = "";
        initializeMain(config, userInfo);
      });
    })
  });
}




//Json形式でデータを保存する関数を作成する
function setSaveAndReset(saveBtn, resetBtn, userInfo, config) {
  //Jsonの形で保存する
  saveBtn.addEventListener("click", () => {
    let jsonString = { userInfo: userInfo, investsInfo: investItems, date: days };

    // 配列をオブジェクトに変換
    let jsonEncode = JSON.stringify(jsonString);
    localStorage.setItem(userInfo.name, jsonEncode);
  });

  //localStorageのデータを削除
  resetBtn.addEventListener("click", () => {
    localStorage.removeItem(userInfo.name);
    //リロードを行い、ログインページに戻る(investItemsを初期化する)
    location.reload();
  });
}

//mainPageの左側を作成する
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
                width="50%" class="py-2 hover img-fuid" id="burger" onclick="document.getElementsByTagName('body')[0].dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}))">
            </div>
          </div>
        </div>
  `

  return container;
}

//mainPageの右側を作成する
function createMenuContainer(userInfo, config) {
  let container = document.createElement("div");
  container.classList.add("menu-container");

  container.append(createUserInfoContainer(userInfo));
  container.append(createInvestContainer(userInfo, config));

  return container;
}

//userInfoContainerを作成する
function createUserInfoContainer(userInfo) {
  let container = document.createElement("div");
  container.classList.add("user-info-container", "d-flex", "justify-content-center", "align-items-center");

  if (days % 365 === 0) { userInfo.age++; }
  userInfo.money += totalSecMoney;

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
                <p class="text-light">${days} days</p>
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

//mainPageのInvestフィールドの作成
function createInvestContainer(userInfo, config) {
  let container = document.createElement("div");
  container.classList.add("select-invest-container", "d-flex", "align-items-center", "justify-content-center", "flex-wrap");

  let investFieldAndBtnsField = document.createElement("div");
  investFieldAndBtnsField.classList.add("invest-and-btns-field", "bg-darkviolet", "col-12", "d-flex", "flex-wrap", "justify-content-center");

  investFieldAndBtnsField.append(createInvestList());
  investFieldAndBtnsField.append(createInvestBtns());

  container.append(investFieldAndBtnsField);

  setInvestClick(investFieldAndBtnsField.querySelectorAll(".invest"), userInfo, config)
  setSaveAndReset(container.querySelector(".save-btn"), container.querySelector(".reset-btn"), userInfo, config);

  return container;
}

//Investのリストを作成する
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
                  <p class="text-light invest-price">¥${invest.price}</p>
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

//mainPageのボタンを作成する
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

//MainPageの作成
function initializeMain(config, userInfo) {
  let main = config.mainPage;
  let login = config.loginPage

  displayChange(main, login);

  main.append(createClickContainer(userInfo, config));
  main.append(createMenuContainer(userInfo, config));
}

//ハンバーガのクリックイベントをset
function setBurgerEvent(userInfo, config){
  document.getElementsByTagName("body")[0].addEventListener("keydown", (event) => {
    if (event.key === "Enter") {hamburgerWork(userInfo, config);}
  });
}

function startWorker(userInfo, config){
  //裏の処理をworkerで行う
  let worker = new Worker("../js/Worker.js");

  //1秒間隔でパラメータを裏に渡す
  window.setInterval(() => {
    worker.postMessage({
      "investInfo": investItems,
      "days": days //グローバル変数のdaysを渡す
    });
  }, 1000)

  //裏の処理から値を受け取る
  worker.addEventListener("message", (e) => {
    days = e.data.Day; //グローバル変数を書き換える
    totalSecMoney = e.data.Money;
    initializeUserInfoContainer(config, userInfo);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  //名前空間を生成する
  let config = new Config.Member(document.getElementById("main-page"), document.getElementById("login-page"));

  let loginWindowBtns = config.loginPage.querySelectorAll(".login-window-btns");

  //DomContentLoaded内では、利用できるようにする
  let userInfo;

  loginWindowBtns.forEach((value, i) => {
    loginWindowBtns[i].addEventListener('click', () => {
      let inputName = config.loginPage.querySelector(".input-name").value;
      //インスタンスを生成する
      userInfo = new UserInfo(inputName, 20, 5000, 0);

      //validation:値が入力されていな際、警告メッセージを出す
      if (Validation.isInputNull(inputName)) {
        return;
      }

      let btnValue = loginWindowBtns[i].value;

      //Loginの際は、LocalStorageからデータを取得して上書きする
      if (btnValue === "Login") {
        if (!Validation.isDataLocalStorage(inputName)) { return; }
        let jsonLoadData = localStorage.getItem(inputName);
        userInfo = setLoadData(jsonLoadData);//investsItemを書き換えて、UserInfoの情報を受け取る
      }

      initializeMain(config, userInfo);
      setBurgerEvent(userInfo, config);
      startWorker(userInfo, config);
    });
  });
});
