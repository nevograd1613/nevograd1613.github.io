/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (() => {

const ticker = document.querySelectorAll('.treading-line__line-first');
ticker.forEach(i => {
  let text = " " + i.innerHTML;
  setInterval(function () {
    text = text.slice(1) + text[0];
    i.innerHTML = text;
  }, 192);
});
const ticker2 = document.querySelectorAll('.treading-line__line-second');
ticker2.forEach(i => {
  let text = " " + i.innerHTML;
  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    i.innerHTML = text;
  }, 189);
});
const ticker3 = document.querySelectorAll('.treading-line__line-third');
ticker3.forEach(i => {
  let text = " " + i.innerHTML;
  setInterval(function () {
    text = text.slice(1) + text[0];
    i.innerHTML = text;
  }, 180);
});
const ticker4 = document.querySelectorAll('.treading-line__line-fourth');
ticker4.forEach(i => {
  let text = " " + i.innerHTML;
  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    i.innerHTML = text;
  }, 180);
});
const ticker5 = document.querySelectorAll('.treading-line__line-fifth');
ticker5.forEach(i => {
  let text = " " + i.innerHTML;
  setInterval(function () {
    text = text.slice(1) + text[0];
    i.innerHTML = text;
  }, 165);
});
const links1 = document.querySelector('.links1'),
  links2 = document.querySelector('.links2'),
  links3 = document.querySelector('.links3'),
  links4 = document.querySelector('.links4'),
  links5 = document.querySelector('.links5'),
  links6 = document.querySelector('.links6'),
  links7 = document.querySelector('.links7'),
  links8 = document.querySelector('.links8'),
  links9 = document.querySelector('.links9'),
  links10 = document.querySelector('.links10');
links1.addEventListener('mouseover', () => {
  links1.querySelector.classList.add('arrow');
  links2.classList.remove('arrow');
  links3.classList.remove('arrow');
  links4.classList.remove('arrow');
  links5.classList.remove('arrow');
});
links2.addEventListener('mouseover', () => {
  links2.classList.add('arrow');
  links1.classList.remove('arrow');
  links3.classList.remove('arrow');
  links4.classList.remove('arrow');
  links5.classList.remove('arrow');
});
links2.addEventListener('mouseout', () => {
  links1.classList.add('arrow');
  links2.classList.remove('arrow');
});
links3.addEventListener('mouseover', () => {
  links3.classList.add('arrow');
  links1.classList.remove('arrow');
  links2.classList.remove('arrow');
  links4.classList.remove('arrow');
  links5.classList.remove('arrow');
});
links3.addEventListener('mouseout', () => {
  links1.classList.add('arrow');
  links3.classList.remove('arrow');
});
links4.addEventListener('mouseover', () => {
  links4.classList.add('arrow');
  links1.classList.remove('arrow');
  links2.classList.remove('arrow');
  links3.classList.remove('arrow');
  links5.classList.remove('arrow');
});
links4.addEventListener('mouseout', () => {
  links1.classList.add('arrow');
  links4.classList.remove('arrow');
});
links5.addEventListener('mouseover', () => {
  links5.classList.add('arrow');
  links1.classList.remove('arrow');
  links2.classList.remove('arrow');
  links3.classList.remove('arrow');
  links4.classList.remove('arrow');
});
links5.addEventListener('mouseout', () => {
  links1.classList.add('arrow');
  links5.classList.remove('arrow');
});
links6.addEventListener('mouseover', () => {
  links6.querySelector.classList.add('arrow');
  links7.classList.remove('arrow');
  links8.classList.remove('arrow');
  links9.classList.remove('arrow');
  links10.classList.remove('arrow');
});
links7.addEventListener('mouseover', () => {
  links7.classList.add('arrow');
  links6.classList.remove('arrow');
  links8.classList.remove('arrow');
  links9.classList.remove('arrow');
  links10.classList.remove('arrow');
});
links7.addEventListener('mouseout', () => {
  links6.classList.add('arrow');
  links7.classList.remove('arrow');
});
links8.addEventListener('mouseover', () => {
  links8.classList.add('arrow');
  links6.classList.remove('arrow');
  links7.classList.remove('arrow');
  links9.classList.remove('arrow');
  links10.classList.remove('arrow');
});
links8.addEventListener('mouseout', () => {
  links6.classList.add('arrow');
  links8.classList.remove('arrow');
});
links9.addEventListener('mouseover', () => {
  links9.classList.add('arrow');
  links6.classList.remove('arrow');
  links7.classList.remove('arrow');
  links8.classList.remove('arrow');
  links10.classList.remove('arrow');
});
links9.addEventListener('mouseout', () => {
  links6.classList.add('arrow');
  links9.classList.remove('arrow');
});
links10.addEventListener('mouseover', () => {
  links10.classList.add('arrow');
  links6.classList.remove('arrow');
  links7.classList.remove('arrow');
  links8.classList.remove('arrow');
  links9.classList.remove('arrow');
});
links10.addEventListener('mouseout', () => {
  links6.classList.add('arrow');
  links10.classList.remove('arrow');
});
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
gsap.to(".ambition__cards", {
  scrollTrigger: {
    trigger: ".ambition__cards",
    scrub: 1,
    start: "-100px 30%",
    end: "+=1200px"
  },
  motionPath: {
    path: document.querySelector(".ambition__sinus"),
    align: ".ambition__sinus",
    alignOrigin: [0.5, 0.5],
    start: 1,
    end: 0
  }
});
gsap.from(".awards__item-img", {
  x: -1000,
  scrollTrigger: {
    trigger: ".awards__item-img",
    scrub: 1,
    start: "-300px 25%",
    end: "-50px 25%"
  }
});
gsap.from(".awards__item-descr", {
  x: 1000,
  scrollTrigger: {
    trigger: ".awards__item-descr",
    scrub: 1,
    start: "-300px 25%",
    end: "-50px 25%"
  }
});
const textTitle = document.querySelector(".text__title");
const textLineHead = window.getComputedStyle(textTitle).lineHeight;
const textLineHeadEnd = `${parseInt(window.getComputedStyle(textTitle).lineHeight) - 40}px`;
const textLineHeightStart = {
  lineHeight: textLineHead
};
const showLineHeight = (textTitle, textLineHeightStart) => {
  textTitle.style.lineHeight = textLineHeightStart.lineHeight;
};
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
gsap.to(textLineHeightStart, {
  lineHeight: textLineHeadEnd,
  scrollTrigger: {
    trigger: textTitle,
    scrub: 1,
    start: "0 20%",
    end: "800px 100%"
  },
  onUpdate: function () {
    showLineHeight(textTitle, textLineHeightStart);
  }
});
gsap.to(".forms__bg", {
  scrollTrigger: {
    trigger: ".forms__bg",
    scrub: 1,
    start: "-500px 20%",
    end: "200px 90%"
  },
  motionPath: {
    path: document.querySelector(".forms__line"),
    align: ".forms__line",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
    start: 1,
    end: 0
  }
});

/***/ }),

/***/ "./src/js/_contacts.js":
/*!*****************************!*\
  !*** ./src/js/_contacts.js ***!
  \*****************************/
/***/ (() => {

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
const links1 = document.querySelector('.links1'),
  links2 = document.querySelector('.links2'),
  links3 = document.querySelector('.links3'),
  links4 = document.querySelector('.links4'),
  links5 = document.querySelector('.links5');
links1.addEventListener('mouseover', () => {
  links1.querySelector.classList.add('arrow');
  links2.classList.remove('arrow');
  links3.classList.remove('arrow');
  links4.classList.remove('arrow');
  links5.classList.remove('arrow');
});
links2.addEventListener('mouseover', () => {
  links2.classList.add('arrow');
  links1.classList.remove('arrow');
  links3.classList.remove('arrow');
  links4.classList.remove('arrow');
  links5.classList.remove('arrow');
});
links2.addEventListener('mouseout', () => {
  links1.classList.add('arrow');
  links2.classList.remove('arrow');
});
links3.addEventListener('mouseover', () => {
  links3.classList.add('arrow');
  links1.classList.remove('arrow');
  links2.classList.remove('arrow');
  links4.classList.remove('arrow');
  links5.classList.remove('arrow');
});
links3.addEventListener('mouseout', () => {
  links1.classList.add('arrow');
  links3.classList.remove('arrow');
});
links4.addEventListener('mouseover', () => {
  links4.classList.add('arrow');
  links1.classList.remove('arrow');
  links2.classList.remove('arrow');
  links3.classList.remove('arrow');
  links5.classList.remove('arrow');
});
links4.addEventListener('mouseout', () => {
  links1.classList.add('arrow');
  links4.classList.remove('arrow');
});
links5.addEventListener('mouseover', () => {
  links5.classList.add('arrow');
  links1.classList.remove('arrow');
  links2.classList.remove('arrow');
  links3.classList.remove('arrow');
  links4.classList.remove('arrow');
});
links5.addEventListener('mouseout', () => {
  links1.classList.add('arrow');
  links5.classList.remove('arrow');
});
gsap.from(".contacts__item", {
  y: 1200,
  duration: 0.2,
  stagger: 0.1
});
gsap.to(".titles__titles", {
  y: -388,
  x: -400,
  fontSize: 80,
  color: "#DAE6F0",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "3% 20%",
    end: "15% 70%"
  }
});
gsap.to(".services", {
  y: -448,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "3% 20%",
    end: "15% 70%"
  }
});
gsap.to(".services__line-acid", {
  width: 4551,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "15% 20%",
    end: "90% 70%"
  }
});
var rule = CSSRulePlugin.getRule(".services__item-1:after");
gsap.to(rule, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "17% 20%",
    end: "17% 20%"
  }
});
gsap.to(".services__item-1", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "17% 20%",
    end: "17% 20%"
  }
});
var rule1 = CSSRulePlugin.getRule(".services__item-2:after");
gsap.to(rule1, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "23% 20%",
    end: "23% 20%"
  }
});
gsap.to(".services__item-2", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "23% 20%",
    end: "23% 20%"
  }
});
gsap.to(".services", {
  x: -3500,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "26% 20%",
    end: "70% 20%"
  }
});
var rule2 = CSSRulePlugin.getRule(".services__item-3:after");
gsap.to(rule2, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "29% 20%",
    end: "29% 20%"
  }
});
gsap.to(".services__item-3", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "29% 20%",
    end: "29% 20%"
  }
});
gsap.to(".services__text-1", {
  height: "13%",
  duration: 2,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "29% 20%",
    end: "29% 20%"
  }
});
var rule3 = CSSRulePlugin.getRule(".services__item-4:after");
gsap.to(rule3, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "38% 20%",
    end: "38% 20%"
  }
});
gsap.to(".services__item-4", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "38% 20%",
    end: "38% 20%"
  }
});
gsap.to(".services__text-2", {
  height: "10%",
  duration: 1,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "38% 20%",
    end: "38% 20%"
  }
});
var rule4 = CSSRulePlugin.getRule(".services__item-5:after");
gsap.to(rule4, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "51.3% 20%",
    end: "51.3% 20%"
  }
});
gsap.to(".services__item-5", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "51.3% 20%",
    end: "51.3% 20%"
  }
});
gsap.to(".services__text-3", {
  height: "9%",
  duration: 1,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "51.3%% 20%",
    end: "51.3%% 20%"
  }
});
gsap.to(".services__text-3", {
  height: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "53% 20%",
    end: "53% 20%"
  }
});
gsap.to(".services__text-4", {
  height: "65%",
  duration: 1,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "53% 20%",
    end: "53% 20%"
  }
});
gsap.to(".services__text-4", {
  height: "0%",
  duration: 1,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "57% 20%",
    end: "57% 20%"
  }
});
gsap.to(".services__text-5", {
  height: "10%",
  duration: 1,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "57% 20%",
    end: "57% 20%"
  }
});
gsap.to(".services__text-5", {
  height: "0%",
  duration: 1,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "60% 20%",
    end: "60% 20%"
  }
});
gsap.to(".services__text-6", {
  height: "43%",
  duration: 1,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "60% 20%",
    end: "60% 20%"
  }
});
var rule5 = CSSRulePlugin.getRule(".services__item-6:after");
gsap.to(rule5, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "67.5% 20%",
    end: "67.5% 20%"
  }
});
gsap.to(".services__item-6", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "67.5% 20%",
    end: "67.5% 20%"
  }
});
gsap.to(".services__text-7", {
  height: "43%",
  duration: 1,
  scrollTrigger: {
    trigger: ".page__body",
    scrub: 1,
    start: "67.5% 20%",
    end: "67.5% 20%"
  }
});
const filtr = document.querySelector('.filters__filtr'),
  filtrList = document.querySelector('.filters__list');
filtr.addEventListener('click', () => {
  filtr.classList.toggle('active');
  filtrList.classList.toggle('active');
});
gsap.to(".cas__left", {
  y: 200,
  scrollTrigger: {
    trigger: ".cas_wrapper",
    scrub: 1,
    start: "10% 20%",
    end: "90% 60%"
  }
});
gsap.to(".cas__right", {
  y: -200,
  scrollTrigger: {
    trigger: ".cas_wrapper",
    scrub: 1,
    start: "10% 20%",
    end: "90% 60%"
  }
});

/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_gsap.js":
/*!*************************!*\
  !*** ./src/js/_gsap.js ***!
  \*************************/
/***/ (() => {

const heroLeft = document.querySelector(".hero__letters-left"),
  heroRight = document.querySelector(".hero__letters-right"),
  heroVideo = document.querySelector(".hero__video"),
  hero = document.querySelector(".hero__title");
hero.addEventListener('mouseover', () => {
  heroLeft.style.transform = "translateX(-500px)";
  heroRight.style.transform = "translateX(300px)";
  heroVideo.style.opacity = 1;
});
hero.addEventListener('mouseout', () => {
  heroLeft.style.transform = "translateX(0px)";
  heroRight.style.transform = "translateX(0px)";
  heroVideo.style.opacity = 0;
});
const textarea = document.querySelector('textarea');
textarea.addEventListener('input', autosize);
function autosize() {
  this.style.height = '60px';
  let applyNow = this.style.offsetHeight;
  this.style.height = this.scrollHeight - 5 + 'px';
}
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
let tl = gsap.timeline();
tl.fromTo(".hero__letters-left", {
  x: 0
}, {
  x: -200,
  scrollTrigger: {
    trigger: ".hero__letters-left",
    start: "-30% 10%",
    end: "150% 60%",
    scrub: true
  }
});
tl.fromTo(".hero__letters-right", {
  x: 0
}, {
  scrollTrigger: {
    trigger: ".hero__letters-left",
    start: "-30% 10%",
    end: "150% 60%",
    scrub: true
  },
  x: 100
});
const textTitle = document.querySelector(".description__title");
const textLineHead = window.getComputedStyle(textTitle).lineHeight;
const textLineHeadEnd = `${parseInt(window.getComputedStyle(textTitle).lineHeight) - 70}px`;
const textLineHeightStart = {
  lineHeight: textLineHead
};
const showLineHeight = (textTitle, textLineHeightStart) => {
  textTitle.style.lineHeight = textLineHeightStart.lineHeight;
};
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
gsap.to(textLineHeightStart, {
  lineHeight: textLineHeadEnd,
  scrollTrigger: {
    trigger: textTitle,
    scrub: 1,
    start: "-100px 40%",
    end: "100% 90%"
  },
  onUpdate: function () {
    showLineHeight(textTitle, textLineHeightStart);
  }
});
gsap.to(".circles__circle", {
  width: 3000,
  height: 3000,
  scrollTrigger: {
    trigger: ".circles__circle",
    scrub: 1,
    start: "-200px 10%",
    end: "1000px 100%"
  }
});
gsap.to(".circles__cube", {
  y: 500,
  scrollTrigger: {
    trigger: ".circles__cube",
    scrub: 1,
    start: "-10% 70%",
    end: "100% 40%"
  }
});
gsap.to(".works__title-grey", {
  height: 0,
  scrollTrigger: {
    trigger: ".works__title-grey",
    scrub: 1,
    start: "-400px 10%",
    end: "100px 40%"
  }
});
gsap.to(".cases__cube-vertical-right", {
  y: 450,
  rotate: 10,
  scrollTrigger: {
    trigger: ".cases__cube-vertical-right",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__img-vertical-right", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".cases__cube-vertical-right",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__latter-vertical-right-first", {
  rotate: -10,
  scrollTrigger: {
    trigger: ".cases__cube-vertical-right",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__latter-vertical-right-second", {
  rotate: -10,
  y: -100,
  scrollTrigger: {
    trigger: ".cases__cube-vertical-right",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__cube-horizontal-left", {
  y: 450,
  rotate: -10,
  scrollTrigger: {
    trigger: ".cases__cube-horizontal-left",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__img-horizontal-left", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".cases__cube-horizontal-left",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__latter-horizontal-left-first", {
  rotate: 15,
  scrollTrigger: {
    trigger: ".cases__cube-horizontal-left",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__latter-horizontal-left-second", {
  rotate: 15,
  y: 150,
  scrollTrigger: {
    trigger: ".cases__cube-horizontal-left",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__cube-horizontal-left", {
  y: 450,
  rotate: -10,
  scrollTrigger: {
    trigger: ".cases__cube-horizontal-left",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__img-horizontal-left", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".cases__cube-horizontal-left",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__latter-horizontal-left-first", {
  rotate: 15,
  scrollTrigger: {
    trigger: ".cases__cube-horizontal-left",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__latter-horizontal-left-second", {
  rotate: 15,
  y: 150,
  scrollTrigger: {
    trigger: ".cases__cube-horizontal-left",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__cube-vertical-left", {
  y: 450,
  rotate: 10,
  scrollTrigger: {
    trigger: ".cases__cube-vertical-left",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__img-vertical-left", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".cases__cube-vertical-left",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__latter-vertical-left-first", {
  rotate: -10,
  scrollTrigger: {
    trigger: ".cases__cube-vertical-left",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__latter-vertical-left-second", {
  rotate: -10,
  y: -100,
  scrollTrigger: {
    trigger: ".cases__cube-vertical-left",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__cube-horizontal-right", {
  y: 450,
  rotate: -10,
  scrollTrigger: {
    trigger: ".cases__cube-horizontal-right",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__img-horizontal-right", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".cases__cube-horizontal-right",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__latter-horizontal-right-first", {
  rotate: 15,
  scrollTrigger: {
    trigger: ".cases__cube-horizontal-right",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".cases__latter-horizontal-right-second", {
  rotate: 15,
  y: 150,
  scrollTrigger: {
    trigger: ".cases__cube-horizontal-right",
    scrub: 1,
    start: "10% 20%",
    end: "130% 50%"
  }
});
gsap.to(".request__circle", {
  borderRadius: "25%",
  scrollTrigger: {
    trigger: ".request",
    scrub: 1,
    start: "0 30%",
    end: "50% 70%"
  }
});

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }
  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;
  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }
  window.dispatchEvent(event);
}
if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_gsap */ "./src/js/_gsap.js");
/* harmony import */ var _gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_contacts */ "./src/js/_contacts.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contacts__WEBPACK_IMPORTED_MODULE_5__);






})();

/******/ })()
;
//# sourceMappingURL=main.js.map