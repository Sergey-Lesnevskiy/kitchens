const BTN__MENU = document.querySelector(".header__button-menu");
const MENU = document.querySelector(".menu");
const BODY = document.querySelector(".body");

const menuRevert = document.querySelector(".menu__revert");
const mainMenu = document.querySelector(".menu__list");

const groceriesMenu = document.querySelector(".menu__section");




//menu

// добавить и убрать слушатель
// mouseover
// mouseout


BTN__MENU.addEventListener("click", (e) => {
  if (e.target.closest(".header__button-menu")) {
    toggleBurgerMenu();
    document.querySelector(".container__menu")?.addEventListener("click", (e) => {
      if (e.target.closest(".container-text")) {
        e.target.parentNode.classList.toggle("hide");
      }
    })
    document.querySelector(".menu__item-catalog")?.addEventListener("click", (e) => {
      menuRevert.classList.toggle("active");
      mainMenu.classList.toggle("active");
      groceriesMenu.classList.toggle("active");
    })
    document.querySelector(".menu__revert")?.addEventListener("click", (e) => {
      // if (e.target.closest(".container-text")) {
      //   e.target.parentNode.classList.toggle("hide");
      // }
      menuRevert.classList.toggle("active");
      mainMenu.classList.toggle("active");
      groceriesMenu.classList.toggle("active");
    })

  }
})
// BTN__MENU.addEventListener("mouseout", (e) => {
//   if (e.target.closest(".header__button-menu")) {
//     toggleBurgerMenu();
//     // document.querySelector(".container__menu")?.addEventListener("click", (e) => {
//     //   console.log(this.target.closest(".container-text"));
//     //   if (e.target.closest(".container-text")) {
//     //     e.target.parentNode.classList.toggle("hide");
//     //   }
//     // })
//   }
// })

// function toggleHideListMenu () {
//   if (this.target.closest(".container-text")) {
//     e.target.parentNode.classList.toggle("hide");
//   }
// }
function toggleBurgerMenu() {
  MENU.classList.toggle("active");
  BODY.classList.toggle("lock");
  if(MENU.classList.contains('active')){
    disableScroll();
  }else{
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