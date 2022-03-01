// Toggle-menu===================
let toggleMenuButton = document.querySelector('.toggle-menu__btn');
let toggleMenuList = document.querySelector('.toggle-menu__list');

toggleMenuButton.addEventListener('click', function(){
    toggleMenuList.classList.toggle('toggle-menu__list--active')
})
// Toggle-menu===================
// Cart Button===================
let cartButton = document.querySelector('.options__bag');
let MobileCartButton = document.querySelector('#options__bag');
let asideCart = document.querySelector('.aside-cart');
let asideCartButton = document.querySelector('.aside-cart__btn');

cartButton.addEventListener('click', function(){
    asideCart.classList.toggle('aside-cart--show');
});

asideCartButton.addEventListener('click', function(){
    asideCart.classList.remove('aside-cart--show');
});

MobileCartButton.addEventListener('click', function(){
    asideCart.classList.toggle('aside-cart--show');
});

// Cart Button===================
// Panel tool====================
let enableOptionsButtonYes = document.querySelector('#yes-btn');
let enableOptionsButtonNo = document.querySelector('#no-btn');
let enableOptionsButton = document.querySelector('.enable-options__btn');

enableOptionsButtonYes.addEventListener('click', function(){
    enableOptionsButton.classList.add('enable-options__btn--current');
    enableOptionsButtonNo.classList.remove('enable-options__btn--current');
});

enableOptionsButtonNo.addEventListener('click', function(){
    this.classList.add('enable-options__btn--current');
    enableOptionsButtonYes.classList.remove('enable-options__btn--current');
});

let pannelToolButton = document.querySelector('.panel-tool__btn');
let pannelToolBody = document.querySelector('.panel-tool__body');

pannelToolButton.addEventListener('click', function(){
    pannelToolButton.classList.toggle('panel-tool__btn--close');
    pannelToolBody.classList.toggle('panel-tool__body--hide');  
});

// Mobile aside menu===============
let headerMobileButton = document.querySelector('.header-mobile__btn');
let asideMenu = document.querySelector('.aside-menu');
let asideMenuCloseButton = document.querySelector('.aside-menu__btn');
let asideMenuBg = document.querySelector('.aside-menu-bg');
let siteBody = document.querySelector('.body');

headerMobileButton.addEventListener('click', function(){
    asideMenu.classList.add('aside-menu--active');
    asideMenuBg.classList.add('aside-menu-bg--active');
    siteBody.classList.add('body--disable');
});

asideMenuCloseButton.addEventListener('click', function(){
    asideMenu.classList.remove('aside-menu--active');
    asideMenuBg.classList.remove('aside-menu-bg--active');
    siteBody.classList.remove('body--disable');
});

asideMenuBg.addEventListener('click', function(){
    asideMenu.classList.remove('aside-menu--active');
    asideMenuBg.classList.remove('aside-menu-bg--active');
    siteBody.classList.remove('body--disable');
});
// Mobile aside menu=============//
// Header Toggle menu==============
let headerToggleMenu = document.querySelector('.header-mobile__toggle-menu');
let toggleMenuButtonMobile = document.querySelector('#toggle-menu__btn');
let toggleMenuInnerList = document.querySelector('#toggle-menu__list');


toggleMenuButtonMobile.addEventListener('click', function(){
    headerToggleMenu.classList.toggle('header-mobile__toggle-menu--active');
    toggleMenuInnerList.classList.toggle('toggle-menu__list--active')
});
// Header Toggle menu============//
// Header inner toggle menu========
let toggleMenuItemSupplymentButton = document.querySelector('.supplyments');
let toggleMenuItemBreadEggsButton = document.querySelector('.bread-eggs');
let toggleMenuItemBeautyCareButton = document.querySelector('.beauty-care');
let toggleMenuItemSupplymentDropMenu = document.querySelector('.supplyments__drop-menu');
let toggleMenuItemBreadEggsDropMenu = document.querySelector('.bread-eggs__drop-menu');
let toggleMenuItemBeautyCareDropMenu = document.querySelector('.beauty-care__drop-menu');

toggleMenuItemSupplymentButton.addEventListener('click', function(){
    toggleMenuItemSupplymentDropMenu.classList.toggle('supplyments__drop-menu--active');
    toggleMenuItemBreadEggsDropMenu.classList.remove('bread-eggs__drop-menu--active');
    toggleMenuItemBeautyCareDropMenu.classList.remove('beauty-care__drop-menu--active');
});

toggleMenuItemBreadEggsButton.addEventListener('click', function(){
    toggleMenuItemBreadEggsDropMenu.classList.toggle('bread-eggs__drop-menu--active');
    toggleMenuItemSupplymentDropMenu.classList.remove('supplyments__drop-menu--active');
    toggleMenuItemBeautyCareDropMenu.classList.remove('beauty-care__drop-menu--active');
});

toggleMenuItemBeautyCareButton.addEventListener('click', function(){
    toggleMenuItemBeautyCareDropMenu.classList.toggle('beauty-care__drop-menu--active');
    toggleMenuItemSupplymentDropMenu.classList.remove('supplyments__drop-menu--active');
    toggleMenuItemBreadEggsDropMenu.classList.remove('bread-eggs__drop-menu--active');
});

// Header inner toggle menu======//
// User Options Reset form=========
let resetFormOpenCloseButton = document.querySelector('.forget-btn');
let resetForm = document.querySelector('.reset-form');

resetFormOpenCloseButton.addEventListener('click', function(){
    resetForm.classList.toggle('reset-form--active');
});
// User Options Reset form=======//
// User Options open close=========
let userOptionUserButton = document.querySelector('#options__user');
let userOptions = document.querySelector('.user-options');
let userOptionBg = document.querySelector('.user-options__bg');
let userOptionCloseButton = document.querySelector('.user-options__close-btn');
let bottomOptionsButton = document.querySelector('.bottom-options__user');

userOptionUserButton.addEventListener('click', function(){
    userOptions.classList.add('user-options--active');
    userOptionBg.classList.add('user-options__bg--active');
    siteBody.classList.add('body--disable');
});

userOptionCloseButton.addEventListener('click', function(){
    userOptions.classList.remove('user-options--active');
    userOptionBg.classList.remove('user-options__bg--active');
    siteBody.classList.remove('body--disable');
});

userOptionBg.addEventListener('click', function(){
    this.classList.remove('user-options__bg--active');
    userOptions.classList.remove('user-options--active');
    userOptionBg.classList.remove('user-options__bg--active');
    siteBody.classList.remove('body--disable');
});
// User Options open close=======//
// preloader effect======================================
var loader = document.querySelector('#preloader');

window.addEventListener('load', function(){
  loader.style.display = "none";
});
// preloader effect======================================