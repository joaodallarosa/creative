import { Vector } from "p5";
import { P5I } from "p5i";

export class ForceZone {
  position: Vector;
  width: number;
  height: number;
  force: Vector;
  constructor({ position, width, height, force }) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.force = force;
  }
  draw({ push, pop, stroke, rect, fill }: P5I) {
    push();
    stroke(3);
    fill(0,0,0,0)
    rect(this.position.x, this.position.y, this.width, this.height);
    pop();
  }
  applyForce(plates) {
    plates
      .filter(({ position }) => this.isInsideZone(position))
      .forEach((plate) => {
        plate.velocity.add(this.force);
      });
  }
  isInsideZone(position: Vector) {
    return (
      position.x >= this.position.x &&
      position.x <= this.position.x + this.width &&
      position.y >= this.position.y &&
      position.y <= this.position.y + this.height
    );
  }
}
