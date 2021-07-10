function clamp(min,max,val){
  if(val < min){
    return min;
  }else if(val > max){
    return max;
  }else{
    return val;
  }
}

function distance(x1, y1, x2, y2){
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx*dx+dy*dy);
}

class Wall {
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.state = true;
    this.distTraveled = 0;
  }
  draw(){
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(this.x, this.y, this.width, this.height);
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