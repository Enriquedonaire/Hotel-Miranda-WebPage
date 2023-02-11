
let initialScroll = window.scrollY;

window.addEventListener("scroll", function () {
  let newScroll = window.scrollY;
  let width = window.innerWidth;

  if (width > 1000 && initialScroll >= newScroll) {
    document.getElementById("header").style.top = "10px";
  } else if (width > 1000 && initialScroll <= newScroll) {
    document.getElementById("header").style.top = "-120px";
  }

  if (width < 1000 && initialScroll >= newScroll) {
    document.getElementById("header").style.top = "0px";
  } else if (width < 1000 && initialScroll <= newScroll) {
    document.getElementById("header").style.top = "-120px";
  }

  initialScroll = newScroll;
});


const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const swiperFeatures = new Swiper(".swiperFeatures", {
  effect: "cube",
  direction: "horizontal",
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiperFeatures-pagination",
    type: "bullets",
  },
});

const swiperMenu = new Swiper(".swiperMenu", {
  effect:"coverflow",
  direction: "horizontal",
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
  },
  navigation: {
    nextEl: ".swiperMenu-button-next",
    prevEl: ".swiperMenu-button-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
const swiperMenuImages = new Swiper(".swiperMenuImages", {
  effect:"cube",
  direction: "horizontal",
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiperMenuImages-pagination",
    type: "bullets",
  },
});
const swiperRoomsList = new Swiper(".swiperRoomsList", {

  direction: "horizontal",
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  pagination: {
    el: ".swiperRoomsList-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
