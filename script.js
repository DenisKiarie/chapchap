const form = document.getElementById("form");
const username = document.getElementById("username");
const country = document.getElementById("country");
const contact = document.getElementById("contact");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const countryValue = country.value.trim();
    const contactValue = contact.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === "" ) {
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
    }

    if (countryValue === "" ) {
        setErrorFor(country, "country cannot be blank");
    } else {
        setSuccessFor(country);
    }

    if (contactValue === "" ) {
        setErrorFor(contact, "contact cannot be blank");
    } else {
        setSuccessFor(contact);
    }

    if (emailValue === "" ) {
        setErrorFor(email, "email cannot be blank");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "" ) {
        setErrorFor(password, "password cannot be blank");
    } else {
        setSuccessFor(password);
    }

    if (password2Value === "" ) {
        setErrorFor(password2, "password cannot be blank");
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, "Passwords do not match");
    }
     else {
        setSuccessFor(password2);
    }


}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = "form-control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"

}