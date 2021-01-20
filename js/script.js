window.addEventListener("DOMContentLoaded", function () {
  // Burger
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("#burger").classList.toggle("burger-active");

    document
      .querySelector("#burger-logo")
      .classList.toggle("burger-logo-active");

    document.querySelector("#nav").classList.toggle("is-active");

    document.querySelectorAll(".nav__item").forEach(function (el) {
      el.classList.add("nav-item-active");
    });

    document.querySelectorAll(".nav__link").forEach(function (el) {
      el.classList.add("nav-link-active");
    });
  });

  // Accordion icon

  document.querySelectorAll(".acc-item").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.target.querySelector(".faq__item-icon").classList.toggle("icon-active");
    });
  });

  // Tabs
  document.querySelectorAll(".work__list-link").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      document
        .querySelectorAll(".work__content")
        .forEach(function (workContent) {
          workContent.classList.remove("work__content-active");
        });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("work__content-active");
    });
  });
});

// Swiper

var mySwiper = new Swiper(".swiper-container", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Accordion

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    active: false,
    heightStyle: "content",
    autoHeight: false,
  });
});
