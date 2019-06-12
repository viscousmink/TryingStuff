
var cols, rows;
var scl = 20;
var w = 1800;
var h = 1000;
var Yflying = 0;
var Xflying = 0;
var terrain = [];

function setup() {
  createCanvas(1400, 800, WEBGL);
  cols = w / scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {
  if(keyIsPressed == true) {
    if(key == 'w') {
	  Yflying -= 0.1;
    } else if(key == 's') {
	  Yflying += 0.1;
	} else if(key == 'a') {
	  Xflying -= 0.1;
	} else if(key == 'd') {
	  Xflying += 0.1;
	}
  
    var yoff = Yflying;
    for (var y = 0; y < rows; y++) {
      var xoff = Xflying;
      for (var x = 0; x < cols; x++) {
        terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
        xoff += 0.2;
      }
      yoff += 0.2;
    }

    background(0);
    translate(0, 50);
    rotateX(PI/2.5);
    fill(200,200,200, 50);
    translate(-w/2, -h/2);
    for (var y = 0; y < rows-1; y++) {
      beginShape(TRIANGLE_STRIP);
      for (var x = 0; x < cols; x++) {
        vertex(x*scl, y*scl, terrain[x][y]);
	    vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
	  }
      endShape();
    }
  } else {
	
  }
  
}