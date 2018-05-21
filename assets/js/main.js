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
