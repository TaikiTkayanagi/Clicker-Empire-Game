import { InvestItem } from 'src/const/InvestItems'
import { UserType } from 'src/const/UserType'

const InvestsList = () => {
	const create = (investItems: InvestItem[], purchase: UserType['purchase']) => {
		const div = document.createElement('div')
		div.classList.add('invest-field', 'over-flow', 'my-1')
		//引数で受け取った投資対象の数回る
		investItems.map((invest) => {
			const havingItem = purchase.find((value) => value.name === invest.name)
			div.innerHTML += `
          <div class="invest col-12 d-flex bg-darkblue my-1">
            <div class=" invest-img col-3 d-flex justify-content-center">
              <img src="${invest.img}" class="img-fluid">
            </div>
            <div class=" invest-title col-6 over-flow-hidden">
              <h3 class="text-light invest-name">${invest.name}</h3>
              <p class="text-light invest-price">¥${invest.price}</p>
            </div>
              <div class=" invest-count col-3 over-flow-hidden">
                <h3 class="text-light invest-number">${
					havingItem?.count ? havingItem.count : 0
				}</h3>
                <p class="text-success invest-perMoney">￥${invest.effect}/${invest.action}</p>
                <input type="hidden" class="invest-max" value="${invest.max}">
              </div>
            </div>
    `
		})
		return div
	}
	return { create }
}

export default InvestsList
