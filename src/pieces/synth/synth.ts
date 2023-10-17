import { P5I, p5i } from "p5i";
import createCanvas from "../../utils/create-canvas";

export default (sketch: P5I) => {
  let y = 100;

  const { background, random, stroke, frameRate } = sketch;

  // return {
  const setup = () => {
    createCanvas(sketch);
    stroke(255);
    frameRate(30);
  };
  const draw = ({ background, height, width, line, random }) => {
    background(0);
    y = y - 1;
    if (y < 0) {
      y = height;
    }
    line(0, y, width, y);
  };

  return { setup, draw };
  // };
};
