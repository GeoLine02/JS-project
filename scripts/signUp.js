function signUp() {
  // Declaring Elements
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let repeatPassword = document.getElementById("repeatPassword");
  let result = document.getElementById("result");
  let registerForm = document.querySelector("#form");

  let LnameValidation = document.getElementById("LnameValidation");
  let emailValidation = document.getElementById("emailValidation");
  let passwordValidation = document.getElementById("passwordValidation");
  // Regex Patterns
  const firstNameRegex = /^[A-Z]+[a-z]+$/;
  const lastNameRegex = /^[A-Z]+[a-z]+$/;
  const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:|\.[a-zA-Z]{2,6})+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let existingData = localStorage.getItem("registerData");
  let user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };
  // validation section
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  if (
    existingData &&
    firstNameRegex.test(firstName.value) &&
    lastNameRegex.test(lastName.value) &&
    emailRegex.test(email.value) &&
    passwordRegex.test(password.value) &&
    repeatPassword.value == password.value
  ) {
    let parsedData = JSON.parse(existingData);
    for (let user of parsedData) {
      if (user.email === email.value) {
        result.innerHTML = "Email already exists!";
        result.style.color = "red";
        return;
      }
    }
    parsedData.push(user);
    let updatedData = JSON.stringify(parsedData);
    localStorage.setItem("registerData", updatedData);
    result.innerHTML = "Registration Done succesfuly!";
    result.style.color = "green";
    window.location.href = "index.html";
  } else if (
    !existingData &&
    existingData === null &&
    firstNameRegex.test(firstName.value) &&
    lastNameRegex.test(lastName.value) &&
    emailRegex.test(email.value) &&
    passwordRegex.test(password.value) &&
    repeatPassword.value == password.value
  ) {
    localStorage.setItem("registerData", JSON.stringify([user]));
    existingData = localStorage.getItem("registerData");
    let parsedData = JSON.parse(existingData);
    for (let user of parsedData) {
      if (user.email === email.value) {
        result.innerHTML = "Registration done succesfuly!";
        result.style.color = "green";
        return;
      }
    }
    parsedData.push(user);
    let updatedData = JSON.stringify(parsedData);
    localStorage.setItem("registerData", updatedData);
    window.location.href = "index.html";
  } else {
    result.innerHTML = "Registration failed. Try again!";
    result.style.color = "red";
  }
}

function firstNameValidation() {
  let FnameValidation = document.getElementById("FnameValidation");
  let firstName = document.getElementById("firstName");
  const firstNameRegex = /^[A-Z]+[a-z]+$/;
  if (!firstNameRegex.test(firstName.value)) {
    firstName.style.borderColor = "red";
    FnameValidation.innerHTML = "Invalid first name";
    FnameValidation.style.color = "red";
  } else {
    firstName.style.borderColor = "green";
    FnameValidation.style.display = "none";
  }
}
function lastNameValidation() {
  let LnameValidation = document.getElementById("LnameValidation");
  let lastName = document.getElementById("lastName");
  const lastNameRegex = /^[A-Z]+[a-z]+$/;
  if (!lastNameRegex.test(lastName.value)) {
    lastName.style.borderColor = "red";
    LnameValidation.innerHTML = "Invalid last name";
    LnameValidation.style.color = "red";
  } else {
    lastName.style.borderColor = "green";
    LnameValidation.style.display = "none";
  }
}
function emailValidation() {
  let emailValidation = document.getElementById("emailValidation");
  const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:|\.[a-zA-Z]{2,6})+$/;
  let email = document.getElementById("email");
  if (!emailRegex.test(email.value)) {
    email.style.borderColor = "red";
    emailValidation.innerHTML = "invalid Email";
    emailValidation.style.color = "red";
  } else {
    email.style.borderColor = "green";
    emailValidation.style.display = "none";
  }
}
function passwordValidation() {
  let passwordValidation = document.getElementById("passwordValidation");
  let password = document.getElementById("password");
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password.value)) {
    password.style.borderColor = "red";
    passwordValidation.innerHTML = "Invalid Password";
    passwordValidation.style.color = "red";
  } else {
    password.style.borderColor = "green";
    passwordValidation.style.display = "none";
  }
}
function repeatPasswordValidation() {
  let password = document.getElementById("password");
  let repeatPassword = document.getElementById("repeatPassword");
  if (password.value === repeatPassword.value) {
    password.style.borderColor = "green";
    repeatPassword.style.borderColor = "green";
  } else {
    password.style.borderColor = "red";
    repeatPassword.style.borderColor = "red";
  }
}
