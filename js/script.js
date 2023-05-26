const mobMenuAllBtnEl = document.querySelectorAll(".mob-menu-btn");

//Menu links functionality
document.querySelectorAll("nav").forEach(function (el) {
  el.addEventListener("click", function (event) {
    //Smooth scrolling
    event.preventDefault();
    if (event.target.classList.contains("menu-link")) {
      const id = event.target.getAttribute("href");
      if (id === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (id.startsWith("#")) {
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      }
    }

    //Close mob menu after click on a link
    if (document.querySelector("html").classList.contains("open-mob-menu")) {
      document.querySelector("html").classList.toggle("open-mob-menu");
    }
  });
});

//Open and close mobile menu by button
mobMenuAllBtnEl.forEach(function (el) {
  el.addEventListener("click", function () {
    document.querySelector("html").classList.toggle("open-mob-menu");
  });
});
