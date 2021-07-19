class Player {
  constructor(x, y, s){
    this.pos = new Vector(x, y);    
    this.radius = s;

    this.speed = 20;
    this.vel = new Vector(0, 0);

    this.maxSpeed = this.speed * this.speed;

    this.color = "rgba(230, 230, 230, 1)";

    this.area = 1;

    this.respawnPoint = new Vector(canvas.width/2, canvas.height/2);
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 6.28318531);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  move(dt){
    dt /= 20;
    this.vel.x = 0; this.vel.y = 0;

    if(Keys.left){
      this.vel.x = -this.speed;
    }
    if(Keys.right){
      this.vel.x = this.speed;
    }
    if(Keys.up){
      this.vel.y = -this.speed;
    }
    if(Keys.down){
      this.vel.y = this.speed;
    }
    if(Keys.shift){
      this.vel.x/=2;
      this.vel.y/=2;
    }

    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;

    /*if(this.pos.x - this.radius < 0){
      this.pos.x = this.radius;
    }else if(this.pos.x + this.radius > canvas.width){
      this.pos.x = canvas.width - this.radius;
    }
    if(this.pos.y - this.radius < 0){
      this.pos.y = this.radius;
    }else if(this.pos.y + this.radius > canvas.height){
      this.pos.y = canvas.height - this.radius;
    }*/
  }
  updateLevel(){
  
  }
}

var player = new Player(canvas.width/2, canvas.height/2, 30);