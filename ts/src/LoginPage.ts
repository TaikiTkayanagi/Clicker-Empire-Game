export type LoginPageType = {
	hide: () => void
	buttons: (className: string) => {
		toArray: () => HTMLButtonElement[]
	}
	input: (className: string) => {
		getValue: () => string
	}
}

const LoginPage = (id: string) => {
	const loginPage = document.getElementById(id)
	if (!loginPage) throw new Error(`${id}が存在しない`)

	const hide = () => loginPage.classList.add('d-none')
	const buttons = (className: string) => {
		const buttons: NodeListOf<HTMLButtonElement> | null = loginPage.querySelectorAll(className)
		if (!buttons) throw new Error(`${className}が存在しない`)

		const toArray = () => Array.from(buttons)
		return { toArray }
	}

	const input = (className: string) => {
		const input: HTMLInputElement | null = loginPage.querySelector(className)
		if (!input) throw new Error(`${className}が存在しない`)

		const getValue = () => input.value

		return { getValue }
	}

	return { hide, buttons, input }
}

export default LoginPage
