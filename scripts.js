
let inputEmail = document.getElementById("email");
let icon_error = document.getElementById("error-icon");
function validarEmail(){

   console.log("hola");
    let response = document.getElementById("response");
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(inputEmail.value)) {
        response.innerText = "";
        response.classList.remove("active");
        icon_error.classList.remove("active");
        inputEmail.classList.remove("error");
    } else {
        response.innerText = "please provide a valid email";
        icon_error.classList.add("active");
        inputEmail.classList.add("error");
        response.classList.add("active");
    }
}

inputEmail.addEventListener("keyup",validarEmail);