import { UserType } from 'src/const/UserType'
import ClickContainer from './elements/ClickContainer'
import MenuContainer from './elements/MenuContainer'
import { InvestItem } from 'src/const/InvestItems'

const ClickEmpireGame = (id: string) => {
	const main = document.getElementById(id)
	if (!main) throw Error('mainが存在しない')

	const removeClass = (className: string) => main.classList.remove(className)
	const createMenuContainer = () => {}

	const show = (user: UserType, investItems: InvestItem[]) => {
		removeClass('d-none')
		const clickContainer = ClickContainer().create(user.clickCount, user.purchase)
		const menuContainer = MenuContainer().create(user, investItems)
		main.appendChild(clickContainer)
		main.appendChild(menuContainer)
	}

	return { show }
}

export default ClickEmpireGame
