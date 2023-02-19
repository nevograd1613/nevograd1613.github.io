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
      stagger: 0.1,
    });

gsap.to(".titles__titles", {
  y: -388,
  x: -400,
  fontSize: 80,
  color: "#DAE6F0",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "3% 20%",
    end: "15% 70%"
  }
});

gsap.to(".services", {
  y: -448,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "3% 20%",
    end: "15% 70%"
  }
});

gsap.to(".services__line-acid", {
  width: 4551,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "15% 20%",
    end: "90% 70%",
  }
});

var rule = CSSRulePlugin.getRule(".services__item-1:after");

gsap.to(rule, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "17% 20%",
    end: "17% 20%"
  }
});

gsap.to(".services__item-1", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "17% 20%",
    end: "17% 20%"
  }
});

var rule1 = CSSRulePlugin.getRule(".services__item-2:after");

gsap.to(rule1, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "23% 20%",
    end: "23% 20%"
  }
});

gsap.to(".services__item-2", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "23% 20%",
    end: "23% 20%",
  }
});

gsap.to(".services", {
  x: -3500,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "26% 20%",
    end: "70% 20%",
  }
});

var rule2 = CSSRulePlugin.getRule(".services__item-3:after");

gsap.to(rule2, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "29% 20%",
    end: "29% 20%"
  }
});

gsap.to(".services__item-3", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "29% 20%",
    end: "29% 20%",
  }
});

gsap.to(".services__text-1", {
  height: "13%",
  duration: 2,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "29% 20%",
    end: "29% 20%",
  }
});

var rule3 = CSSRulePlugin.getRule(".services__item-4:after");

gsap.to(rule3, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "38% 20%",
    end: "38% 20%"
  }
});

gsap.to(".services__item-4", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "38% 20%",
    end: "38% 20%",
  }
});

gsap.to(".services__text-2", {
  height: "10%",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "38% 20%",
    end: "38% 20%",
  }
});

var rule4 = CSSRulePlugin.getRule(".services__item-5:after");

gsap.to(rule4, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "51.3% 20%",
    end: "51.3% 20%"
  }
});

gsap.to(".services__item-5", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "51.3% 20%",
    end: "51.3% 20%",
  }
});

gsap.to(".services__text-3", {
  height: "9%",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "51.3%% 20%",
    end: "51.3%% 20%",
  }
});

gsap.to(".services__text-3", {
  height: 0,
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "53% 20%",
    end: "53% 20%",
  }
});

gsap.to(".services__text-4", {
  height: "65%",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "53% 20%",
    end: "53% 20%",
  }
});

gsap.to(".services__text-4", {
  height: "0%",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "57% 20%",
    end: "57% 20%",
  }
});

gsap.to(".services__text-5", {
  height: "10%",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "57% 20%",
    end: "57% 20%",
  }
});

gsap.to(".services__text-5", {
  height: "0%",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "60% 20%",
    end: "60% 20%",
  }
});

gsap.to(".services__text-6", {
  height: "43%",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "60% 20%",
    end: "60% 20%",
  }
});

var rule5 = CSSRulePlugin.getRule(".services__item-6:after");

gsap.to(rule5, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "67.5% 20%",
    end: "67.5% 20%"
  }
});

gsap.to(".services__item-6", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "67.5% 20%",
    end: "67.5% 20%",
  }
});

gsap.to(".services__text-7", {
  height: "43%",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "67.5% 20%",
    end: "67.5% 20%",
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
    end: "90% 60%",
  }
});

gsap.to(".cas__right", {
  y: -200,
  scrollTrigger: {
    trigger: ".cas_wrapper",
    scrub: 1,
    start: "10% 20%",
    end: "90% 60%",
  }
});
