const SaveAndResetButtonsContainer = () => {
	const create = () => {
		let container = document.createElement('div')
		container.classList.add('save-and-reset-btns-container', 'd-flex', 'justify-content-end')

		container.innerHTML = `
        <div class="save-and-reset-btns save-and-field-bnts-field d-flex justify-content-end align-items-end">
            <div class="save-btn setting-btns d-flex justify-content-end">
                <button class="full-size btn btn-outline-light save-btn">
                <i class="fas fa-save btn-icon-size"></i>
                <p>Save</p>
                </button>
                </div>
                <div class="refresh-bth setting-btns d-flex justify-content-end">
                    <button class="full-size btn btn-outline-light reset-btn">
                        <i class="fas fa-redo btn-icon-size"></i>
                        <p>Reset</p>
                    </button>
                </div>
            <div>`

		return container
	}

	return { create }
}

export default SaveAndResetButtonsContainer
