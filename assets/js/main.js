/*Change button text from "Subscribe" to "Subscribed"*/

var button = document.getElementById("subscribe-button");
button.addEventListener('click', function() {
  if (button.getAttribute("text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("text-original");
  } else {
    button.setAttribute("text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("text-swap");
  }
}, false);

/*Slideshow*/

var slidearray = document.querySelectorAll('#slides .sliderli');
console.log(slidearray);
var slideCurrent = 0;
var sliderPause = setInterval(nextSlide,4000);
var foward = document.getElementById('next');
var backward = document.getElementById('pre');

function nextSlide(n){
    slidearray[slideCurrent].className = 'sliderli';
    slideCurrent = (n+slidearray.length)%slidearray.length;
    slidearray[slideCurrent].className = 'sliderli visable';
}

function slideFoward(){
    nextSlide(slideCurrent+1);
}

function slideBackward(){
    nextSlide(slideCurrent-1);
}

foward.onclick = function(){
    slideFoward();
};
backward.onclick = function(){
    slideBackward();
};
