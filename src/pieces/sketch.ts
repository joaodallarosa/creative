import { Piece } from "../classes/piece";
import { p5i } from "p5i";
import createCanvas from "../utils/create-canvas";

export default new Piece("Multiverse Pots", "sketch", (sketch) => {
  let cnv;
  let x, y;
  let size = 10;
  let rotationSpeed = 0.5;
  let angle = 0;
  let starting = 0;
  let height = 0;

  const {
    mount,
    stroke,
    frameRate,
    background,
    line,
    color,
    angleMode,
    DEGREES,
    random,
    translate,
    rotate,
    strokeWeight,
    noFill,
    ellipse,
  } = sketch;

  const setup = () => {
    createCanvas(sketch);
    angle = 0;
    angleMode(DEGREES);
    frameRate(120);
    x = 0;
    y = sketch.windowHeight;
    starting = 0;
    let c = color(120, 126, 120);
  };

  const draw = ({windowHeight, mouseX, mouseY}) => {
    x = x + random(-5, 5);
    // x = x + 0.5;
    y = y - 4.5;
    // Reset to the bottom
    if (y < -100) {
      y = windowHeight + 100;
      starting += 200;
      rotationSpeed = random(-0.5, 0.5);
      size = 10;
    }
    translate(x + starting, y, 0);
    rotate(angle);
    strokeWeight(random(0.1, 0.8));
    stroke(20, 0, 0);
    noFill();
    ellipse(0, 0, mouseY / 2, mouseX / 2);
    angle += rotationSpeed;
    size += 0.75;
  };

  return { setup, draw };
});
