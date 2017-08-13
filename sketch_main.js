function setup() {
  createCanvas(1000,1000);
}

function draw() {
  for (i=10; i < 500; i+=5) {
    ellipse(i, i, i, i);
  }
  for (i=10; i < 601; i+=10) {
    ellipse(500, 500+i, 500-i, 500-i);
  }
}