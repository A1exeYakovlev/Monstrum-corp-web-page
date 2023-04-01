const mobMenuAllBtnEl = document.querySelectorAll(".mob-menu-btn");

for (let i = 0; i < mobMenuAllBtnEl.length; i++) {
  mobMenuAllBtnEl[i].addEventListener("click", function () {
    document.querySelector("html").classList.toggle("open-mob-menu");
  });
}
