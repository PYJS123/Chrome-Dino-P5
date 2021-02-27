class Dino {
  constructor(x, y, w, h, colour) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colour = colour;

    this.gravity = 0.5;
    this.acc = 0;

    this.jumps = 0;
  }

  show() {
    fill(this.colour);
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    this.y -= this.acc;
    this.acc -= this.gravity;
    this.y = constrain(this.y, -Infinity, ground.level - this.h);
  }
}
