class Dino {
  constructor(x, y, w, h, colour) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colour = colour;

    this.gravity = 1;
    this.acc = 1;
  }

  show() {
    fill(this.colour);
    rect(this.x, this.y, this.w, this.h);
  }
}
