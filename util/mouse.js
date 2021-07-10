var mouseX = -50;
var mouseY = -50;
var mouseD = false;

function getCursorPosition(canvas, event) {
  var rect = canvas.getBoundingClientRect(),
  scaleX = canvas.width / rect.width,
  scaleY = canvas.height / rect.height; 

  mouseX = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
  mouseY = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
}

window.addEventListener('mousedown', function(e) {
  mouseD = true;
})

window.addEventListener('mouseup', function(e) {
  mouseD = false;
})

window.addEventListener('mousemove', function(e) {
  getCursorPosition(canvas, e);
})