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
var slideIndex = 0;
var slideInterval = setInterval(autoSlide, 4000);



slideDo(slideIndex, slidearray);
autoSlide(slideIndex);

function slideDo(firstIndex, slidearray){
    updateLi(slidearray[firstIndex]);
    slidearray.forEach(function(element, key){
      var wrapper = document.getElementById('slide-dots');
      var dot = document.createElement('LI');
      dot.setAttribute('onclick', 'dotClick('+key+')');
      wrapper.appendChild(dot);
    });
}

function dotClick(key){
    nextSlide(slideIndex, key);
}

function nextSlide(currentIndex, newIndex){
    var slideCurrent = slidearray[currentIndex];
    slideCurrent.classList.remove('visable');

    var slideNew = slidearray[newIndex];
    slideNew.classList.add('visable');

    slideIndex = newIndex;
}


function updateLi(slideCurrent){
    slideCurrent.classList.add('visable');
}

function autoSlide(currentIndex){
   var newIndex =  currentIndex+1;
   var slideCurrent = slidearray[currentIndex];
   slideCurrent.classList.remove('visable');
   if(newIndex > slidearray.length){
     var slideIndex = 0;
   }
   else{
     var slideNew = slidearray[newIndex];
     slideNew.classList.add('visable');
   };

}

/*Price slide*/
var blue = document.getElementsByClassName("blueprice");
var green = document.getElementsByClassName("greenprice");
var grey = document.getElementsByClassName("greyprice");
var deluxe = document.getElementsByClassName("greydeluxe");

function slideout(x){
x.style.transition = "margin-left 15%!important";
}
