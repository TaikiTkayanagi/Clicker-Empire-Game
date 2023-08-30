import { UserType } from 'src/const/UserType'

const ClickContainer = () => {
	const create = (clickCount: UserType['clickCount'], purchase: UserType['purchase']) => {
		const div = document.createElement('div')
		let burgerMoneyPerOneClick = 25
		const flipMachine = purchase.find((value) => value.name === 'Flip machine')
		if (flipMachine && flipMachine.count) {
			burgerMoneyPerOneClick *= flipMachine.count
		}

		div.classList.add(
			'click-container',
			'd-flex',
			'justify-content-center',
			'align-items-center',
		)
		div.innerHTML = `
        <div class="click-field bg-darkviolet">
        	<div class="burgers-info-container d-flex justify-content-center align-items-center">
            	<div class="burgers-info-field bg-darkblue d-flex flex-wrap">
            		<div class="col-12 d-flex justify-content-center height-half">
                		<h4 class="text-light">${clickCount} Burgers</h4>
            		</div>
            	<div class="col-12 d-flex justify-content-center align-items-end height-half">
                	<h5 class="text-light">one click ${burgerMoneyPerOneClick}</h5>
            	</div>
            </div>
        </div>
        <div class="money-effect-container d-flex justify-content-center">
        	<div class="money-effect-field d-flex justify-content-end align-items-end">
            	<i class="fas fa-money-bill-alt money"></i>
            </div>
        </div>
        <div class="burgers-btn-container">
            <div class="burgers-btn-field d-flex justify-content-center">
            	<img src="https://cdn.pixabay.com/photo/2014/04/02/17/00/burger-307648_960_720.png" height="70%"
                width="50%" class="py-2 hover img-fuid" id="burger" onclick="document.getElementsByTagName('body')[0].dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}))">
            </div>
        </div>
    </div>`
		return div
	}
	return { create }
}

export default ClickContainer
