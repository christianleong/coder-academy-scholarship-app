const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let bottomHeight = 100;

  if (scrollY === 0) {
    nav.classList.remove("add-shadow");
  } else if (scrollY / bottomHeight <= 1) {
    nav.classList.add("add-shadow");
  }

});