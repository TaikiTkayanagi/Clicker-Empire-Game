export type InvestItem = {
	name: string
	img: string
	price: number
	max?: number
	effect: number
	action: 'click' | 'sec'
}

export const InvestItems: InvestItem[] = [
	{
		name: 'Flip machine',
		img: 'https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png',
		price: 1500,
		max: 500,
		effect: 25,
		action: 'click',
	},
	{
		name: 'EFT Stock',
		img: 'https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png',
		price: 300000,
		max: undefined,
		effect: 0.1,
		action: 'sec',
	},
	{
		name: 'EFT Bonds',
		img: 'https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png',
		price: 300000,
		max: undefined,
		effect: 0.07,
		action: 'sec',
	},
	{
		name: 'LEmonade Stand',
		img: 'https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png',
		price: 30000,
		max: 1000,
		effect: 30,
		action: 'sec',
	},
	{
		name: 'Ice Cream Truck',
		img: 'https://cdn.pixabay.com/photo/2020/01/30/12/37/ice-cream-4805333_960_720.png',
		price: 100000,
		max: 500,
		effect: 120,
		action: 'sec',
	},
	{
		name: 'House',
		img: 'https://cdn.pixabay.com/photo/2016/03/31/18/42/home-1294564_960_720.png',
		price: 20000000,
		max: 100,
		effect: 3200,
		action: 'sec',
	},
	{
		name: 'Town House',
		img: 'https://cdn.pixabay.com/photo/2019/06/15/22/30/modern-house-4276598_960_720.png',
		price: 40000000,
		max: 20,
		effect: 6400,
		action: 'sec',
	},
	{
		name: 'Mansion',
		img: 'https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_960_720.png',
		price: 250000000,
		max: 10,
		effect: 500000,
		action: 'sec',
	},
	{
		name: 'Industrial Space',
		img: 'https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png',
		price: 1000000000,
		max: 20,
		effect: 2200000,
		action: 'sec',
	},
	{
		name: 'Hotel Skyscraper',
		img: 'https://cdn.pixabay.com/photo/2012/05/07/18/03/skyscrapers-48853_960_720.png',
		price: 10000000000,
		max: 5,
		effect: 25000000,
		action: 'sec',
	},
	{
		name: 'Bullet-Speed Sky',
		img: 'https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png',
		price: 100000000000,
		max: 1,
		effect: 30000000000,
		action: 'sec',
	},
]
