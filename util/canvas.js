const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

function Resize(){
  var scale = window.innerWidth/canvas.width;
  if(window.innerHeight/canvas.height < window.innerWidth/canvas.width){
    scale = window.innerHeight/canvas.height;
  }
  var leftBorder = window.innerWidth-canvas.width/2;
  var topBorder = window.innerHeight-canvas.height/2;
  canvas.style.transform ="scale(" + scale +")";
  canvas.style.left = 1/2 * (window.innerWidth-canvas.width) + "px";
  canvas.style.top = 1/2 * (window.innerHeight-canvas.height) +"px";
}
Resize();

window.addEventListener('resize', function(){
  Resize();
});