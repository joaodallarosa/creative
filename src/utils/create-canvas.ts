import { getCanvasSize } from "../configs";

export default ({ createCanvas, background, color }) => {
  const CANVAS_SIZE = getCanvasSize();
  const cnv = createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(color(255, 255, 255));
};
