import { UserType } from 'src/const/UserType'
import ClickContainer from './elements/ClickContainer'
import MenuContainer from './elements/MenuContainer'
import { InvestItem } from 'src/const/InvestItems'

const ClickEmpireGame = (id: string) => {
	const main = document.getElementById(id)
	const { create: containerCreate, reRenderClickCount } = ClickContainer()
	const { create: menuCreate, reRenderingMoney } = MenuContainer()
	if (!main) throw Error('mainが存在しない')

	const removeClass = (className: string) => main.classList.remove(className)

	const show = (user: UserType, investItems: InvestItem[]) => {
		removeClass('d-none')
		const clickContainer = containerCreate(user.clickCount, user.purchase)
		const menuContainer = menuCreate(user, investItems)
		main.appendChild(clickContainer)
		main.appendChild(menuContainer)
	}

	const getBurgerBtn = () => {
		const burgerBtnList = document.getElementsByClassName('burgers-btn-field')
		if (!burgerBtnList || !burgerBtnList.length) {
			throw new Error('burgerBtnが存在しない')
		}
		//burgerBtnクラス名は一つの想定
		return burgerBtnList[0]
	}

	const registerClickOnBurgerBtn = (user: UserType) => {
		const burgerBtn = getBurgerBtn()
		burgerBtn.addEventListener('click', () => {
			const click = user.clickCount + 1
			const money = user.money + 25
			reRenderClickCount(click)
			reRenderingMoney(money)
			user = { ...user, clickCount: click, money: money }
		})
	}

	return { show, registerClickOnBurgerBtn }
}

export default ClickEmpireGame
