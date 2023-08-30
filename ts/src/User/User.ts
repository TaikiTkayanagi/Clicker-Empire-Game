import { UserType } from 'src/const/UserType'

const User = () => {
	const defaultUser: (name: string) => UserType = (name: UserType['name']) => {
		return {
			name: name,
			age: 20,
			day: 1,
			clickCount: 0,
			money: 5000,
			purchase: [{}],
		}
	}
	return { defaultUser }
}

export default User
