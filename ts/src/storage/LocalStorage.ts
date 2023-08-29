const LocalStorage = () => {
	const isExist = (target: string) => {
		for (let i = 0; i < localStorage.length; i++) {
			if (localStorage.key(i) === target) return true
		}
		return false
	}

	const get = (key: string) => localStorage.getItem(key)

	return { isExist, get }
}

export default LocalStorage
