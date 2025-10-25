import { p5i, P5I } from "p5i";
import createCanvas from "../../utils/create-canvas";
import { getCanvasSize } from "~~/src/configs";
// Do not import p5 directly to avoid SSR/module-shape issues.
// Use the client-exposed global `window.p5` or the provided `sketch` instance instead.
import { ForceZone } from "./classes/force-zone";

// avoid importing p5 directly — use the injected `sketch` and the client global window.p5
type Vector = any;

export default (sketch: P5I) => {
  const CANVAS_SIZE = getCanvasSize();
  const {
    random,
    stroke,
    frameRate,
    cos,
    sin,
    circle,
    strokeWeight,
    push,
    pop,
    createVector,
    triangle,
    line,
    dist,
    sqrt,
    loadImage,
    image,
    fill,
    arc,
  } = sketch;

  let particles = [];
  let forceZones = [];
  const zoneForce = 0.0008;
  let plateImg;
  let plateSound;

  // Load the image.
  function preload() {
    plateImg = loadImage("/creative/images/plate.png");
  }

  const setup = ({
    fill,
    textSize,
    pixelDensity,
    createVector,
    soundFormats,
    loadSound,
  }) => {
    pixelDensity(1);
    createCanvas(sketch);
    fill(0);
    textSize(CANVAS_SIZE / 7);
    frameRate(60);

    /** Force Zones Setup */
    // avoid importing p5 directly — use the injected `sketch` and the client global window.p5
    type Vector = any;
    forceZones.push(
      new ForceZone({
        position: createVector(CANVAS_SIZE / 3, 0),
        force: createVector(0, -zoneForce),
        height: CANVAS_SIZE,
        width: CANVAS_SIZE / 3,
      })
    );
    forceZones.push(
      new ForceZone({
        position: createVector(CANVAS_SIZE / 2, 0),
        force: createVector(zoneForce, 0),
        height: 100,
        width: CANVAS_SIZE / 2,
      })
    );
    forceZones.push(
      new ForceZone({
        position: createVector(0, 0),
        force: createVector(zoneForce, 0),
        height: 100,
        width: CANVAS_SIZE / 2,
      })
    );
    forceZones.push(
      new ForceZone({
        position: createVector(CANVAS_SIZE / 2, CANVAS_SIZE - 100),
        force: createVector(-zoneForce, 0),
        height: 100,
        width: CANVAS_SIZE / 2,
      })
    );
    forceZones.push(
      new ForceZone({
        position: createVector(0, CANVAS_SIZE - 100),
        force: createVector(zoneForce, 0),
        height: 100,
        width: CANVAS_SIZE / 2,
      })
    );
    forceZones.push(
      new ForceZone({
        position: createVector(0, 0),
        force: createVector(0, zoneForce),
        height: CANVAS_SIZE,
        width: 200,
      })
    );
    forceZones.push(
      new ForceZone({
        position: createVector(CANVAS_SIZE - 200, 0),
        force: createVector(0, zoneForce),
        height: CANVAS_SIZE,
        width: 200,
      })
    );

    /** Plates Setup */
    const platesCount = 20;
    const plateSizeMin = 30;
    const plateSizeMax = 120;
    for (let i = 0; i < platesCount; i++) {
      const size = random(plateSizeMin, plateSizeMax);
      particles.push(
        new Particle(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE))
      );
    }
  };

  const draw = ({ background, fill, rect, drawingContext, ellipse }) => {
    background(45, 136, 155);
    forceZones.forEach((zone) => {
      // zone.draw({ push, pop, stroke, rect, fill });
      // zone.applyForce(plates);
      zone.applyForce(particles);
    });

    // Style the circle using shadows.
    for (let i = 0; i < particles.length; i++) {
      let a = particles[i];
      push();
      drawingContext.shadowOffsetX = 35;
      drawingContext.shadowOffsetY = -25;
      drawingContext.shadowBlur = 30;
      drawingContext.shadowColor = "rgb(0 0 0 / 20%)";
      fill(0);
      ellipse(a.position.x, a.position.y, a.r * 2, a.r * 2);
      pop();
    }

    for (let i = 0; i < particles.length; i++) {
      let a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        a.collide(b);
      }
    }

    particles.forEach((element) => {
      element.update();
      element.edges();
      element.show();
    });
  };

  const mousePressed = () => {
    console.log("mouse pressed!");
  };
  class Particle {
    position: Vector;
    velocity: Vector;
    acceleration: Vector;
    mass: number;
    r: number;
    constructor(x, y) {
      this.position = createVector(x, y);
      // Initialize a random direction using the sketch's createVector
      this.velocity = createVector(random(-1, 1), random(-1, 1));
      this.velocity.normalize();
      this.velocity.mult(random(0.05, 0.2));
      this.acceleration = createVector(0, 0);
      this.mass = random(2, 8);
      this.r = sqrt(this.mass) * 20;
    }

    applyForce(force) {
      let f = force.copy();
      f.div(this.mass);
      this.acceleration.add(f);
    }

    // Method to update position
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }

    // Collision Detection and Resolution
    collide(other) {
      // use instance vector math
      let impactVector = other.position.copy().sub(this.position);
      let d = impactVector.mag();
      if (d < this.r + other.r) {
        if (plateSound) {
          plateSound.play();
        }

        // Push the particles out so that they are not overlapping
        let overlap = d - (this.r + other.r);
        let dir = impactVector.copy();
        dir.setMag(overlap * 0.5);
        this.position.add(dir);
        other.position.sub(dir);

        // Correct the distance!
        d = this.r + other.r;
        impactVector.setMag(d);

        let mSum = this.mass + other.mass;
        let vDiff = other.velocity.copy().sub(this.velocity);
        // Particle A (this)
        let num = vDiff.dot(impactVector);
        let den = mSum * d * d;
        let deltaVA = impactVector.copy();
        deltaVA.mult((2 * other.mass * num) / den);
        this.velocity.add(deltaVA.mult(0.8));
        // Particle B (other)
        let deltaVB = impactVector.copy();
        deltaVB.mult((-2 * this.mass * num) / den);
        other.velocity.add(deltaVB.mult(0.8));
      }
    }

    // Bounce edges
    edges() {
      if (this.position.x > CANVAS_SIZE - this.r) {
        this.position.x = CANVAS_SIZE - this.r;
        this.velocity.x *= -1;
      } else if (this.position.x < this.r) {
        this.position.x = this.r;
        this.velocity.x *= -1;
      }

      if (this.position.y > CANVAS_SIZE - this.r) {
        this.position.y = CANVAS_SIZE - this.r;
        this.velocity.y *= -1;
      } else if (this.position.y < this.r) {
        this.position.y = this.r;
        this.velocity.y *= -1;
      }
    }

    // Method to display
    show() {
      stroke(255);
      strokeWeight(0.5);
      fill(255, 255, 255, 0);
      image(
        plateImg,
        this.position.x - this.r,
        this.position.y - this.r,
        this.r * 2,
        this.r * 2
      );
      circle(this.position.x, this.position.y, this.r * 2);
      // arc(
      //   this.position.x,
      //   this.position.y,
      //   this.r * 2,
      //   this.r * 2,
      //   0,
      //   Math.PI + Math.PI / 2
      // );
    }
  }

  return { setup, draw, mousePressed, preload };
};
