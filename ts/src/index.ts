const getLoginPage = () => document.getElementById('login-page')

const getLoginPageButtons = () => getLoginPage()?.querySelectorAll('.login-window-btns')

const registerLoginButtonsClickEvent = (loginButtons: Element[], onClick: () => void) => {
	loginButtons.map((value) => {
		value.addEventListener('click', onClick)
	})
}
document.addEventListener('DOMContentLoaded', () => {})
