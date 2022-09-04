let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}

const hamburger = document.querySelector('.header__burger'),
      menu = document.querySelector('.nav'),
      closeElem = document.querySelector('.header__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('active');
    closeElem.classList.add('active');

});

menu.addEventListener('click', () => {
   menu.classList.remove('active');
   hamburger.classList.remove('active');
   closeElem.classList.remove('active');
});


closeElem.addEventListener('click', () => {
   menu.classList.remove('active');
   hamburger.classList.remove('active');
   closeElem.classList.remove('active');
});