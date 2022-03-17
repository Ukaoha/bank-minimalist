"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// cookies
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `We use cookies to improve functionality and analytics. <button class = "btn 
  btn--close-cookie"> Got it! </button>`;
header.prepend(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });
message.style.backgroundColor = "#37383d";
message.style.width = "105%";
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

/*changing root element
document.documentElement.style.setProperty('--color-primary' , 'orange') */
// selecting and setting Attributes
const logo = document.querySelector(".nav-logo");
console.log(logo.alt);
logo.setAttribute("company", "Bankist");
/*classes
logo.classList.add('');
logo.classList.remove();
logo.classList.toggle('')
logo.classList.contains()
*/
// Scroll bar
const btnScrollto = document.querySelector(".btn--scroll-to");
const features = document.querySelector("#features");

btnScrollto.addEventListener("click", function (e) {
  const s1coords = features.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  features.scrollIntoView({ behavior: "smooth" });
});

// page navagation
/*event propagation
document.querySelector('.nav__link').forEach(function(el) {
  el.addEventListener('click' , function(e){
    e.preventDefault()
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  })
})
*/
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
// menu fade animation
const handleOver = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// passing argument into handler 
nav.addEventListener("mouseover", handleOver.bind(0.5));

nav.addEventListener("mouseout", handleOver.bind(1));

/* Event propagation : Bubbling and capturing
const randomInt = (min , max) => 
Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav_links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('container', e.target);
  e.stopPropagation();
});
document.querySelector('.nav_link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('link' ,e.target);
});
document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('nav' ,e.target);
});
*/
