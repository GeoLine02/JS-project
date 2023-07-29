function createToken(length) {
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result =
      result + characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function handleLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let LoginForm = document.querySelector("#form");
  let SavePasswordIsChecked = document.getElementById("savePassword").checked;

  LoginForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  let usersData = localStorage.getItem("registerData");
  usersData = JSON.parse(usersData);

  let userExists = false;
  let timeNow = new Date();
  timeNow.setTime(timeNow.getTime() + 10 * 24 * 60 * 60 * 1000);
  let atTime = timeNow.toUTCString();

  for (let user = 0; user < usersData.length; user++) {
    if (
      usersData[user].email === email &&
      usersData[user].password === password
    ) {
      let sessionToken = createToken(36);

      if (SavePasswordIsChecked) {
        document.cookie = `sessionToken=${sessionToken};expires=${atTime};path=/`;
      } else {
        sessionStorage.setItem("sessionToken", sessionToken);
      }

      usersData[user].sessionToken = sessionToken;
      userExists = true;
    }
  }
  if (userExists) {
    window.location.href = "main.html";
  } else {
    window.location.href = "index.html";
  }

  localStorage.setItem("registerData", JSON.stringify(usersData));

  let cookies = document.cookie;
  let splitedCookie = cookies.split("=");
  let cookieToken = splitedCookie[1];

  for (let user = 0; user < usersData.length; user++) {
    if (
      email === usersData[user].email &&
      cookieToken === usersData[user].sessionToken
    ) {
      window.location.href = "main.html";
    } else {
      window.location.href = "index.html";
    }
  }
}
