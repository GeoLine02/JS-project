function burgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const u_list = document.querySelector(".u_list");
  hamburger.classList.toggle("active");
  u_list.classList.toggle("active");
}

let indexOfSlide = 1;
function moveSlides(number) {
  slidesShower((indexOfSlide += number));
}
function currentSlide(number) {
  slidesShower((indexOfSlide = number));
}
function slidesShower(number) {
  let i;
  let slides = document.getElementsByClassName("sliderPicture");
  let dots = document.getElementsByClassName("dot");

  if (number > slides.length) {
    indexOfSlide = 1;
  }
  if (number < 1) {
    indexOfSlide = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    slides[indexOfSlide - 1].style.display = "block";
  }
}
slidesShower(1);

function logOut() {
  sessionStorage.removeItem("sessionToken");
  history.replaceState(null, "", "index.html");
  window.location.href = "index.html";
}
