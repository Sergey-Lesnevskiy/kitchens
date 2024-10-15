const BTN__MENU = document.querySelector(".header__button-menu");
const MENU = document.querySelector(".menu");
const BODY = document.querySelector("body");
const header__search__content = document.querySelector(".header__main-search-content");
const groceriesMenu = document.querySelector(".menu__section");

//menu

// добавить и убрать слушатель
// mouseover
// mouseout


BTN__MENU?.addEventListener("click", (e) => {
  if (e.target.closest(".header__button-menu")) {
    toggleBurgerMenu();
    document.querySelector(".container__menu")?.addEventListener("click", (e) => {
      if (e.target.closest(".container-text")) {
        e.target.parentNode.classList.toggle("hide");
      }
    })
  }
})

function toggleBurgerMenu() {
  MENU.classList.toggle("active");
  BTN__MENU.classList.toggle("active");
  header__search__content.classList.toggle("active");
  BODY.classList.toggle("lock");
  if (MENU.classList.contains('active')) {
    disableScroll();
  } else {
    enableScroll();
  }
}

let paddingOffset = window.innerWidth - document.body.offsetWidth;

let disableScroll = function () {
  document.body.style.paddingRight = paddingOffset + "px";
  MENU.style.right = 28 + paddingOffset + "px";
};

let enableScroll = function () {
  document.body.style.paddingRight = "0px";
  MENU.style.right = 28 + "px";
};

//menu

// popup
const OPEN_POPUP = document.querySelector('#header__button-consultation');
const popup = document.querySelector('.popup__wrapper');
const SEND__BTN = document.querySelector('.salons__button');
const SEND__TEXT = document.querySelector('.footer__contacts-text');
const cross_popup = document.querySelector('.popup__cross');
const popup__button = document.querySelector('.popup__button');
const personal__content = document.querySelector('.popup__content-personal-data');
const confirmation__content = document.querySelector('.popup__content-confirmation');

OPEN_POPUP?.addEventListener('click', (e) => {
  personal__content.classList.add("active");
  confirmation__content.classList.remove('active');
  e.preventDefault();
  togglePopup();
})
SEND__TEXT?.addEventListener('click', (e) => {
  personal__content.classList.add("active");
  confirmation__content.classList.remove('active');
  e.preventDefault();
  togglePopup();
})
SEND__BTN?.addEventListener('click', (e) => {
  personal__content.classList.add("active");
  confirmation__content.classList.remove('active');
  e.preventDefault();
  togglePopup();
  openConfirmPopup();
})
cross_popup.addEventListener('click', () => {
  togglePopup();
})

popup__button.addEventListener('click', (e) => {
  e.preventDefault();
  openConfirmPopup();
})

function togglePopup() {

  popup.classList.toggle('active');
  BODY.classList.toggle("lock");;
}
function openConfirmPopup() {
  confirmation__content.classList.toggle('active');
  personal__content.classList.toggle("active");
}
// popup__button
// popup

// ratings
const ratings = document.querySelectorAll('.rating')

if (ratings.length > 0) {
  initRatings();
}
function initRatings() {
  let ratingActive, ratingValue;
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating)
  }
  function initRating(rating) {
    initRatingVars(rating);
    setRatingWidth();
  }
  function initRatingVars(rating) {
    console.log(rating);
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = document.querySelector('.rating__value');
  }
  function setRatingWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
  console.log(ratingActiveWidth);
    ratingActive.style.width = `${ratingActiveWidth}%`;
    console.log(ratingActiveWidth);
  }
}
// ratings