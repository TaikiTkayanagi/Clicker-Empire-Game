const InputNameValidation = (inputName: string) => {
	const isNull = () => {
		return inputName !== ''
	}

	const showErrorIfNull = () => {
		if (isNull()) {
			window.alert('名前を入力してください。')
			throw new Error('名前が入力されていない')
		}
	}

	return { showErrorIfNull }
}

export default InputNameValidation
