let ground = {
  colour: null,
  level: null,
  thickness: 10
};

let dino;

let obstacles = [];

function setup() {
  createCanvas(850, 400);
  ground.level = height - 50;
  ground.colour = color(28, 28, 28);

  dino = new Dino(50, ground.level - 90, 40, 90, color(93, 125, 134));
  // rgb(64, 128, 0) for cacti, rgb(93, 125, 134) for dino
}

function draw() {
  background(100);

  if (dino.y == ground.level - 90) {
    dino.jumps = 0;   // Allow for jumping, but only twice
  }

  drawGround();   // Draw the ground

  dino.show();
  dino.update();
}

function drawGround() {
  stroke(ground.colour);
  strokeWeight(ground.thickness);
  line(0, ground.level, width, ground.level);
}

function keyPressed() {
  if (keyCode === UP_ARROW || key === ' ') {
    if (dino.jumps < 2 - 1) {
      dino.acc = 10;
      dino.jumps += 1;
    }
  }
}
