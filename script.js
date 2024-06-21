window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
      navbar.classList.add('opaque');
  } else {
      navbar.classList.remove('opaque');
  }
});

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar-links');
  if (window.scrollY > 0) {
      navbar.classList.add('opaque');
  } else {
      navbar.classList.remove('opaque');
  }
});


let docTitle = document.title;
window.addEventListener('blur', () => {
  document.title= "Come back :((";
})
window.addEventListener("focus", () => {
  document.title = docTitle;
})