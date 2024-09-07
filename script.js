//!COME BACK\\

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("opaque");
  } else {
    navbar.classList.remove("opaque");
  }
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar-links");
  if (window.scrollY > 0) {
    navbar.classList.add("opaque");
  } else {
    navbar.classList.remove("opaque");
  }
});

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back :((";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

//!CAROUSEL\\

let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");
const totalSlides = slides.length;
const wrapper = document.querySelector(".carousel-wrapper");

function showSlides() {
  slideIndex = (slideIndex + 1) % totalSlides;

  wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;

  setTimeout(showSlides, 10000);
}

window.onload = function () {
  showSlides();
};
