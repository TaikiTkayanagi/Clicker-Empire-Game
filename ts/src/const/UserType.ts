import { InvestItem } from './InvestItems'

export type UserType = {
	name: string
	age: number
	clickCount: number
	money: number
	day: number
	purchase: [
		{
			name?: InvestItem['name']
			count?: number
		},
	]
}
