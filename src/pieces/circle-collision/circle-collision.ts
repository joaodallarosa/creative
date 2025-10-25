import { p5i, P5I } from "p5i";
import createCanvas from "../../utils/create-canvas";
import { getCanvasSize } from "~~/src/configs";
import p5, { Vector } from "p5";
import { ForceZone } from "./classes/force-zone";

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
    // loadSound,
    // soundFormats,
  } = sketch;

  let plates = [];
  let particles = [];
  let forceZones = [];
  const zoneForce = 0.0004;
  let plateImg;
  let plateSound;

  // Load the image.
  function preload() {
    // p5i.soundFormats("mp3", "ogg");
    // plateSound = p5i.loadSound("/assets/doorbell");
    plateImg = loadImage("/creative/images/plate.png");
  }

  const setup = ({ fill, textSize, pixelDensity, createVector }) => {
    pixelDensity(1);
    createCanvas(sketch);
    fill(0);
    textSize(CANVAS_SIZE / 7);
    frameRate(60);

    /** Force Zones Setup */
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
    const platesCount = 30;
    const plateSizeMin = 30;
    const plateSizeMax = 120;
    for (let i = 0; i < platesCount; i++) {
      const size = random(plateSizeMin, plateSizeMax);
      particles.push(
        new Particle(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE))
      );
      // placePlate(
      //   new Plate({
      //     mass: size,
      //     diameter: size,
      //     position: createVector(
      //       random(0, CANVAS_SIZE),
      //       random(0, CANVAS_SIZE)
      //     ),
      //     velocity: createVector(random(-0.3, 0.3), random(-0.3, 0.3)),
      //   })
      // );
    }
  };

  const draw = ({ background, fill, rect, drawingContext, ellipse }) => {
    background(45, 136, 155);
    forceZones.forEach((zone) => {
      // zone.draw({ push, pop, stroke, rect, fill });
      // zone.applyForce(plates);
      zone.applyForce(particles);
    });

    // for (let i = 0; i < plates.length; i++) {
    //   let plateA = plates[i];
    //   for (let j = i + 1; j < plates.length; j++) {
    //     const plateB = plates[j];
    //     plateA.checkCollision(plateB);
    //   }
    // }

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

    // plates
    //     .filter((_, i2) => i2 !== i)
    //     .forEach((other) => {
    //       plate.checkCollision(other);
    //     });

    particles.forEach((element) => {
      element.update();
      element.edges();
      element.show();
    });

    // plates.forEach((plate) => {
    //   // if (plate.position.x < CANVAS_SIZE/2 + 100 && plate.position.x > CANVAS_SIZE/2 - 100) {
    //   //   plate.velocity.y -= 0.001
    //   // }

    //   plate.update();
    //   stroke(0);
    //   fill(255);
    //   plate.draw();
    //   // plate.drawVector(translate, rotate);
    // });
  };

  const mousePressed = () => {
    console.log("mouse pressed!");
  };

  function placePlate(plate: Plate) {
    let position = getRandomPosition(plate.r);
    plate.position = position;
    while (plates.some((p) => collision(plate, p))) {
      plate.position = getRandomPosition(plate.r);
    }
    plates.push(plate);
  }

  function collision(c1, c2) {
    let d = dist(c1.position.x, c1.position.y, c2.position.x, c2.position.y);
    if (d < c1.r + c2.r) {
      return true;
    }
    return false;
  }

  function getRandomPosition(radius) {
    return createVector(
      random(0 + radius, CANVAS_SIZE - radius),
      random(0 + radius, CANVAS_SIZE - radius)
    );
  }

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
      // console.log(this.velocity.limit(0.5).y)
      this.position.add(this.velocity.limit(0.5));
      // this.position.add(this.velocity);
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

        // energy loss
        this.velocity.x *= 0.7;
        this.velocity.y *= 0.7;
        other.velocity.x *= 0.7;
        other.velocity.y *= 0.7;
      }
    }
  }

  class Particle {
    position: Vector;
    velocity: Vector;
    acceleration: Vector;
    mass: number;
    r: number;
    constructor(x, y) {
      this.position = createVector(x, y);
      this.velocity = p5.Vector.random2D();
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
      let impactVector = p5.Vector.sub(other.position, this.position);
      let d = impactVector.mag();
      if (d < this.r + other.r) {
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
        let vDiff = p5.Vector.sub(other.velocity, this.velocity);
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
