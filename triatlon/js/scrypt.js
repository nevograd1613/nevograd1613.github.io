let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');
let ofs = 0;
const btnLeft = document.querySelector('.commands__btn-left');
const btnRight = document.querySelector('.commands__btn-right');

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

btnRight.addEventListener('click', (e) => {
   x = e.offsetX;
   ofs = ofs + 346;
   if (ofs > 600) {
      ofs = -1384;
   }

   innerSlider.style.left = `${x + ofs}px`;

});

btnLeft.addEventListener('click', () => {
   ofs = ofs - 346;
   if (ofs < -1723) {
      ofs = 0;
   }
   innerSlider.style.left = `${x + ofs}px`;
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
   console.log(outer);

   if(parseInt(innerSlider.style.left) > 0){
      innerSlider.style.left = '0px';
   } else if(inner.right < outer.right){
      innerSlider.style.left = `-${$inner.width - outer.width}px`;
   }
}

checkboundary();

const hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuList = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('active');
    closeElem.classList.add('active');

});

menuList.addEventListener('click', () => {
   menu.classList.remove('active');
   hamburger.classList.remove('active');
   closeElem.classList.remove('active');
});


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
   closeElem.classList.remove('active');
});