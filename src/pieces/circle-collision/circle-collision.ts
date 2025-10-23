import { P5I } from "p5i";
import createCanvas from "../../utils/create-canvas";
import { getCanvasSize } from "~~/src/configs";
import { Vector } from "p5";

export default (sketch: P5I) => {
  const CANVAS_SIZE = getCanvasSize();
  let circles = [];
  let pos;
  let vel;
  const GRAVITY = 0.1;
  const {
    random,
    stroke,
    frameRate,
    TWO_PI,
    beginShape,
    vertex,
    endShape,
    cos,
    sin,
    CLOSE,
    atan2,
    loadFont,
    loadImage,
    circle,
    strokeWeight,
    point,
    push,
    pop,
    createVector,
    applyMatrix,
    triangle,
    dist,
    line,
  } = sketch;

  let plates = [];
  let center;

  const setup = ({
    createGraphics,
    fill,
    textSize,
    pixelDensity,
    createVector,
  }) => {
    pixelDensity(1);
    createCanvas(sketch);
    fill(0);
    textSize(CANVAS_SIZE / 7);
    frameRate(60);
    const platesCount = 8;
    const plateSizeMin = 30;
    const plateSizeMax = 120;
    for (let i = 0; i < platesCount; i++) {
      const size = random(plateSizeMin, plateSizeMax);
      plates.push(
        new Plate({
          mass: size,
          diameter: size,
          position: createVector(
            random(0, CANVAS_SIZE),
            random(0, CANVAS_SIZE)
          ),
          velocity: createVector(random(-0.3, 0.3), random(-0.3, 0.3)),
        })
      );
    }
  };

  const draw = ({
    background,
    fill,
    text,
    image,
    point,
    mouseX,
    mouseY,
    translate,
    rotate,
  }) => {
    background(209, 242, 255);
    plates.forEach((plate, i) => {
      // if (plate.position.x < CANVAS_SIZE/2 + 100 && plate.position.x > CANVAS_SIZE/2 - 100) {
      //   plate.velocity.y -= 0.001
      // }
      plates
        .filter((_, i2) => i2 !== i)
        .forEach((other) => {
          plate.checkCollision(other);
        });
      plate.update();
      stroke(0);
      fill(255);
      plate.draw();
      plate.drawVector(translate, rotate);
    });
  };

  const mousePressed = () => {
    console.log("mouse pressed!");
  };

  class Plate {
    diameter: number;
    m: number;
    velocity: Vector;
    position: Vector;
    minVelocity: number = 4;
    maxVelocity: number = 4;
    r: number;
    constructor({ position, mass, diameter, velocity }) {
      this.m = mass;
      this.diameter = diameter;
      this.velocity = velocity;
      this.position = position;
      this.r = this.diameter / 2;
    }
    update() {
      this.position.add(this.velocity);

      this.checkBoundaryCollision();
    }
    checkBoundaryCollision() {
      if (this.position.x > CANVAS_SIZE - this.r) {
        this.position.x = CANVAS_SIZE - this.r;
        this.velocity.x *= -1;
      } else if (this.position.x < this.r) {
        this.position.x = this.r;
        this.velocity.x *= -1;
      } else if (this.position.y > CANVAS_SIZE - this.r) {
        this.position.y = CANVAS_SIZE - this.r;
        this.velocity.y *= -1;
      } else if (this.position.y < this.r) {
        this.position.y = this.r;
        this.velocity.y *= -1;
      }
    }
    draw() {
      circle(this.position.x, this.position.y, this.diameter);
    }
    drawVector(translate, rotate) {
      /** Draw arrow */
      push();
      stroke(255, 0, 0);
      strokeWeight(3);
      translate(this.position.x, this.position.y);
      const sum = createVector(0, 0);
      for (let i = 0; i < 100; i++) {
        sum.add(this.velocity);
      }
      line(0, 0, sum.x, sum.y);
      rotate(sum.heading());
      let arrowSize = 8;
      translate(sum.mag() - arrowSize, 0);
      triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
      pop();
    }
    /** @description This is a port of the "Circle Collision" example from processing.org/examples <br> This example uses vectors for better visualization of physical Quantity
     */
    checkCollision(other) {
      // Get distances between the balls components
      let distanceVect = Vector.sub(other.position, this.position);

      // Calculate magnitude of the vector separating the balls
      let distanceVectMag = distanceVect.mag();

      // Minimum distance before they are touching
      let minDistance = this.r + other.r;

      if (distanceVectMag < minDistance) {
        let distanceCorrection = (minDistance - distanceVectMag) / 2.0;
        let d = distanceVect.copy();
        let correctionVector = d.normalize().mult(distanceCorrection);
        other.position.add(correctionVector);
        this.position.sub(correctionVector);

        // get angle of distanceVect
        let theta = distanceVect.heading();
        // precalculate trig values
        let sine = sin(theta);
        let cosine = cos(theta);

        /* bTemp will hold rotated ball this.positions. You 
       just need to worry about bTemp[1] this.position*/
        let bTemp = [new Vector(), new Vector()];

        /* this ball's this.position is relative to the other
       so you can use the vector between them (bVect) as the 
       reference point in the rotation expressions.
       bTemp[0].this.position.x and bTemp[0].this.position.y will initialize
       automatically to 0.0, which is what you want
       since b[1] will rotate around b[0] */
        bTemp[1].x = cosine * distanceVect.x + sine * distanceVect.y;
        bTemp[1].y = cosine * distanceVect.y - sine * distanceVect.x;

        // rotate Temporary velocities
        let vTemp = [new Vector(), new Vector()];

        vTemp[0].x = cosine * this.velocity.x + sine * this.velocity.y;
        vTemp[0].y = cosine * this.velocity.y - sine * this.velocity.x;
        vTemp[1].x = cosine * other.velocity.x + sine * other.velocity.y;
        vTemp[1].y = cosine * other.velocity.y - sine * other.velocity.x;

        /* Now that velocities are rotated, you can use 1D
       conservation of momentum equations to calculate 
       the final this.velocity along the x-axis. */
        let vFinal = [new Vector(), new Vector()];

        // final rotated this.velocity for b[0]
        vFinal[0].x =
          ((this.m - other.m) * vTemp[0].x + 2 * other.m * vTemp[1].x) /
          (this.m + other.m);
        vFinal[0].y = vTemp[0].y;

        // final rotated this.velocity for b[0]
        vFinal[1].x =
          ((other.m - this.m) * vTemp[1].x + 2 * this.m * vTemp[0].x) /
          (this.m + other.m);
        vFinal[1].y = vTemp[1].y;

        // hack to avoid clumping
        bTemp[0].x += vFinal[0].x;
        bTemp[1].x += vFinal[1].x;

        /* Rotate ball this.positions and velocities back
       Reverse signs in trig expressions to rotate 
       in the opposite direction */
        // rotate balls
        let bFinal = [new Vector(), new Vector()];

        bFinal[0].x = cosine * bTemp[0].x - sine * bTemp[0].y;
        bFinal[0].y = cosine * bTemp[0].y + sine * bTemp[0].x;
        bFinal[1].x = cosine * bTemp[1].x - sine * bTemp[1].y;
        bFinal[1].y = cosine * bTemp[1].y + sine * bTemp[1].x;

        // update balls to screen this.position
        other.position.x = this.position.x + bFinal[1].x;
        other.position.y = this.position.y + bFinal[1].y;

        this.position.add(bFinal[0]);

        // update velocities
        this.velocity.x = cosine * vFinal[0].x - sine * vFinal[0].y;
        this.velocity.y = cosine * vFinal[0].y + sine * vFinal[0].x;
        other.velocity.x = cosine * vFinal[1].x - sine * vFinal[1].y;
        other.velocity.y = cosine * vFinal[1].y + sine * vFinal[1].x;
      }
    }
  }

  return { setup, draw, mousePressed };
};
