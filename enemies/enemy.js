class Enemy {
  constructor(x, y, s){
    this.pos = {x: x, y: y};
    this.angle = Math.random()*6.28318531;
    this.speed = 3;
    this.vel = {x: Math.cos(this.angle)*this.speed, y: Math.sin(this.angle)*this.speed};
    this.radius = s;
  }
  draw(){
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.arc(this.pos.x, this.pos.y, this.radius*0.9, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
  }
  move(){
    if(this.pos.x - this.radius < 0){
      this.pos.x = this.radius;
      this.vel.x *= -1;
    }else if(this.pos.x + this.radius > canvas.width){
      this.pos.x = canvas.width - this.radius;
      this.vel.x *= -1;
    }
    if(this.pos.y - this.radius < 0){
      this.pos.y = this.radius;
      this.vel.y *= -1;
    }else if(this.pos.y + this.radius > canvas.height){
      this.pos.y = canvas.height - this.radius;
      this.vel.y *= -1;
    }

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
  col(){
    // Player -----------------------------
    let dx = player.pos.x - this.pos.x;
    let dy = player.pos.y - this.pos.y;
    let dist = Math.sqrt(dx*dx+dy*dy);
    if(dist < this.radius + player.radius){player.pos.x = player.respawnPoint.x; player.pos.y = player.respawnPoint.y;}
    /*-----------------------------------*/

    //Walls -------------------------------
    for(let i in objects){
      if(objects[i].type == "wall" || objects[i].type == "locked passage"){
        let px = clamp(objects[i].x, objects[i].x+objects[i].width, this.pos.x);
        let py = clamp(objects[i].y, objects[i].y+objects[i].height, this.pos.y);

        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(px,py);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        //ctx.stroke();
        ctx.closePath();

        let dist = distance(px, py, this.pos.x, this.pos.y);

        if(dist < this.radius){
          let angle = Math.atan2(py - this.pos.y, px - this.pos.x);

          let furthestX = this.pos.x + Math.cos(angle)*this.radius;
          let furthestY = this.pos.y + Math.sin(angle)*this.radius;

          let howFarIn = distance(px, py, furthestX, furthestY);

          this.pos.x -= Math.cos(angle)*howFarIn;
          this.pos.y -= Math.sin(angle)*howFarIn;
          
          if((px == objects[i].x && py == objects[i].y) || (px == objects[i].x && py == objects[i].y+objects[i].height) || (px == objects[i].x+objects[i].width && py == objects[i].y) || (px == objects[i].x+objects[i].width && py == objects[i].y+objects[i].width)){
            this.angle = Math.atan2(this.pos.y - py, this.pos.x - px);
            this.angleToVel();
          }else{
            if(this.pos.x < px || this.pos.x > px){
              this.vel.x *= -1;
            }
            if(this.pos.y < py || this.pos.y > py){
              this.vel.y *= -1;
            }
          }
        }
      }
    }
    /*-----------------------------------*/

  }
  angleToVel(){
    this.vel.x = Math.cos(this.angle)*this.speed;
    this.vel.y = Math.sin(this.angle)*this.speed;
  }
}

var enemies = [];

/*for(let i = 0; i < 1; i++){
  enemies.push(new Enemy(canvas.width/2, canvas.height/2, 10));
}*/