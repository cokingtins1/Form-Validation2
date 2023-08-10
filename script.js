const form = document.querySelector("#form")

const usernameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")
const passwordConfirm = document.querySelector("#password-confirmation")
const termsInput = document.querySelector("#terms")
const errorsContainer = document.querySelector(".errors")
const errorList = document.querySelector(".errors-list")

form.addEventListener("submit", (e) => {
	//    TODO: Create an array to store all error messages and clear any old error messages
	let errorMessages = []
	clearErrors()
	//    TODO: Define the following validation checks with appropriate error messages
	//      1. Ensure the username is at least 6 characters long
	if (usernameInput.value.length < 6) {
		errorMessages.push("username must be at least 6 characters")
	}
	//      2. Ensure the password is at least 10 characters long
	if (passwordInput.value.length < 10) {
		errorMessages.push("password must be more than 10 characters")
	}
	//      3. Ensure the password and confirmation password match
	if (passwordInput.value != passwordConfirm.value) {
		errorMessages.push("passwords must match")
	}
	//      4. Ensure the terms checkbox is checked
	if (!termsInput.checked) {
		errorMessages.push("you much agree to the terms")
	}
	//    TODO: If there are any errors then prevent the form from submitting and show the error messages
	if (errorMessages.length > 0) {
		showErrors(errorMessages)
		e.preventDefault()
	}
})

// TODO: Define this function
function clearErrors() {
	errorList.innerHTML = ""
	errorsContainer.classList.remove("show")
}

// TODO: Define this function
function showErrors(errorMessages) {
	// Add each error to the error-list element
	clearErrors()
	errorsContainer.classList.add("show")

	errorMessages.forEach((error) => {
		const errorElement = document.createElement("li")
		errorElement.innerText = error
		errorList.append(errorElement)
	})
}
