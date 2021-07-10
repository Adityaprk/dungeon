let bgImg = new Image();
bgImg.src = "images/background.jpg";

let arrow = new Image();
arrow.src = "util/images/PlayButton.png";

var objects = [];

class Levels {
  constructor(){

  }
  update(level){
    if(level == 1){
      if(objects.length < 1){
        objects.push(new Wall(0, 0, canvas.width/3, 350));
        objects.push(new Wall(canvas.width*(2/3), 0, canvas.width/3, 350));
        objects.push(new Wall(0, canvas.height-350, canvas.width/3, 350));
        objects.push(new Wall(canvas.width*(2/3), canvas.height-350, canvas.width/3, 350));
        objects.push(new Wall(0, -200, canvas.width, 120));
        objects.push(new Lava(0, 350, canvas.width/3-50, canvas.height-350-350));
        objects.push(new Lava(canvas.width/3, canvas.height-300, canvas.width/3, 300));
        objects.push(new Lava(canvas.width/3, 0, canvas.width/3, 300));
      }
      ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
      
      for(let i in objects){
        objects[i].draw();
        objects[i].col();
      }

      ctx.font = "160px Comic Sans MS";
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.textAlign = "center";
      ctx.textBaseline = "top"
      ctx.fillText("Dungeon", canvas.width/2, 50);
    }
  }
}

