const LoginPage = (id: string) => {
	const loginPage = document.getElementById(id)
	if (!loginPage) throw new Error(`${id}が存在しない`)

	const buttons = (className: string) => {
		const buttons: NodeListOf<HTMLButtonElement> | null = loginPage.querySelectorAll(className)
		if (!buttons) throw new Error(`${className}が存在しない`)

		const toArray = () => Array.from(buttons)
		return { toArray }
	}

	const input = (className: string) => {
		const input: HTMLInputElement | null = document.querySelector(className)
		if (!input) throw new Error(`${className}が存在しない`)

		const getValue = () => input.value

		return { getValue }
	}

	return { buttons, input }
}

export default LoginPage
