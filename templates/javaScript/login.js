/**
 * 
 * 
 * @param {*} formElement 
 * @param {*} type 
 * @param {*} message 
 */
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message_success", "form_message_error");
    messageElement.classList.add(`form_message_${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form_input_error");
    inputElement.parentElement.querySelector(".form_input_error_message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form_input_error");
    inputElement.parentElement.querySelector(".form_input_error_message").textContent = "";
}

/**
 * 
 */
document.addEventListener("DOMContentLoaded", () => {  // The DOMContentLoaded event is dispatched when the initial HTML document is fully loaded and parsed.
    const loginForm = document.querySelector("#login");  // Constant variable "loginForm" is initialized
    const createAccountForm = document.querySelector("#create_account");  // Constant variable "createAccountForm" is initialized

    /**
     * Clicking link_create_account takes you to the registration page.
     */
    document.querySelector("#link_create_account").addEventListener("click",  e => {
        e.preventDefault();
        loginForm.classList.add("form_hidden"); // login page is hidden.
        createAccountForm.classList.remove("form_hidden");  // Registration page becomes visible
    });

    /**
     * Clicking link_login takes you to the login page.
     */
    document.querySelector("#link_login").addEventListener("click", e => {
        e.preventDefault();  // Javascript Event preventDefault does the job of calling return false; in the DOM to override the browser's original action on an HTML element.
        loginForm.classList.remove("form_hidden");  // Login page becoms visible.
        createAccountForm.classList.add("form_hidden");  // Registration page is hidden.
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            // It is checked whether the username has at least a length of 10 characters.
            if (e.target.id === "signup_username" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
}); 