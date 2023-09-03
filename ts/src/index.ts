import ClickEmpireGame from './mainPage/ClickEmpireGame'
import InputNameValidation from './InputNameValidation'
import LoginPage, { LoginPageType } from './LoginPage'
import LocalStorage from './storage/LocalStorage'
import { UserType } from './const/UserType'
import User from './User/User'
import { InvestItems } from './const/InvestItems'

const registerClick = (loginPage: LoginPageType) => {
	const buttons = loginPage.buttons('.login-window-btns').toArray()
	buttons.map((button) => {
		button.addEventListener('click', () => {
			const inputValue = loginPage.input('.input-name').getValue()
			InputNameValidation(inputValue).showErrorIfNull()
			let user: UserType = User().defaultUser(inputValue)
			if (button.value === 'Login' && LocalStorage().isExist(inputValue)) {
				//JSONデータの解析はいったん保留
				const jsonData = LocalStorage().get(inputValue)
			}
			const mainPage = ClickEmpireGame('main-page')
			mainPage.show(user, InvestItems)
			loginPage.hide()
			mainPage.registerClickOnBurgerBtn(user)
		})
	})
}

document.addEventListener('DOMContentLoaded', () => {
	const loginPage = LoginPage('login-page')
	registerClick(loginPage)
})
