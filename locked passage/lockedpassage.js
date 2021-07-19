let lock = new Image();
lock.src = "locked passage/images/lock.png";

class LockedPassage {
  constructor(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.state = true;
    this.distTraveled = 0;
    this.type = "locked passage";
    this.color = color;
  }
  draw(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(lock, this.x + this.width/2 - 35, this.y + this.height/2 - 70, 80, 100);
  }
  col(){
    let px = clamp(this.x, this.x+this.width, player.pos.x);
    let py = clamp(this.y, this.y+this.height, player.pos.y);

    let dist = distance(px, py, player.pos.x, player.pos.y);

    if(dist < player.radius){
      let angle = Math.atan2(py - player.pos.y, px - player.pos.x);

      let furthestX = player.pos.x + Math.cos(angle)*player.radius;
      let furthestY = player.pos.y + Math.sin(angle)*player.radius;

      let howFarIn = distance(px, py, furthestX, furthestY);
      
      player.pos.x -= Math.cos(angle)*howFarIn;
      player.pos.y -= Math.sin(angle)*howFarIn;
    }
  }
}