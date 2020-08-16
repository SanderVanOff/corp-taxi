$(".slider").slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  fade: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  cssEase: "ease-in-out",
  speed: 700,
  adaptiveHeight: true
});

// Плавный скролл
$(".down").click(function () {
  var _href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
  return false;
});


// burger

const burger = document.querySelector(".mobile-burger");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".nav-header__logo");

burger.addEventListener("click", (event) => {
  if (!burger.closest(".open")) {
    burger.classList.add("open");
    menu.classList.add("open");
    logo.style.display = "none";
  } else {
    burger.classList.remove("open");
    menu.classList.remove("open");
    logo.style.display = "";
  }
});

$(".parallax-window").parallax({
  bleed: 1,
  imageSrc: "../img/form-bg.webp" || "../img/form-bg.jpg"
});

AOS.init();

const image = document.querySelector(".support__img-1");
new simpleParallax(image, {
  orientation: "left",
  scale: 1.2
});

const image2 = document.querySelector(".support__img-2");
new simpleParallax(image2, {
  orientation: "right",
  scale: 1.2,
  delay: 2
});

const image3 = document.querySelector(".support__img-3");
new simpleParallax(image3, {
  orientation: "left",
  scale: 1.3
});

const modalForm = document.querySelector(".modal-form");
const modalClose = document.querySelector(".modal-close");
const sliderItemBtn = document.querySelectorAll(".slider-item__btn");
const sliderItem = document.querySelectorAll(".slider__item");
const header = document.querySelector(".header");
const arrowDown = document.querySelector(".down");
const modalFormBlock = document.querySelector(".modal-form-block");

sliderItemBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    modalForm.style.display = "block";
    modalFormBlock.style.transform = "translateX(0)";
    header.style.display = "none";
    arrowDown.style.display = "none";
    document.body.style.overflow = "hidden";
    sliderItem.forEach((item) => {
      item.style.filter = "blur(10px)";
    });
  });
});
modalForm.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.closest(".modal-form-block") || target.closest(".modal-close")) {
    modalForm.style.display = "none";
    modalFormBlock.style.transform = "translateX(-500px)";
    header.style.display = "";
    arrowDown.style.display = "";
    document.body.style.overflow = "auto";
    sliderItem.forEach((item) => {
      item.style.filter = "";
    });
  }
});

// Изменение аттрибутов для показа блока с анимацией
window.addEventListener("resize", () => {
  const aboutBlock = document.querySelectorAll(".about__block");
  const clientWidth = document.documentElement.clientWidth;
  if (clientWidth < 375) {
    aboutBlock.forEach((item) => {
      item.dataset.aosDelay = 200;
      console.log(item.dataset.aosDelay);
    });
  }
});
