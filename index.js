const BODY = document.querySelector("body");

const BTN__MENU = document.querySelector(".header__button-menu");

const popup = document.querySelector('.popup__wrapper');
const personal__content = document.querySelector('.popup__content-personal-data');
const confirmation__content = document.querySelector('.popup__content-confirmation');
const catalog__filter = document.querySelector('.catalog__filter');
const catalog__filter__text = document.querySelector('.filter__container-text');
const MENU = document.querySelector(".menu");
const header__search__content = document.querySelector(".header__main-search-content");
const viewRadiobuttonsListEl = document.querySelectorAll("input[name='view']");
const blogCardsEl = document.querySelector(".blog__cards");

//menu

// mouseover
// mouseout
BODY.addEventListener("click", handlerActive)


if(viewRadiobuttonsListEl.length> 0){
viewRadiobuttonsListEl.forEach(viewRadio => {
viewRadio.addEventListener("change", radioHandler);
})
}

function handlerActive(e) {
  //menu
  if (e.target.closest(".header__button-menu")) {
    toggleBurgerMenu();
  }
  if (e.target.closest(".container-text")) {
    e.target.parentNode.classList.toggle("hide");
  }

  //menu
  //popup
  if (e.target.closest("#header__button-consultation")) {
    personal__content.classList.add("active");
    confirmation__content.classList.remove('active');
    e.preventDefault();
    togglePopup();
  }
  if (e.target.closest(".footer__contacts-text")) {
    personal__content.classList.add("active");
    confirmation__content.classList.remove('active');
    e.preventDefault();
    togglePopup();
  }
  if (e.target.closest(".salons__button")) {
    personal__content.classList.add("active");
    confirmation__content.classList.remove('active');
    e.preventDefault();
    togglePopup();
    openConfirmPopup();
  }
  if (e.target.closest(".popup__cross")) {
    togglePopup();
  }
  if (e.target.closest(".popup__button")) {
    e.preventDefault();
    openConfirmPopup();
  }
  //popup
  //questions
  if (e.target.closest(".question__item")) {
    toggleQuestion(e);
  }

  //questions
  //catalog
  if (e.target.closest(".catalog__action-btn")) {
    toggleCatalog();
  }
  if (e.target.closest(".filter__img-arrow")) {
    toggleCatalog();
  }

  if (e.target.closest(".filter__section")) {
    console.log(e.target.childNodes[0]);
    e.target.closest(".filter__container-text").classList.toggle("hide");
  }

  //catalog
}

function radioHandler (event){
  if (event.target.value === "list") {
    blogCardsEl.classList.add("blog__cards--list");
  } else {
    blogCardsEl.classList.remove("blog__cards--list");
  }
};
function togglePopup() {
  popup.classList.toggle('active');
  BODY.classList.toggle("lock");;
}
function openConfirmPopup() {
  confirmation__content.classList.toggle('active');
  personal__content.classList.toggle("active");
}

function toggleCatalog() {
  catalog__filter.classList.toggle("active")
}
function toggleQuestion(e) {
  e.target.closest(".question__item").classList.toggle("active");
}

function toggleBurgerMenu() {
  MENU?.classList.toggle("active");
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
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
}
// ratings

// remove listener
const pageHideListener = () => {
  BODY.removeEventListener("click", handlerActive);

  if(viewRadiobuttonsListEl.length> 0){
    viewRadiobuttonsListEl.forEach(viewRadio => {
      viewRadio.removeEventListener("change", radioHandler);
    })
  }
};
window.addEventListener("pagehide", pageHideListener);

// remove listener

