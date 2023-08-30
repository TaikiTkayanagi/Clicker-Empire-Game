import { UserType } from 'src/const/UserType'
import InvestContainer from './InvestContainer'
import UserInfoContainer from './UserInfoContainer'
import { InvestItem } from 'src/const/InvestItems'

const MenuContainer = () => {
	const create = (user: UserType, investItems: InvestItem[]) => {
		const div = document.createElement('div')
		div.classList.add('menu-container')
		div.appendChild(UserInfoContainer().create(user))
		div.appendChild(InvestContainer().create(user, investItems))
		return div
	}
	return { create }
}

export default MenuContainer
