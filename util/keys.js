var Keys = {
  up: false,
  down: false,
  left: false,
  right: false,
  shift: false
};

window.onkeydown = function(e) {
  var kc = e.keyCode;
  //e.preventDefault();

  if (kc == 87 || kc == 38){
    Keys.up = true;
  } 
  if (kc == 65 || kc == 37){
    Keys.left = true;
  }
  if (kc == 68 || kc == 39){
    Keys.right = true;
  }
  if (kc == 83 || kc == 40){
    Keys.down = true;
  } 
  if (kc == 16){
    Keys.shift = true;
  }
};

window.onkeyup = function(e) {
  var kc = e.keyCode;
  e.preventDefault();

  if (kc == 87 || kc == 38){
    Keys.up = false;
  } 
  if (kc == 65 || kc == 37){
    Keys.left = false;
  } 
  if (kc == 68 || kc == 39){
    Keys.right = false;
  }
  if (kc == 83 || kc == 40){
    Keys.down = false;
  }
  if (kc == 16){
    Keys.shift = false;
  }
};  