function setup() {
  createCanvas(500, 500);
  background(255, 30, 255);
  //noStroke();
}

function draw() {
strokeWeight(2);
fill (250, 246, 75);
circle(250, 250, 350);

//(x1, y1, x2, y2)
strokeWeight(4);
line (150, 200, 200, 200);
line (260, 200, 310, 200);

//x, y, width, height, detail
strokeWeight(2);
ellipse(170, 360, 20, 200);
ellipse(180, 360, 20, 200);
ellipse(190, 360, 20, 200);

ellipse (220, 360, 20, 200);
}
