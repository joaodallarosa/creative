import { CANVAS_SIZE } from "../configs";

export default ({
  createCanvas,
  background,
  color,
  windowHeight,
  windowWidth,
}) => {
  const cnv = createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(color(255, 255, 255));
};
