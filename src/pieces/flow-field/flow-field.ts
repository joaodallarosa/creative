import { P5I } from "p5i";
import createCanvas from "../../utils/create-canvas";
import { getCanvasSize } from "~~/src/configs";

export default (sketch: P5I) => {
  const CANVAS_SIZE = getCanvasSize();
  let FIELD_CALC;
  const res = 10;

  let showField = true;
  let simulateParticles = false;
  let showParticleTrace = true;

  const { random, atan2, cos, sin, noise } = sketch;

  let fieldBuffer;
  let particlesBuffer;
  let points = [];

  // random attractor params
  var a = Math.random() * 2 - 2;
  var b = Math.random() * 2 - 2;
  var c = Math.random() * 2 - 2;
  var d = Math.random() * 2 - 2;

  const setup = ({
    CENTER,
    push,
    translate,
    rectMode,
    random,
    stroke,
    pixelDensity,
    strokeWeight,
    fill,
    frameRate,
    createGraphics,
  }) => {
    FIELD_CALC = getValue7;
    createCanvas(sketch);
    rectMode(CENTER);
    // pixelDensity(3.0);
    strokeWeight(0.5);
    stroke(0, 0, 0, 30);
    fill(0);
    // const numberOfPoints = 2000;
    frameRate(120);
    for (let i = 0; i < CANVAS_SIZE; i++) {
      points.push(new Point(0, i));
    }
    fieldBuffer = createGraphics(CANVAS_SIZE, CANVAS_SIZE);
    particlesBuffer = createGraphics(CANVAS_SIZE, CANVAS_SIZE);
    particlesBuffer.stroke(255, 0, 0, 20);
    particlesBuffer.strokeWeight(0.2);
    particlesBuffer.background(255, 0);
    stroke(0);
    renderField();
  };

  const renderField = () => {
    const count = 20000;
    fieldBuffer.stroke(0, 0, 0, 80);
    fieldBuffer.fill(0);
    fieldBuffer.strokeWeight(0.3);
    for (let i = 0; i < count; i++) {
      const x = random(0, CANVAS_SIZE),
        y = random(0, CANVAS_SIZE);
      const value = FIELD_CALC(x, y);
      fieldBuffer.push();
      fieldBuffer.translate(x, y);
      fieldBuffer.rotate(value);
      // fieldBuffer.line(0, 0, random(10, 30), 0);
      fieldBuffer.line(0, 0, 20, 0);
      fieldBuffer.pop();
    }
  };

  const draw = ({ background, fill, text, image, stroke, tint }) => {
    background(255);

    if (showField) {
      image(fieldBuffer, 0, 0);
    }
    if (simulateParticles) {
      if (!showParticleTrace) {
        particlesBuffer.background(0);
        particlesBuffer.strokeWeight(4);
        particlesBuffer.stroke(255, 0, 0, 50);
      }
      points.forEach((point) => {
        point.render();
      });
    }
    image(particlesBuffer, 0, 0);
  };

  const getValue = (x, y) => {
    return (x + y) * 0.001 * Math.PI * 2;
  };

  const getValue2 = (x, y) => {
    return (Math.sin(x * 0.01) + Math.sin(y * 0.01)) * Math.PI * 2;
  };

  const getValue3 = (x, y) => {
    // clifford attractor
    // http://paulbourke.net/fractals/clifford/

    // scale down x and y
    var scale = 0.009;
    x = (x - CANVAS_SIZE / 2) * scale;
    y = (y - CANVAS_SIZE / 2) * scale;

    // attactor gives new x, y for old one.
    var x1 = Math.sin(a * y) + c * Math.cos(a * x);
    var y1 = Math.sin(b * x) + d * Math.cos(b * y);

    // find angle from old to new. that's the value.
    return Math.atan2(y1 - y, x1 - x);
  };

  const getValue4 = (x, y) => {
    var scale = 0.09;
    x = (x - CANVAS_SIZE / 2) * scale;
    y = (y - CANVAS_SIZE / 2) * scale;
    return (Math.PI / x / 4) * y * 8;
  };

  const getValue5 = (x, y) => {
    var scale = 0.12;
    x = (x - CANVAS_SIZE / 2) * scale;
    y = (y - CANVAS_SIZE / 2) * scale;
    return (Math.cos(x / 6) + Math.sin(y * 0.03)) * Math.PI;
  };

  const getValue6 = (x, y) => {
    const endX = CANVAS_SIZE / 2;
    const endY = CANVAS_SIZE / 2;
    const angle = atan2(endY - y, endX - x);

    const slideX = cos(angle);
    const slideY = sin(angle);
    return angle + 20;
  };

  const getValue7 = (x, y) => {
    // clifford attractor
    // http://paulbourke.net/fractals/clifford/
    // scale down x and y
    var scale = 0.008;
    x = (x - CANVAS_SIZE / 2) * scale;
    y = (y - CANVAS_SIZE / 2) * scale;

    // attactor gives new x, y for old one.
    var x1 = d * Math.sin(a * x) - Math.sin(b * y);
    var y1 = c * Math.cos(a * x) + Math.cos(b * y);

    // find angle from old to new. that's the value.
    return Math.atan2(y1 - y, x1 - x) * Math.PI + 2;
  };

  class Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: any;
    constructor(x, y) {
      this.x = x;
      this.y = y;
      // this.vx = random(2, 14);
      this.vx = 14;
      this.vy = 0;
      this.color = [random(0, 255), random(0, 255), random(0, 255)];
    }
    render() {
      // if (this.still) return;
      var value = FIELD_CALC(this.x, this.y);
      this.vx += Math.cos(value) * 0.1;
      this.vy += Math.sin(value) * 0.1;
      // circle(this.x, this.y, 0.4);
      // particlesBuffer.stroke(this.color)
      particlesBuffer.line(this.x, this.y, this.x + this.vx, this.y + this.vy);
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= 0.99;
      this.vy *= 0.99;

      if (this.x > CANVAS_SIZE) this.x = 1;
      if (this.y > CANVAS_SIZE) this.y = random(0, CANVAS_SIZE);
      if (this.x < 0) this.x = 1;
      if (this.y < 0) this.y = random(0, CANVAS_SIZE);
    }
  }

  const keyPressed = () => {
    if (sketch.keyCode === 83) {
      simulateParticles = !simulateParticles;
    }
    if (sketch.keyCode === 70) {
      showField = !showField;
    }

    if (sketch.keyCode === 88) {
      showParticleTrace = !showParticleTrace;
    }
  };
  return { setup, draw, keyPressed };
};
