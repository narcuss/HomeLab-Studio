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

let carouselIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  let autoSlideInterval;

  function showSlide(index) {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    carouselWrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  function moveSlide(step) {
    carouselIndex = (carouselIndex + step + totalSlides) % totalSlides;
    showSlide(carouselIndex);
    resetAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
      moveSlide(1);
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide(); 
  }
  
  window.onload = function() {
    setTimeout(function() {
      startAutoSlide();
    }, 5000);
  };
