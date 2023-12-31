let myButton = document.getElementById("back-to-top");
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    myButton.style.display = "block";
  } 
  else {
    myButton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
myButton.addEventListener('click', topFunction)