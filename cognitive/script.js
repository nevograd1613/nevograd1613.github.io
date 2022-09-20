const link = document.querySelectorAll('.apeal__link');

link.forEach(i => {
   let arrow = i.querySelector('.apeal__link__arrow'),
       line = i.querySelector('.apeal__link__line'),
       chek = i.querySelector('.apeal__link__ok');

   i.addEventListener('click', () => {
      arrow.style.display = "none";
      line.style.display = "none";
      chek.style.display = "block";
   });
});

const inp1 = document.getElementById('input__file1'),
      inp2 = document.getElementById('input__file2');

inp1.addEventListener('change', function(){
   if( this.value ){
     document.getElementById('penc1').style.display = "block";
     document.getElementById('plus1').style.display = "none";
     document.getElementById('chek1').style.display = "block";
     document.getElementById('num1').style.left = "17px";
     document.getElementById('num1').style.top = "55px";
   } else {
      document.getElementById('penc1').style.display = "none";
      document.getElementById('plus1').style.display = "block";
      document.getElementById('chek1').style.display = "none";
      document.getElementById('num1').style.left = "29px";
      document.getElementById('num1').style.top = "52px";
   }
 });

 inp2.addEventListener('change', function(){
   if( this.value ){
      document.getElementById('penc2').style.display = "block";
      document.getElementById('plus2').style.display = "none";
      document.getElementById('chek2').style.display = "block";
      document.getElementById('num2').style.left = "17px";
      document.getElementById('num2').style.top = "55px";
   } else {
      document.getElementById('penc2').style.display = "none";
      document.getElementById('plus2').style.display = "block";
      document.getElementById('chek2').style.display = "none";
      document.getElementById('num2').style.left = "29px";
      document.getElementById('num2').style.top = "52px";
   }
 });