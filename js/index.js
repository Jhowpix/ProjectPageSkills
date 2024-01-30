// function perform audio interview TBL
var audioTimSurce = document.querySelector(".audioTBL");
var audioTimMovie = document.querySelector(".audioTBL");

   function audioTBL() { 

   if(audioTimMovie.style.display === 'block'){
      audioTimMovie.style.display = 'none';
      audioTimSurce.pause();
   } else {
      audioTimMovie.style.display = 'block';
      audioTimSurce.play();
   }
};
    
// function photo TBL
btnImg.addEventListener("click", function () {
    var imgTim = document.getElementById("imgTimBernersLee");

    if(imgTim.style.display === 'block'){
       imgTim.style.display = 'none'
    } else {
       imgTim.style.display = 'block'
    }
});
   
// function writing effect
function writeInFooter(element){
   const textArrayFooter = element.innerHTML.split('');
   element.innerHTML = '';
   textArrayFooter.forEach((letra, i) => {
      setTimeout(() => element.innerHTML += letra, 220 * i);
      
   }
)};
const typedTextFooter = document.getElementById("typedText");
writeInFooter(typedTextFooter);
   
// function open text in head
var btn = document.querySelector("#btnHead");
btn.addEventListener("click", function() {
   
    var span = document.querySelector("#textHeadSpan");
    var simbol = document.getElementById('simbolHeadMore')
    var simbolHeadEtc = document.getElementById('simbolHeadEtc')
    
  if(span.style.display === 'block') {
        span.style.display = 'none';
    } else {
      span.style.display = 'block';
  }

  if(simbol.style.display === 'none') {
      simbol.style.display = 'block';
   } else {
      simbol.style.display = 'none';
   }

   if(simbolHeadEtc.style.display === 'none') {
      simbolHeadEtc.style.display = 'block';
   } else {
      simbolHeadEtc.style.display = 'none';
   }
    
});

//function for delete caracters in head
