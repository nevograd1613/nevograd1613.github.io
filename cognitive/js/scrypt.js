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

 const creativeScroll = document.querySelector('.creative-solutions'),
       creativeTitleScroll = document.querySelector('.creative-solutions__title'),
       important = document.querySelector('.important'),
       importantCircle = document.querySelector('.important__circle'),
       importantTitle = document.querySelector('.important__title'),
       importantCircleTitle = document.querySelector('.important__circle-title'),
       work = document.querySelector('.works'),
       worksName = document.querySelector('.works__name-gray'),
       cases = document.querySelector('.case'),
       caseName = document.querySelector('.case__name');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.documentElement.scrollTop + 200 > creativeScroll.offsetTop && document.documentElement.scrollTop + 200 < creativeScroll.offsetTop + creativeScroll.offsetHeight) {
      creativeTitleScroll.style.lineHeight = `${160 - ((document.documentElement.scrollTop + 200 - creativeScroll.offsetTop) / 2.5)}px`;
      importantCircle.style.opacity = '0';
      if (parseInt(creativeTitleScroll.style.lineHeight) < 90) {
         creativeTitleScroll.style.lineHeight = "90px";
      } else if (parseInt(creativeTitleScroll.style.lineHeight) > 160) {
         creativeTitleScroll.style.lineHeight = "160px";
      }
   };
   if (document.documentElement.scrollTop + 200 > important.offsetTop && document.documentElement.scrollTop + 200 < (important.offsetTop + important.offsetHeight) - 750) {
      importantCircle.style.opacity = '1';
      importantCircle.style.borderRadius = '50%';
      importantCircle.style.width = `${(document.documentElement.scrollTop - important.offsetTop) * 4}px`;
      importantCircle.style.height = `${(document.documentElement.scrollTop - important.offsetTop) * 4}px`;
      importantCircleTitle.style.width = `${importantTitle.offsetWidth}px`;
      importantCircleTitle.style.height = `${importantTitle.offsetHeight}px`;
   } else if (document.documentElement.scrollTop + 200 > (important.offsetTop + important.offsetHeight) - 750) {
      importantCircle.style.width = '100%';
      importantCircle.style.height = '100%';
      importantCircle.style.borderRadius = '0';
   };
   if (document.documentElement.scrollTop + 412 > important.offsetTop + important.offsetHeight) {
       worksName.style.height = `${176 - (((document.documentElement.scrollTop + 412) - (important.offsetTop + important.offsetHeight)) / 1.5)}px`;
   };
   if (document.documentElement.scrollTop + 200 > cases.offsetTop + 3000) {
      caseName.style.transform = "translateY(-50%) rotate(15deg)";
   } else if (document.documentElement.scrollTop + 200 > cases.offsetTop + 2000) {
      caseName.style.transform = "translateY(-50%) rotate(-10deg)";
   } else if (document.documentElement.scrollTop + 200 > cases.offsetTop + 1000) {
      caseName.style.transform = "translateY(-50%) rotate(15deg)";
   } else if (document.documentElement.scrollTop + 200 > cases.offsetTop) {
      caseName.style.transform = "translateY(-50%) rotate(-10deg)";
   } else {
      caseName.style.transform = "translateY(-50%)";
   }
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

const ticker = document.querySelectorAll('.about__descr');
 ticker.forEach(i => {
   let text = i.innerHTML;
   let revers = text.split("").reverse().join("");
   console.log(revers);
   setInterval (function () {
      text = text[text.length -1] + text.substring(text.length - 1, 0);
      i.innerHTML = text;
   }, 350);
 });