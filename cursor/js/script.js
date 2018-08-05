var link = document.querySelector('.btn');

function bigImg(x) {
  var xMousePosition = event.clientX;
  var yMousePosition = event.clientY;
  link.style.left = xMousePosition + 'px';
  link.style.top = yMousePosition + 'px';
}

function normalImg(x){
  x.style.top = "50%";
  x.style.left = "50%";
}