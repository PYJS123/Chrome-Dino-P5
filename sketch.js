let ground = {
  colour: null,
  level: null,
  thickness: 10
};

function setup() {
  createCanvas(850, 400);
  ground.level = height - 50;
  ground.colour = color(28, 28, 28);
}

function draw() {
  background(100);

  drawGround();   // Draw the ground
}

function drawGround() {
  stroke(ground.colour);
  strokeWeight(ground.thickness);
  line(0, ground.level, width, ground.level);
}
