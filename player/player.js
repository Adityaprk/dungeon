class Player {
  constructor(x, y, s){
    this.pos = new Vector(x, y);    
    this.radius = s;

    this.speed = 10;
    this.vel = new Vector(0, 0);

    this.maxSpeed = this.speed * 10;

    this.color = "rgba(230, 230, 230, 1)";
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 6.28318531);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  move(dt){
    dt /= 50;
    this.vel.x *= 0.9; this.vel.y *= 0.9;

    if(Keys.left){
      this.vel.x += -this.speed * dt;
    }
    if(Keys.right){
      this.vel.x += this.speed * dt;
    }
    if(Keys.up){
      this.vel.y += -this.speed * dt;
    }
    if(Keys.down){
      this.vel.y += this.speed * dt;
    }

    if(this.vel.x > this.maxSpeed){
      this.vel.x = this.maxSpeed;
    }else if(this.vel.x < -this.maxSpeed){
      this.vel.x = -this.maxSpeed;
    }
    if(this.vel.y > this.maxSpeed){
      this.vel.y = this.maxSpeed;
    }else if(this.vel.y < -this.maxSpeed){
      this.vel.y = -this.maxSpeed;
    }

    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;

    if(this.pos.x - this.radius < 0){
      this.pos.x = this.radius;
    }else if(this.pos.x + this.radius > canvas.width){
      this.pos.x = canvas.width - this.radius;
    }
    if(this.pos.y - this.radius < 0){
      this.pos.y = this.radius;
    }else if(this.pos.y + this.radius > canvas.height){
      this.pos.y = canvas.height - this.radius;
    }
  }
}

var player = new Player(canvas.width/2, canvas.height/2, 30);