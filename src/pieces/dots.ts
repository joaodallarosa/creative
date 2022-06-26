import { Piece } from "../classes/piece";
import { P5I, p5i } from "p5i";
import createCanvas from "../utils/create-canvas";
import { Image } from "p5";
import { CANVAS_SIZE } from "../configs";

export default new Piece("Only Lines", "only-lines", (sketch: P5I) => {
  const {
    background,
    stroke,
    line,
    loadImage,
    pixelDensity,
    noFill,
    strokeWeight,
    point
  } = sketch;

  let img;
  let cnv;
  let render = [];
  let originalImage;
  // const LINE_SPACING = 5

  const preload = () => {
    img = loadImage("../../assets/images/dua.jpeg");
  }

  const setup = ({windowWidth, windowHeight}) => {
    img.resize(CANVAS_SIZE,0);
    console.log('oi', originalImage)
    background(1000);
    pixelDensity(4.0); // 20.0 for exporting
    // cnv = createCanvas(img.width, img.height);
    createCanvas(sketch)
    background(1000);
    renderImage();
  }

  const renderImage = () => {
    for (let col = SPACING; col < img.width; col += SPACING) {
      for (let row = SPACING; row < img.height; row += SPACING) {
        drawPixel(col, row);
      }
    }
  }

  const SPACING = 5;
  const initialBlackFrequency = 8;
  const frequencyGap = 0.15;
  const freqMultiplier = 0.0035;
  const frequencySteps = 255 / (frequencyGap * freqMultiplier);
  // const lineSize = 7
  const lineSize = SPACING;
  let lineWeight = 0.6;
  // const whiteFrequency = 220

  function drawPixel(x, y) {
    noFill();
    let c = img.get(x, y);
    stroke(0);
    strokeWeight(lineWeight);
    let test = (c[0] + c[1] + c[2]) / 3;
    let l = false;
    for (let i = 1; i <= frequencySteps; i++) {
      if (test < initialBlackFrequency + frequencyGap * i) {
        l = true;
        // stroke(50 * i,0,0) // IDEA FOR COLORS
        const size =
          lineSize - i * freqMultiplier > 0 ? lineSize - i * freqMultiplier : 0;
        line(x, y, x + size, y + size);
        break;
      } else {
        // stroke(0,255,0)
      }
    }
    if (!l) {
      stroke(0);
      point(x, y);
    }
  }

  return { setup, preload };
  // };
});
