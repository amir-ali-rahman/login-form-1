
//Author: Amir Ali Rahman
//Website: www.codinghub360.com
//GitHub: https://github.com/amir-ali-rahman
//Instagram: https://www.instagram.com/amir_ali_rahman

const form = document.getElementById("form");
const email = document.getElementById("usr_email");
const password = document.getElementById("usr_pass");

form.addEventListener("submit", e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //Get the value the form field.
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  //###################################
  if (emailValue === "") {
    setErrorInput(email, "Email cannot be blank.");
  } else {
    validateEmail(emailValue) && setSuccessInput(email);
  }

  //###################################
  if (passwordValue === "") {
    setErrorInput(password, "Password connot be blank.");
  } else {
    setSuccessInput(password) && validatePassword(passwordValue);
  }

}

function setErrorInput(input, errorMessage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("span");

  small.innerText = errorMessage;
  formControl.className = "error";
}

function setSuccessInput(input) {
  const formControl = input.parentElement;
  formControl.className = "success";
}

function validateEmail(email) {
  let regular_expressions = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regular_expressions.test(String(email).toLocaleLowerCase());
}

function validatePassword(password) {
  let regular_expressions = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return regular_expressions.match(regular_expressions);
}
