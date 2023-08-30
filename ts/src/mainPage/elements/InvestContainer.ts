import { UserType } from 'src/const/UserType'
import InvestsList from './Invests'
import { InvestItem } from 'src/const/InvestItems'
import SaveAndResetButtonsContainer from './SaveAndResetButtonsContainer'

const InvestContainer = () => {
	const create = (user: UserType, investItems: InvestItem[]) => {
		const container = document.createElement('div')
		container.classList.add(
			'select-invest-container',
			'd-flex',
			'align-items-center',
			'justify-content-center',
			'flex-wrap',
		)
		const child = document.createElement('div')
		child.classList.add(
			'invest-and-btns-field',
			'bg-darkviolet',
			'col-12',
			'd-flex',
			'flex-wrap',
			'justify-content-center',
		)
		child.appendChild(InvestsList().create(investItems, user.purchase))
		child.appendChild(SaveAndResetButtonsContainer().create())
		container.appendChild(child)

		return container
	}
	return { create }
}

export default InvestContainer
