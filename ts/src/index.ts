import InputNameValidation from './InputNameValidation'
import LoginPage from './LoginPage'
import LocalStorage from './storage/LocalStorage'

const registerClick = (inputValue: string, buttons: HTMLButtonElement[]) => {
	buttons.map((button) => {
		InputNameValidation(inputValue).showErrorIfNull()
		if (button.value === 'Login' && LocalStorage().isExist(inputValue)) {
			const jsonData = LocalStorage().get(inputValue)
		}
	})
}

document.addEventListener('DOMContentLoaded', () => {
	const loginPage = LoginPage('login-page')
	const loginButtons = loginPage.buttons('.login-window-btns')
	const loginInput = loginPage.input('.input-name')
	registerClick(loginInput.getValue(), loginButtons.toArray())
})
