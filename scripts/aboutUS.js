function burgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const u_list = document.querySelector(".u_list");
  hamburger.classList.toggle("active");
  u_list.classList.toggle("active");
}
function siteFoundrs() {
  const founders = document.querySelector(".founderImgs");
  founders.classList.toggle("foundersActive");
}

function logOut() {
  sessionStorage.removeItem("sessionToken");
  history.replaceState(null, "", "index.html");
  window.location.href = "index.html";
}
