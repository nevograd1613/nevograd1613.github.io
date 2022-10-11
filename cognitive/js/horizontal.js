const servicesTitles = document.querySelector('.services__titles'),
      servicesTitle = document.querySelector('.services__title'),
      servicesService = document.querySelector('.services__service'),
      servicesAcid = document.querySelector('.services__acid');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   console.log(document.documentElement.scrollTop);
   if (document.documentElement.scrollTop > (servicesTitles.offsetTop - 160) && document.documentElement.scrollTop < servicesTitles.offsetTop + (servicesTitles.offsetHeight / 2)) {
      servicesTitle.style.fontSize = `${120 - ((document.documentElement.scrollTop - (servicesTitles.offsetTop - 160)) / 14)}px`;
      if (parseInt(servicesTitle.style.fontSize) < 115 && parseInt(servicesTitle.style.fontSize) > 80) {
         servicesTitle.style.color = "#DDF09B";
      } else if (parseInt(servicesTitle.style.fontSize) > 115) {
         servicesTitle.style.fontSize = "120px";
         servicesTitle.style.color = "#C7FF00";
      } else if (parseInt(servicesTitle.style.fontSize) < 80) {
         servicesTitle.style.fontSize = "80px";
         servicesTitle.style.color = "#DAE6F0";
      }
   }
   if (document.documentElement.scrollTop > ((servicesTitles.offsetTop - 160) + 1000) && document.documentElement.scrollTop < servicesTitles.offsetTop + servicesTitles.offsetHeight) {
      servicesTitle.style.transform = `translateX(-${((document.documentElement.scrollTop - (servicesTitles.offsetTop - 160)) / 5)}px)`;
   } else {
      servicesTitle.style.transform = `translateX(0)`;
   }
   console.log(servicesService.offsetTop);
   if (document.documentElement.scrollTop > servicesService.offsetTop + 500 && document.documentElement.scrollTop < 4900) {
      servicesAcid.style.width = `${(document.documentElement.scrollTop - (servicesService.offsetTop + 500)) / 3}px`;
   }
   if (document.documentElement.scrollTop > servicesService.offsetTop + 1200) {
      
   }
}