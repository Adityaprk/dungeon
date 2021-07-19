var bgImg = new Image();
bgImg.src = "global images/background.jpg";

var objects = [];

var tutorialDone = false;

let startingTextTimer = 0;
class Areas {
  constructor(){

  }
  update(area){
    if(area == 1){
      if(objects.length < 1){
        objects.push(new Wall(0, 0, canvas.width/3, 350));
        objects.push(new Wall(canvas.width*(2/3), 0, canvas.width/3, 350));
        objects.push(new Wall(0, canvas.height-350, canvas.width/3, 350));
        objects.push(new Wall(canvas.width*(2/3), canvas.height-350, canvas.width/3, 350));
        objects.push(new LockedPassage(0, 350, canvas.width/3-50, canvas.height-350-350, "green"));
        objects.push(new LockedPassage(canvas.width/3, canvas.height-300, canvas.width/3, 300, "blue"));
        objects.push(new LockedPassage(canvas.width/3, 0, canvas.width/3, 300, "red"));
        enemies[0] = new Enemy(canvas.width*0.8, canvas.height/2, 30);
      }
      ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
      
      for(let i in objects){
        objects[i].draw();
        objects[i].col();
      }
      for(let i in enemies){
        enemies[i].move();
        enemies[i].col();
        enemies[i].draw();
      }

      if(player.pos.x - player.radius > canvas.width){
        player.pos.x = -player.radius;
        player.area++;
        objects = [];
        enemies = [];
        player.respawnPoint.x = player.radius*3;
        player.respawnPoint.y = canvas.height/2;
        tutorialDone = true;
      }

      if(tutorialDone == false){
        ctx.font = "50px Ariel";
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.textAlign = "left";
        ctx.textBaseline = "top"
        ctx.fillText("WASD or Arrows to move".substring(0, startingTextTimer), 20, 20);
        ctx.font = "40px Ariel";
        ctx.fillText("Explore and escape the dungeon!".substring(0, startingTextTimer - 20), 22, 80);
      }else{
        ctx.font = "40px Ariel";
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.textAlign = "left";
        ctx.textBaseline = "top"
        ctx.fillText("Explore and escape the dungeon!".substring(0, startingTextTimer - 20), 22, 80+Math.cos(Date.now()/200)*10);
      }
      startingTextTimer += 1;
      //ctx.textBaseline = "bottom";
      //ctx.fillText("area " + player.area, 20, canvas.height-20);
    }else if(area == 2){
      if(objects.length < 1){
        objects.push(new Wall(0, 0, canvas.width/3, 350));
        objects.push(new Wall(canvas.width*(2/3), 0, canvas.width/3, 350));
        objects.push(new Wall(0, canvas.height-350, canvas.width/3, 350));
        objects.push(new Wall(canvas.width*(2/3), canvas.height-350, canvas.width/3, 350));
        objects.push(new Lava(canvas.width/3, canvas.height-300, canvas.width/3, 300));
        objects.push(new Lava(canvas.width/3, 0, canvas.width/3, 300));
        enemies[0] = new Enemy(canvas.width*0.8, canvas.height/2, 30);
        enemies[1] = new Enemy(canvas.width*0.8, canvas.height/2, 30);
        enemies[2] = new Enemy(canvas.width*0.8, canvas.height/2, 30);
      }
      ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
      
      for(let i in objects){
        objects[i].draw();
        objects[i].col();
      }
      for(let i in enemies){
        enemies[i].move();
        enemies[i].col();
        enemies[i].draw();
      }

      if(player.pos.x + player.radius > canvas.width){
        player.pos.x = canvas.width - player.radius;
        //player.area++;
        //objects = [];
      }else if(player.pos.x + player.radius < 0){
        player.pos.x = canvas.width+player.radius;
        player.area--;
        player.respawnPoint.x = canvas.width/2;
        player.respawnPoint.y = canvas.height/2;
        objects = [];
        enemies = [];
      }

      ctx.font = "50px Ariel";
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.textAlign = "left";
      ctx.textBaseline = "top"
      //ctx.fillText("WASD or Arrows to move", 20, 20);
      //ctx.textBaseline = "bottom";
      //ctx.fillText("area " + player.area, 20, canvas.height-20);
    }
  }
}

