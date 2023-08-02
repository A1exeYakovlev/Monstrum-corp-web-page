//Menu links functionality
const mobMenuAllBtnEl = document.querySelectorAll(".mob-menu-btn");

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

//Open and close contact-form by Contact button
const contactBtn = document.querySelector(".footer__talk-btn");
const contactForm = document.querySelector(".contact-form");
const footerSect = document.querySelector(".footer");

contactBtn.addEventListener("click", function () {
  if (contactForm.style.maxHeight) {
    contactForm.style.maxHeight = null;
    footerSect.classList.remove("rounded-corners--neg-margin");
  } else {
    contactForm.style.maxHeight = contactForm.scrollHeight + "px";
    footerSect.classList.add("rounded-corners--neg-margin");
  }
});

//Recalculating contact-form height in case of window resizing
const recalcContactForm = function () {
  if (contactForm.style.maxHeight) {
    contactForm.style.maxHeight = contactForm.scrollHeight + "px";
  }
};

window.addEventListener("resize", recalcContactForm);
