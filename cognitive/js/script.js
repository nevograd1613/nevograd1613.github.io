let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startx;
let x;
slider.addEventListener('mousedown', (e) =>{
   pressed = true;
   startx = e.offsetX - innerSlider.offsetLeft;
   slider.style.cursor = 'grabbing'
});

slider.addEventListener('touchstart', (e) =>{
   pressed = true;
   startx = e.pageX - innerSlider.offsetLeft;
});

slider.addEventListener('mouseenter', ()=>{
   slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', ()=>{
   slider.style.cursor = 'grab';
});

window.addEventListener('mouseup', ()=>{
   pressed = false;
});

window.addEventListener('touchend', ()=>{
   pressed = false;
});

slider.addEventListener('mousemove', (e)=>{
   if(!pressed) return;
   e.preventDefault();

   x = e.offsetX

   innerSlider.style.left = `${x - startx}px`;

   checkboundary();
});

slider.addEventListener('touchmove', (e)=>{
   if(!pressed) return;
   e.preventDefault();

   x = e.pageX

   innerSlider.style.left = `${x - startx}px`;

   checkboundary();
});

function checkboundary(){
   let outer = slider.getBoundingClientRect();
   let inner = innerSlider.getBoundingClientRect();

   if(parseInt(innerSlider.style.left) > 0){
      innerSlider.style.left = '0px';
   } else if(inner.right < outer.right){
      innerSlider.style.left = `-${$inner.width - outer.width}px`;
   }
}

checkboundary();


let bg = document.getElementById("header");
            window.addEventListener("scroll", function () {
            bg.style.backgroundPositionY = 200 - +window.pageYOffset / 12 + "%";
            });

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll(params) {
      for (let i = 0; i < animItems.length; i++) {
         const animItem = animItems[i];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if(!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      var rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
   animOnScroll();
  }, 300);
}



let slider1 = document.querySelector('.slider1');
let innerSlider1 = document.querySelector('.slider-inner1');

let pressed1 = false;
let startx1;
let x1;
slider1.addEventListener('mousedown', (e1) =>{
   pressed1 = true;
   startx1 = e1.offsetX - innerSlider1.offsetLeft;
   slider1.style.cursor = 'grabbing'
});

slider1.addEventListener('touchstart', (e1) =>{
   pressed1 = true;
   startx1 = e1.pageX - innerSlider1.offsetLeft;
});

slider1.addEventListener('mouseenter', ()=>{
   slider1.style.cursor = 'grab';
});

slider1.addEventListener('mouseup', ()=>{
   slider1.style.cursor = 'grab';
});

window.addEventListener('mouseup', ()=>{
   pressed1 = false;
});

window.addEventListener('touchend', ()=>{
   pressed1 = false;
});

slider1.addEventListener('mousemove', (e1)=>{
   if(!pressed1) return;
   e1.preventDefault();

   x1 = e1.offsetX

   innerSlider1.style.left = `${x1 - startx1}px`;

   checkboundary1();
});

slider1.addEventListener('touchmove', (e1)=>{
   if(!pressed1) return;
   e1.preventDefault();

   x1 = e1.pageX

   innerSlider1.style.left = `${x1 - startx1}px`;

   checkboundary1();
});

function checkboundary1(){
   let outer1 = slider1.getBoundingClientRect();
   let inner1 = innerSlider1.getBoundingClientRect();

   if(parseInt(innerSlider1.style.left) > 0){
      innerSlider1.style.left = '0px';
   } else if(inner1.right < outer1.right){
      innerSlider1.style.left = `-${$inner1.width - outer1.width}px`;
   }
}

checkboundary1();

let slider2 = document.querySelector('.slider2');
let innerSlider2 = document.querySelector('.slider-inner2');

let pressed2 = false;
let startx2;
let x2;
slider2.addEventListener('mousedown', (e2) =>{
   pressed2 = true;
   startx2 = e2.offsetX - innerSlider2.offsetLeft;
   slider2.style.cursor = 'grabbing'
});

slider2.addEventListener('touchstart', (e2) =>{
   pressed2 = true;
   startx2 = e2.pageX - innerSlider2.offsetLeft;
});

slider2.addEventListener('mouseenter', ()=>{
   slider2.style.cursor = 'grab';
});

slider2.addEventListener('mouseup', ()=>{
   slider2.style.cursor = 'grab';
});

window.addEventListener('mouseup', ()=>{
   pressed2 = false;
});

window.addEventListener('touchend', ()=>{
   pressed2 = false;
});

slider2.addEventListener('mousemove', (e2)=>{
   if(!pressed2) return;
   e2.preventDefault();

   x2 = e2.offsetX

   innerSlider2.style.left = `${x2 - startx2}px`;

   checkboundary2();
});

slider2.addEventListener('touchmove', (e2)=>{
   if(!pressed2) return;
   e2.preventDefault();

   x2 = e2.pageX

   innerSlider2.style.left = `${x2 - startx2}px`;

   checkboundary2();
});

function checkboundary2(){
   let outer2 = slider2.getBoundingClientRect();
   let inner2 = innerSlider2.getBoundingClientRect();

   if(parseInt(innerSlider2.style.left) > 0){
      innerSlider2.style.left = '0px';
   } else if(inner2.right < outer2.right){
      innerSlider2.style.left = `-${$inner2.width - outer2.width}px`;
   }
}

checkboundary2();

(function() {
   'use strict';
 
   function trackScroll() {
     var scrolled = window.pageYOffset;
     var coords = document.documentElement.clientHeight;
 
     if (scrolled > coords) {
       goTopBtn.classList.add('back_to_top-show');
     }
     if (scrolled < coords) {
       goTopBtn.classList.remove('back_to_top-show');
     }
   }
 
   function backToTop() {
     if (window.pageYOffset > 0) {
       window.scrollBy(0, -80);
       setTimeout(backToTop, 0);
     }
   }
 
   var goTopBtn = document.querySelector('.back_to_top');
 
   window.addEventListener('scroll', trackScroll);
   goTopBtn.addEventListener('click', backToTop);
 })();

 window.onload = function () {
   document.body.classList.add('loaded_hiding');
   window.setTimeout(function () {
     document.body.classList.add('loaded');
     document.body.classList.remove('loaded_hiding');
   }, 500);
}