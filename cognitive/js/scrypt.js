const items = document.querySelector('.main-page__items'),
      item = document.querySelectorAll('.main-page__item');

items.addEventListener('mouseover', () => {
   for (let i = 0; i < item.length; i++) {
      item[i].classList.add('active');
   };
});

var rellax = new Rellax('.rellax');
new Rellax('.parellax', {
   horizontal: true
 });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      document.querySelector('.creative-solutions__title').style.lineHeight = "90px";
   } else if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      document.querySelector('.creative-solutions__title').style.lineHeight = "120px";
   } else {
      document.querySelector('.creative-solutions__title').style.lineHeight = "160px";
   };
   if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
      document.querySelector('.important__circle').style.width = "100%";
      document.querySelector('.important__circle').style.height = "100%";
      document.querySelector('.important__circle').style.borderRadius = "0";
      document.querySelector('.important__circle').style.top = "0px";
      document.querySelector('.important__circle').style.left = "0px";
      document.querySelector('.important__subtitle').classList.add('active');
      document.querySelector('.important__circle').style.transform = "translate(0, 0)";
   } else
   if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
      document.querySelector('.important__circle').style.width = "1600px";
      document.querySelector('.important__circle').style.height = "1600px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__subtitle').classList.remove('active');
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
      document.querySelector('.important__circle').style.width = "1400px";
      document.querySelector('.important__circle').style.height = "1400px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
      document.querySelector('.important__circle').style.width = "1300px";
      document.querySelector('.important__circle').style.height = "1300px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
      document.querySelector('.important__circle').style.width = "1200px";
      document.querySelector('.important__circle').style.height = "1200px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
      document.querySelector('.important__circle').style.width = "1100px";
      document.querySelector('.important__circle').style.height = "1100px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
      document.querySelector('.important__circle').style.width = "1000px";
      document.querySelector('.important__circle').style.height = "1000px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
      document.querySelector('.important__circle').style.width = "900px";
      document.querySelector('.important__circle').style.height = "900px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
      document.querySelector('.important__circle').style.width = "800px";
      document.querySelector('.important__circle').style.height = "800px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
      document.querySelector('.important__circle').style.width = "800px";
      document.querySelector('.important__circle').style.height = "800px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
      document.querySelector('.important__circle').style.width = "400px";
      document.querySelector('.important__circle').style.height = "400px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      document.querySelector('.important__circle').style.width = "300px";
      document.querySelector('.important__circle').style.height = "300px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
      document.querySelector('.important__circle').style.width = "100px";
      document.querySelector('.important__circle').style.height = "100px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else {
      document.querySelector('.important__circle').style.width = "10px";
      document.querySelector('.important__circle').style.height = "10px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   };
 };