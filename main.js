var loop = requestAnimationFrame(StartingScreen);

let lastTime = window.performance.now()
let delta = window.performance.now() - lastTime;

let currentLevel = 1;

var levels = new Levels();

function StartingScreen(){
  ctx.fillStyle = "rgba(40,40,40,1)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  delta = window.performance.now() - lastTime;
  lastTime = window.performance.now();

  levels.update(currentLevel);

  player.draw();
  player.move(delta);
  
  requestAnimationFrame(StartingScreen);
}

function clearKeys(){
  if(document.hidden){
    Keys.up = false; Keys.down = false; Keys.left = false; Keys.right = false; Keys.shift = false;
  }
}
window.setInterval(clearKeys, 1000/500)