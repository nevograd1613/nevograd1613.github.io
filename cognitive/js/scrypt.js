const items = document.querySelector('.main-page__items'),
      item = document.querySelectorAll('.main-page__item'),
      links1 = document.querySelector('.links1'),
      links2 = document.querySelector('.links2'),
      links3 = document.querySelector('.links3'),
      links4 = document.querySelector('.links4'),
      links5 = document.querySelector('.links5');

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
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
      document.querySelector('.important__circle').style.width = "1300px";
      document.querySelector('.important__circle').style.height = "1300px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
      document.querySelector('.important__circle').style.width = "1200px";
      document.querySelector('.important__circle').style.height = "1200px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
      document.querySelector('.important__circle').style.width = "1100px";
      document.querySelector('.important__circle').style.height = "1100px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
      document.querySelector('.important__circle').style.width = "1000px";
      document.querySelector('.important__circle').style.height = "1000px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
      document.querySelector('.important__circle').style.width = "900px";
      document.querySelector('.important__circle').style.height = "900px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
      document.querySelector('.important__circle').style.width = "800px";
      document.querySelector('.important__circle').style.height = "800px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
      document.querySelector('.important__circle').style.width = "800px";
      document.querySelector('.important__circle').style.height = "800px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
      document.querySelector('.important__circle').style.width = "400px";
      document.querySelector('.important__circle').style.height = "400px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      document.querySelector('.important__circle').style.width = "300px";
      document.querySelector('.important__circle').style.height = "300px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
      document.querySelector('.important__circle').style.width = "100px";
      document.querySelector('.important__circle').style.height = "100px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   } else {
      document.querySelector('.important__circle').style.width = "10px";
      document.querySelector('.important__circle').style.height = "10px";
      document.querySelector('.important__circle').style.borderRadius = "50%";
      document.querySelector('.important__circle').style.top = "50%";
      document.querySelector('.important__circle').style.left = "50%";
      document.querySelector('.important__circle').style.transform = "translate(-50%, -50%)";
   };
};

links1.addEventListener('mouseover', () => {
   links1.classList.add('arrow');
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

links3.addEventListener('mouseover', () => {
   links3.classList.add('arrow');
   links1.classList.remove('arrow');
   links2.classList.remove('arrow');
   links4.classList.remove('arrow');
   links5.classList.remove('arrow');
});

links4.addEventListener('mouseover', () => {
   links4.classList.add('arrow');
   links1.classList.remove('arrow');
   links2.classList.remove('arrow');
   links3.classList.remove('arrow');
   links5.classList.remove('arrow');
});

links5.addEventListener('mouseover', () => {
   links5.classList.add('arrow');
   links1.classList.remove('arrow');
   links2.classList.remove('arrow');
   links3.classList.remove('arrow');
   links4.classList.remove('arrow');
});

const request = document.querySelector('.request');

request.addEventListener('mouseover', () => {
   request.classList.add('active');
});

request.addEventListener('mouseout', () => {
   request.classList.remove('active');
});

const works = document.querySelector('.works__wrapper'),
      work2 = document.querySelector('.wp2'),
      work3 = document.querySelector('.wp3'),
      work4 = document.querySelector('.wp4'),
      work5 = document.querySelector('.wp5'),
      work6 = document.querySelector('.wp6'),
      work7 = document.querySelector('.wp7');

works.addEventListener('mouseover', () => {
   works.classList.add('active');
});

works.addEventListener('mouseout', () => {
   works.classList.remove('active');
});

work2.addEventListener('mouseover', () => {
   work2.classList.add('active');
});

work2.addEventListener('mouseout', () => {
   work2.classList.remove('active');
});

work3.addEventListener('mouseover', () => {
   work3.classList.add('active');
});

work3.addEventListener('mouseout', () => {
   work3.classList.remove('active');
});

work4.addEventListener('mouseover', () => {
   work4.classList.add('active');
});

work4.addEventListener('mouseout', () => {
   work4.classList.remove('active');
});

work5.addEventListener('mouseover', () => {
   work5.classList.add('active');
});

work5.addEventListener('mouseout', () => {
   work5.classList.remove('active');
});

work6.addEventListener('mouseover', () => {
   work6.classList.add('active');
});

work6.addEventListener('mouseout', () => {
   work6.classList.remove('active');
});

work7.addEventListener('mouseover', () => {
   work7.classList.add('active');
});

work7.addEventListener('mouseout', () => {
   work7.classList.remove('active');
});

VanillaTilt.init(document.querySelectorAll(".works__wrapper"), {
   max: 15,
   speed: 300,
 easing: "cubic-bezier(.03,.98,.52,.99)",
 scale: 1.05,
});

const animItems = document.querySelectorAll('.about__item');

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
         if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset 
+ animItemHeight)) {
            animItem.classList.add('active');
         } else {
            if(!animItem.classList.contains('anim-no-hide')) {
               animItem.classList.remove('active');
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
};

const caseWrap = document.querySelectorAll('.case__wrapper');

if (caseWrap.length > 0) {
   window.addEventListener('scroll', caseOnScroll);
   function caseOnScroll(params) {
      for (let i = 0; i < caseWrap.length; i++) {
         const caseItem = caseWrap[i];
         const caseItemHeight = caseItem.offsetHeight;
         const caseItemOffset = offset(caseItem).top;
         const caseStart1 = 0.5;
         const caseStart2 = 0.7;
         const caseStart3 = 0.9;
         const caseStart4 = 1;

         let caseItemPoint1 = window.innerHeight - caseItemHeight * caseStart1;
         let caseItemPoint2 = window.innerHeight - caseItemHeight * caseStart2;
         let caseItemPoint3 = window.innerHeight - caseItemHeight * caseStart3;
         let caseItemPoint4 = window.innerHeight - caseItemHeight * caseStart4;
         if (caseItemHeight > window.innerHeight) {
            caseItemPoint1 = window.innerHeight - window.innerHeight * caseStart1;
            caseItemPoint2 = window.innerHeight - window.innerHeight * caseStart2;
            caseItemPoint3 = window.innerHeight - window.innerHeight * caseStart3;
            caseItemPoint4 = window.innerHeight - window.innerHeight * caseStart4;
         }
         if((pageYOffset > caseItemOffset - caseItemPoint4) && pageYOffset < (caseItemOffset 
+ caseItemHeight)) {
            caseItem.classList.add('st4');
            caseItem.classList.remove('st1');
            caseItem.classList.remove('st2');
            caseItem.classList.remove('st3');
         } else if ((pageYOffset > caseItemOffset - caseItemPoint3) && pageYOffset < (caseItemOffset 
            + caseItemHeight)) {
               caseItem.classList.add('st3');
               caseItem.classList.remove('st1');
               caseItem.classList.remove('st2');
               caseItem.classList.remove('st4');
         } else if ((pageYOffset > caseItemOffset - caseItemPoint2) && pageYOffset < (caseItemOffset 
            + caseItemHeight)) {
               caseItem.classList.add('st2');
               caseItem.classList.remove('st1');
               caseItem.classList.remove('st3');
               caseItem.classList.remove('st4');
         } else if ((pageYOffset > caseItemOffset - caseItemPoint1) && pageYOffset < (caseItemOffset 
            + caseItemHeight)) {
               caseItem.classList.add('st1');
               caseItem.classList.remove('st2');
               caseItem.classList.remove('st3');
               caseItem.classList.remove('st4');
         } else {
            if(!caseItem.classList.contains('anim-no-hide')) {
               caseItem.classList.remove('st1');
               caseItem.classList.remove('st2');
               caseItem.classList.remove('st3');
               caseItem.classList.remove('st4');
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
};