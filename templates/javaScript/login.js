let user1 = {
    'username': "Simon",
    'password': 5555
};

let user2 = {
    'username': "Hoernchen",
    'password': 6789
};

let user3 = {
    'username': "DonSingh",
    'password': 1234
};

function checkUser() {
    let username = username_login.value
    let password = password_login.value;

    if ((username == user1.username && password == user1.password) ||
        (username == user2.username && password == user2.password) ||
        (username == user3.username && password == user3.password)) {
        window.location.href = "/templates/html/board.html";
    } else {
        alert('Username or password is incorrect');
    }
}


/* 
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
document.addEventListener("DOMContentLoaded", () => { // The DOMContentLoaded event is dispatched when the initial HTML document is fully loaded and parsed.
    const loginForm = document.querySelector("#login"); // Constant variable "loginForm" is initialized
    const createAccountForm = document.querySelector("#create_account"); // Constant variable "createAccountForm" is initialized

    /**
     * Clicking link_create_account takes you to the registration page.
     */
    document.querySelector("#link_create_account").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form_hidden"); // login page is hidden.
        createAccountForm.classList.remove("form_hidden"); // Registration page becomes visible
    });

    //Clicking link_login takes you to the login page.
    document.querySelector("#link_login").addEventListener("click", e => {
        e.preventDefault(); // Javascript Event preventDefault does the job of calling return false; in the DOM to override the browser's original action on an HTML element.
        loginForm.classList.remove("form_hidden"); // Login page becoms visible.
        createAccountForm.classList.add("form_hidden"); // Registration page is hidden.
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

// Section to save the users.

async function loadUser() {
    await downloadFromServer();
    user = JSON.parse(backend.getItem('user')) || [];

}


async function addUser() {
    let username = document.getElementById('signup_username');
    let email = document.getElementById('signup_email');
    let password = document.getElementById('signup_password');
    let confirm_password = document.getElementById('signup_confirm_password');

    if (password.value == confirm_password.value) {
        let newUser = {
            'id': new Date().getTime(),
            'username': username.value,
            'e-mail_address': email.value,
            'password': password.value,
        };

        username.push(newUser);
        clearuserInput();
        await saveUser();
    } else {
        alert('"Password" and "Confirm Password" does not match.');
    }

}

function clearuserInput() {
    document.getElementById('signup_username').value = ``;
    document.getElementById('signup_email').value = ``;
    document.getElementById('signup_password').value = ``;
    document.getElementById('signup_confirm_password').value = ``;
}

async function saveUser() {
    await backend.setItem('user', JSON.stringify(user));
};