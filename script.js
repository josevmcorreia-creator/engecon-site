const header = document.getElementById("header");

const menu = document.getElementById("menu");

const mobile = document.getElementById("mobileNav");


window.addEventListener("scroll", () => {

  header.classList.toggle(
    "scrolled",
    scrollY > 25
  );

});


menu.addEventListener("click", () => {

  mobile.classList.toggle("open");

});


mobile.querySelectorAll("a").forEach((a) => {

  a.addEventListener("click", () => {

    mobile.classList.remove("open");

  });

});


document.getElementById("year").textContent =
  new Date().getFullYear();