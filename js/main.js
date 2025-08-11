const Menutoggle = document.getElementById("toggle")
const Menu = document.getElementById("menu")
const Close = document.getElementById("close")
const news = document.getElementById("news")
const Header = document.getElementById("header")

window.addEventListener("scroll", () => {

  if (scrollY > 100) {
    Header.classList.add("shrink")
  } else {
    Header.classList.remove("shrink")
  }



})

window.addEventListener("scroll", () => {
  Menu.classList.remove("menu")
  Menu.classList.add("menu_2")

})

Menutoggle.addEventListener("click", () => {
  Menu.classList.add("menu")
})
Close.addEventListener("click", () => {
  Menu.classList.remove("menu")
  Menu.classList.add("menu_2")
})


$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoWidth: true,
  autoplayTimeout: 2000,
});


