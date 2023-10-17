export const CANVAS_SIZE = 700;

export const getCanvasSize = () => {
  if (!window || !window.innerWidth || !window.innerHeight) {
    throw Error("Window element not available.");
  }
  if (window.innerWidth < CANVAS_SIZE || window.innerHeight < CANVAS_SIZE) {
    return Math.min(window.innerWidth, window.innerHeight);
  }
  return CANVAS_SIZE;
};
