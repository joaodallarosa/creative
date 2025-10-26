import { P5I } from "p5i";
import * as Tone from "tone";
import { ForceZone } from "./classes/force-zone";

// avoid importing p5 directly — use the injected `sketch` and the client global window.p5
type Vector = any;

function getViewportSize() {
  const w = window.innerWidth;
  const h = window.visualViewport
    ? Math.round(window.visualViewport.height)
    : window.innerHeight;
  return { w, h };
}

export default (sketch: P5I) => {
  let { w: CANVAS_WIDTH, h: CANVAS_HEIGHT } = getViewportSize();

  const {
    random,
    stroke,
    frameRate,
    circle,
    strokeWeight,
    push,
    pop,
    createVector,
    sqrt,
    loadImage,
    image,
    fill,
  } = sketch;

  const zoneForce = 0.001;
  const DENSITY = 0.00002; /** per pixel */
  const platesCount = CANVAS_HEIGHT * CANVAS_WIDTH * DENSITY;
  let particles = [];
  let forceZones = [];
  let plateImg;
  let playerIndex = 0;
  let audioStarted = false;
  let plateSounds = [
    "/creative/audio/chime_1.wav",
    "/creative/audio/chime_2.wav",
    "/creative/audio/chime_3.wav",
  ];
  let players = null;
  let backgroundPlayer = null;
  const PLAYERS_POOL = Math.floor(platesCount / 2);
  let _limiter: any = null;

  async function preload() {
    plateImg = loadImage("/creative/images/plate.png");
    try {
      await Tone.start();
      audioStarted = true;
    } catch (e) {
      // will usually be blocked until a user gesture
    }
    // Create a small pool of named players (hit0..hitN) so each collision can
    // start and play to completion without cutting other voices.
    try {
      // create a master limiter to avoid clipping when many voices overlap
      _limiter = new Tone.Limiter(-1).toDestination();
      const map: Record<string, string> = {};
      for (let i = 0; i < PLAYERS_POOL; i++) {
        map[`hit${i}`] = random(plateSounds);
      }

      backgroundPlayer = new Tone.Player({
        url: "/creative/audio/water.mp3",
        autostart: true,
        loop: true,
        volume: -20,
      }).toDestination();

      players = new Tone.Players(map, () => {
        console.log(`Tone.Players pool loaded (${PLAYERS_POOL})`);
      }).connect(_limiter);
    } catch (e) {
      console.warn("Tone.Players creation failed:", e);
      players = null;
    }
  }

  function playAt(volumeDb) {
    const epsilon = 0.001;
    try {
      if (!players) return;
      const key = `hit${playerIndex}`;
      playerIndex = (playerIndex + 1) % PLAYERS_POOL;
      const p: any = players.player(key);
      if (!p) return;

      // do NOT stop the player; allow it to play to completion. Using a
      // pool avoids retriggering the same instance and therefore avoids cuts.
      if (p.volume && typeof p.volume.value !== "undefined") {
        p.volume.value = volumeDb;
      }
      p.start(Tone.now() + epsilon);
    } catch (e) {
      console.warn("playAt error", e);
    }
  }

  function zonesSetup() {
    /** Force Zones Setup */
    // avoid importing p5 directly — use the injected `sketch` and the client global window.p5
    forceZones.push(
      new ForceZone({
        position: createVector(CANVAS_WIDTH / 3, 0),
        force: createVector(0, zoneForce * -1),
        height: CANVAS_HEIGHT,
        width: CANVAS_WIDTH / 3,
      })
    );
    forceZones.push(
      new ForceZone({
        position: createVector(CANVAS_WIDTH / 2, 0),
        force: createVector(zoneForce, 0),
        height: CANVAS_HEIGHT / 4,
        width: CANVAS_WIDTH / 2,
      })
    );
    forceZones.push(
      new ForceZone({
        position: createVector(0, 0),
        force: createVector(zoneForce * -1, 0),
        height: CANVAS_HEIGHT / 4,
        width: CANVAS_WIDTH / 2,
      })
    );
    forceZones.push(
      new ForceZone({
        position: createVector(
          CANVAS_WIDTH / 2,
          CANVAS_HEIGHT - CANVAS_HEIGHT / 4
        ),
        force: createVector(zoneForce * -1, 0),
        height: CANVAS_HEIGHT / 4,
        width: CANVAS_WIDTH / 2,
      })
    );
    forceZones.push(
      new ForceZone({
        position: createVector(0, CANVAS_HEIGHT - CANVAS_HEIGHT / 4),
        force: createVector(zoneForce, 0),
        height: CANVAS_HEIGHT / 4,
        width: CANVAS_WIDTH / 2,
      })
    );
    forceZones.push(
      new ForceZone({
        position: createVector(0, 0),
        force: createVector(0, zoneForce),
        height: CANVAS_HEIGHT,
        width: CANVAS_WIDTH / 3,
      })
    );
    forceZones.push(
      new ForceZone({
        position: createVector((CANVAS_WIDTH / 3) * 2, 0),
        force: createVector(0, zoneForce),
        height: CANVAS_HEIGHT,
        width: CANVAS_WIDTH / 3,
      })
    );
  }

  const setup = ({ pixelDensity, createCanvas }) => {
    pixelDensity(1);
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    frameRate(24);

    zonesSetup();
    for (let i = 0; i < platesCount; i++) {
      particles.push(
        new Particle(random(0, CANVAS_WIDTH), random(0, CANVAS_HEIGHT))
      );
    }
  };

  const draw = ({ background, fill, rect, drawingContext, ellipse }) => {
    background(45, 136, 155);
    forceZones.forEach((zone) => {
      // zone.draw({ push, pop, stroke, rect, fill });
      zone.applyForce(particles);
    });

    /** Draw Shadows */
    for (let i = 0; i < particles.length; i++) {
      let a = particles[i];
      push();
      drawingContext.shadowOffsetX = 35;
      drawingContext.shadowOffsetY = -25;
      drawingContext.shadowBlur = 40;
      drawingContext.shadowColor = "rgb(0 0 0 / 30%)";
      fill(0);
      circle(a.position.x, a.position.y, a.r * 1.5);
      pop();
    }

    /** Check Collision */
    for (let i = 0; i < particles.length; i++) {
      let a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        a.collide(b);
      }
    }

    /** Update Plates */
    particles.forEach((element) => {
      element.update();
      element.edges();
      element.show();
    });
  };

  const mousePressed = () => {
    // Resume the AudioContext on first user gesture so Tone can play audio
    Tone.start()
      .then(() => {
        audioStarted = true;
      })
      .catch((err) => {
        console.warn("Tone.start() failed:", err);
      });
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
      this.mass = random(1, 8);
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
        this.velocity.add(deltaVA.mult(0.4));
        // Particle B (other)
        let deltaVB = impactVector.copy();
        deltaVB.mult((-2 * this.mass * num) / den);
        other.velocity.add(deltaVB.mult(0.4));

        if (players) {
          if (
            (deltaVA.mag() >= 0.2 || deltaVB.mag() >= 0.2) &&
            (deltaVA.mag() <= 0.8 || deltaVB.mag() <= 0.8)
          ) {
            playAt(-35);
          } else if (
            (deltaVA.mag() > 0.8 || deltaVB.mag() > 0.8) &&
            (deltaVA.mag() <= 1.4 || deltaVB.mag() <= 1.4)
          ) {
            playAt(-25);
          } else if (deltaVA.mag() > 1.4 || deltaVB.mag() > 1.4) {
            playAt(-15);
          }
        }
      }
    }

    // Bounce edges
    edges() {
      if (this.position.x > CANVAS_WIDTH - this.r) {
        this.position.x = CANVAS_WIDTH - this.r;
        this.velocity.x *= -0.2;
      } else if (this.position.x < this.r) {
        this.position.x = this.r;
        this.velocity.x *= -0.2;
      }

      if (this.position.y > CANVAS_HEIGHT - this.r) {
        this.position.y = CANVAS_HEIGHT - this.r;
        this.velocity.y *= -0.2;
      } else if (this.position.y < this.r) {
        this.position.y = this.r;
        this.velocity.y *= -0.2;
      }
    }

    // Method to display
    show() {
      stroke(247, 240, 252);
      strokeWeight(1);
      fill(255, 255, 255, 0);
      image(
        plateImg,
        this.position.x - this.r,
        this.position.y - this.r,
        this.r * 2,
        this.r * 2
      );
      circle(this.position.x, this.position.y, this.r * 2);
    }
  }

  return { setup, draw, mousePressed, preload };
};
