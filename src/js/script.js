const nameInput = document.querySelector('#name')
const surnameInput = document.querySelector('#surname')
const emailInput = document.querySelector('#email')
const radioInputs = document.getElementsByClassName('form__input-radio')
const messageInput = document.querySelector('#message')
const rulesCheckbox = document.querySelector('#rules')
const submit = document.querySelector('.submit')
const nameError = document.querySelector('.name-error')
const surnameError = document.querySelector('.surname-error')
const emailError = document.querySelector('.email-error')
const queryError = document.querySelector('.query-error')
const messageError = document.querySelector('.message-error')
const checkError = document.querySelector('.check-error')
const allErrors = document.querySelectorAll('.error')
const form = document.querySelector('.form')

const handleMail = () => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	if (re.test(emailInput.value)) {
		emailError.style.visibility = 'hidden'
		emailInput.style.border = '1px solid #d3d3d3'
	} else {
		emailError.style.visibility = 'visible'
		emailInput.style.border = '1px solid red'
	}
}
const handleNames = () => {
	if (nameInput.value != '') {
		nameError.style.visibility = 'hidden'
		nameInput.style.border = '1px solid #d3d3d3'
	} else {
		nameError.style.visibility = 'visible'
		nameInput.style.border = '1px solid red'
	}
	if (surnameInput.value != '') {
		surnameError.style.visibility = 'hidden'
		surnameInput.style.border = '1px solid #d3d3d3'
	} else {
		surnameError.style.visibility = 'visible'
		surnameInput.style.border = '1px solid red'
	}
}
const handleRest = () => {
	if (radioInputs[0].checked || radioInputs[1].checked) {
		queryError.style.visibility = 'hidden'
	} else {
		queryError.style.visibility = 'visible'
	}
	if (rulesCheckbox.checked) {
		checkError.style.visibility = 'hidden'
	} else {
		checkError.style.visibility = 'visible'
	}
	if (messageInput.value != '') {
		messageError.style.visibility = 'hidden'
		messageInput.style.border = '1px solid #d3d3d3'
	} else {
		messageError.style.visibility = 'visible'
		messageInput.style.border = '1px solid red'
	}
}
const showPopup = () => {
    const popup = document.querySelector('.popup')
    popup.classList.add('show')
}
const handlePopup = () => {
	const allHidden = Array.from(allErrors).every(el => {
		return window.getComputedStyle(el).visibility === 'hidden'
	})

	if (allHidden) {
		showPopup()
	}
}
form.addEventListener('submit', e => {
	e.preventDefault()
	handleMail()
	handleNames()
	handleRest()
    handlePopup()
})
console.log(radioInputs)
