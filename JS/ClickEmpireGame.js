var Validation =
{
  input: function (message) {
    window.alert(`${message}を入力してください。`);
  }
}

const investImgUrls = ["https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png", "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png", "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png", "https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png", "https://cdn.pixabay.com/photo/2020/01/30/12/37/ice-cream-4805333_960_720.png", "https://cdn.pixabay.com/photo/2016/03/31/18/42/home-1294564_960_720.png", "https://cdn.pixabay.com/photo/2019/06/15/22/30/modern-house-4276598_960_720.png", "https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_960_720.png", "https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png", "https://cdn.pixabay.com/photo/2012/05/07/18/03/skyscrapers-48853_960_720.png", "https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png"];

const investNames = ["Flip machine", "EFT Stock", "EFT Bonds", "LEmonade Stand", "Ice Cream Truck", "House", "Town House", "Mansion", "Industrial Space", "Hotel Skyscraper", "Bullet-Speed Sky"];

const investPrices = [1500, 300000, 300000, 30000, 100000, 20000000, 40000000, 250000000, 1000000000, 10000000000, 100000000000];

const perMoneys = ["¥25 /click", "¥0.1 /sec", "¥0.07 /sec", "¥30 /sec", "¥120 /sec", "¥32000 /sec", "¥64000 /sec", "¥500000 /sec", "￥2200000 /sec", "￥25000000 /sec", "￥30000000000 /sec"];

const maxPurchases = [500, null, null, 1000, 500, 100, 100, 20, 10, 5, 1]

const investItems = []
investImgUrls.forEach((url, i) =>
{
  investItems.append(new InvestItem(url, investNames[i], investPrices[i], 0, perMoneys[i], maxPurchases[i]))
});

function initializeMain(config) {
  config.mainPage.innerHtml =
    `
      <div class="click-container d-flex justify-content-center align-items-center">
        <div class="click-field bg-darkviolet">
          <div class="burgers-info-container d-flex justify-content-center align-items-center">
            <div class="burgers-info-field bg-darkblue d-flex flex-wrap">
              <div class="col-12 d-flex justify-content-center height-half">
                <h4 class="text-light">${clickCount} Burgers</h4>
              </div>
              <div class="col-12 d-flex justify-content-center align-items-end height-half">
                <h5 class="text-light">one click ${perMoney}</h5>
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
      </div>
  `
}

document.addEventListener("DOMContentLoaded", () => {
  //名前空間を生成する
  let config = new Config.Member(document.getElementById("main-page"), document.getElementById("login-page"));


  let loginWindowBtns = config.loginPage.querySelectorAll(".login-window-btns");
  let inputName = config.loginPage.querySelector(".input-name").value;


  loginWindowBtns.forEach((value, i) => {
    loginWindowBtns[i].addEventListener('click', () => {
      //validation:値が入力されていな際、警告メッセージを出す
      if (inputName === "") {
        Validation.input("名前");
        return;
      }

      let btnValue = loginWindowBtns[i].value;
      if (btnValue === "New") {

        var userInfo = new UserInfo(inputName, 20, 0);
        initializeMain(config, userInfo, investItems)


      } else if(btnValue === "Login") {
        let loadData = localStorage.getItem(inputName);
        //データを書き換える
        //setLoadData(loadData, userInfo, investItems)
        initializeMain(config, userInfo, investItems);
      }
    });
  });
});
