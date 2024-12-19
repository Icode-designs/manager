//VARIABLES
const navBtn = document.querySelector(".nav__btn");
const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close");
const navMenu = document.querySelector(".nav__menu");
const hero = document.querySelector(".hero");
const slide = document.querySelector(".testimonial__container");
const btn = document.querySelectorAll(".test-btn");
const testimonial = document.querySelectorAll(".testimonial");
const body = document.body;

let menuOpen = false;

//NAV BTN EVENT LISTENNER
btnClose.addEventListener("click", toggleMenuOpenClose);
btnOpen.addEventListener("click", toggleMenuOpen);

//TOGGLE MENU OPEN FUNCTION

function toggleMenuOpen() {
  btnOpen.classList.add("inactive");
  btnClose.classList.remove("inactive");
  navMenu.classList.remove("inactive");
  hero.classList.add("darken");
  body.classList.add("no-scroll");

  menuOpen = !menuOpen;
}

//TOGGLE MENU OPEN FUNCTION
function toggleMenuOpenClose() {
  btnOpen.classList.remove("inactive");
  btnClose.classList.add("inactive");
  navMenu.classList.add("inactive");
  hero.classList.remove("darken");
  body.classList.remove("no-scroll");

  menuOpen = !menuOpen;
}

//TESTIMONIAL SLIDER
btn[0].addEventListener("click", displayTestimonial_1);
btn[1].addEventListener("click", displayTestimonial_2);
btn[2].addEventListener("click", displayTestimonial_3);
btn[3].addEventListener("click", displayTestimonial_4);

function displayTestimonial_1() {
  btn[0].classList.add("active");
  btn[1].classList.remove("active");
  btn[2].classList.remove("active");
  btn[3].classList.remove("active");

  testimonial[0].classList.remove("inactive");
  testimonial[1].classList.add("inactive");
  testimonial[2].classList.add("inactive");
  testimonial[3].classList.add("inactive");
}

function displayTestimonial_2() {
  btn[0].classList.remove("active");
  btn[1].classList.add("active");
  btn[2].classList.remove("active");
  btn[3].classList.remove("active");

  testimonial[0].classList.add("inactive");
  testimonial[1].classList.remove("inactive");
  testimonial[2].classList.add("inactive");
  testimonial[3].classList.add("inactive");
}

function displayTestimonial_3() {
  btn[0].classList.remove("active");
  btn[1].classList.remove("active");
  btn[2].classList.add("active");
  btn[3].classList.remove("active");

  testimonial[0].classList.add("inactive");
  testimonial[1].classList.add("inactive");
  testimonial[2].classList.remove("inactive");
  testimonial[3].classList.add("inactive");
}

function displayTestimonial_4() {
  btn[0].classList.remove("active");
  btn[1].classList.remove("active");
  btn[2].classList.remove("active");
  btn[3].classList.add("active");

  testimonial[0].classList.add("inactive");
  testimonial[1].classList.add("inactive");
  testimonial[2].classList.add("inactive");
  testimonial[3].classList.remove("inactive");
}
