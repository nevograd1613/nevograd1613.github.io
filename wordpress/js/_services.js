gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

gsap.to(".titles__titles", {
  y: -388,
  fontSize: 60,
  color: "#DAE6F0",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "3% 20%",
    end: "15% 70%"
  }
});

gsap.to(".scroll-element", {
   opacity: 0,
   scrollTrigger: {
      trigger:".scroll-element",
    scrub: 1,
    start: "0% 20%",
    end: "100% 70%"
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
  width: 4701,
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
    start: "18.3% 20%",
    end: "18.3% 20%"
  }
});

gsap.to(".services__item-1", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "18.3% 20%",
    end: "18.3% 20%"
  }
});

var rule1 = CSSRulePlugin.getRule(".services__item-2:after");

gsap.to(rule1, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "24% 20%",
    end: "24% 20%"
  }
});

gsap.to(".services__item-2", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "24% 20%",
    end: "24% 20%",
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
    start: "29.9% 20%",
    end: "29.9% 20%"
  }
});

gsap.to(".services__item-3", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "29.9% 20%",
    end: "29.9% 20%",
  }
});

gsap.to(".services__text-1", {
   height: "0%",
   padding: 0,
   duration: 2,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-1", {
  height: "20%",
  padding: "10px 0",
  duration: 2,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "29.9% 20%",
    end: "29.9% 20%",
  }
});

var rule3 = CSSRulePlugin.getRule(".services__item-4:after");

gsap.to(rule3, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "38.9% 20%",
    end: "38.9% 20%"
  }
});

gsap.to(".services__item-4", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "38.9% 20%",
    end: "38.9% 20%",
  }
});

gsap.to(".services__text-2", {
   height: "0%",
   padding: "0",
   duration: 1,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-2", {
  height: "15%",
  padding: "10px 0",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "38.9% 20%",
    end: "38.9% 20%",
  }
});

var rule4 = CSSRulePlugin.getRule(".services__item-5:after");

gsap.to(rule4, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "51.5% 20%",
    end: "51.5% 20%"
  }
});

gsap.to(".services__item-5", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "51.5% 20%",
    end: "51.5% 20%",
  }
});

gsap.to(".services__text-3", {
   height: "0%",
   padding: "0",
   duration: 1,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-3", {
  height: "14%",
  padding: "10px 0",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "51.5% 20%",
    end: "51.5% 20%",
  }
});

gsap.to(".services__text-3", {
  height: 0,
  duration: 1,
  padding: 0,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "53% 20%",
    end: "53% 20%",
  }
});

gsap.to(".services__text-4", {
   height: "0%",
   padding: "0",
   duration: 1,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-4", {
  height: "38%",
  padding: "10px 0",
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
  padding: 0,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "57% 20%",
    end: "57% 20%",
  }
});

gsap.to(".services__text-5", {
   height: "0%",
   padding: "0",
   duration: 1,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-5", {
  height: "15%",
  padding: "10px 0",
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
  padding: 0,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "60% 20%",
    end: "60% 20%",
  }
});

gsap.to(".services__text-6", {
   height: "0%",
   padding: "0",
   duration: 1,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-6", {
  height: "33%",
  padding: "10px 0",
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
   height: "0%",
   padding: 0,
   duration: 1,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-7", {
  height: "43%",
  padding: "10px 0",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "67.5% 20%",
    end: "67.5% 20%",
  }
});
