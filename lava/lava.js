class Lava {
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.state = true;
    this.distTraveled = 0;
  }
  draw(){
    ctx.fillStyle = "rgba(255,0,0,1)";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  col(){
    let px = clamp(this.x, this.x+this.width, player.pos.x);
    let py = clamp(this.y, this.y+this.height, player.pos.y);

    let dist = distance(px, py, player.pos.x, player.pos.y);

    if(dist < player.radius){
      player.pos.x = canvas.width/2;
      player.pos.y = canvas.height/2;
    }
  }
}