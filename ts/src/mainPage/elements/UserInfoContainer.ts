import { UserType } from 'src/const/UserType'

const UserInfoContainer = () => {
	const create = (user: UserType) => {
		const container = document.createElement('div')
		container.classList.add(
			'user-info-container',
			'd-flex',
			'justify-content-center',
			'align-items-center',
		)
		container.innerHTML = `
		<div class="user-info-field bg-darkviolet d-flex flex-wrap">
            <div class="forth-container col-6 d-flex justify-content-center align-items-center">
            	<div class="forth-field bg-darkblue d-flex justify-content-center">
                	<p class="text-light">${user.name}</h5>
                </div>
            </div>
            <div class="forth-container col-6 d-flex justify-content-center align-items-center">
            	<div class="forth-field bg-darkblue d-flex justify-content-center">
            		<p class="text-light">${user.age}</p>
            	</div>
            </div>
            <div class="forth-container col-6 d-flex justify-content-center align-items-center">
            	<div class="forth-field bg-darkblue d-flex justify-content-center">
                	<p class="text-light">${user.day} days</p>
            	</div>
            </div>
            <div class="forth-container col-6 d-flex justify-content-center align-items-center">
            	<div class="forth-field bg-darkblue d-flex justify-content-center">
                	<p class="text-light">¥${user.money}</p>
            	</div>
            </div>
        </div>
		`
		return container
	}
	return { create }
}

export default UserInfoContainer
