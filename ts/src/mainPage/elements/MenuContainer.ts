import { UserType } from 'src/const/UserType'
import InvestContainer from './InvestContainer'
import UserInfoContainer from './UserInfoContainer'
import { InvestItem } from 'src/const/InvestItems'

const MenuContainer = () => {
	const { create: userInfoCrate, reRenderingMoney } = UserInfoContainer()
	const { create: investContainerCreate } = InvestContainer()

	const create = (user: UserType, investItems: InvestItem[]) => {
		const div = document.createElement('div')
		div.classList.add('menu-container')
		div.appendChild(userInfoCrate(user))
		div.appendChild(investContainerCreate(user, investItems))
		return div
	}
	return { create, reRenderingMoney }
}

export default MenuContainer
