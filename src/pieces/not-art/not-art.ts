import { P5I, p5i } from "p5i";
import createCanvas from "../../utils/create-canvas";

export default (sketch: P5I) => {
  const { background, random, loadFont, HALF_PI, createGraphics, image } =
    sketch;

  let font;
  const FONT_SIZE = 350;
  const preload = () => {
    font = loadFont("/creative/fonts/flicker.otf");
  };

  function setup() {
    createCanvas(sketch);
    background(1000);

    renderLetter("N", -30, 0, "art");
    renderLetter("O", 200, 0, "art");
    renderLetter("T", 450, 0, "art");

    renderLetter("A", -20, 300, "not");
    renderLetter("R", 200, 300, "not");
    renderLetter("T", 450, 300, "not");
  }

  const renderLetter = (letter, x, y, fillText) => {
    let textCnv = createGraphics(FONT_SIZE, FONT_SIZE);
    textCnv.background(1000);
    textCnv.fill(0);
    textCnv.textFont(font);
    // textCnv.textLeading(random(6,44));
    for (let i = 0; i < 480; i++) {
      textCnv.textSize(random(4, 25));
      textCnv.push();
      textCnv.translate(random(0, textCnv.width), random(0, textCnv.height));
      // textCnv.rotate(random(-PI,PI));
      textCnv.rotate((HALF_PI / 2) * random(-1, 1));
      textCnv.text(fillText, 0, 0);
      // textCnv.text(fillText,random(0,textCnv.width),random(0,textCnv.height))
      textCnv.pop();
      // pop()
    }
    let maskImage = createGraphics(FONT_SIZE, FONT_SIZE);
    maskImage.fill(0);
    maskImage.textSize(FONT_SIZE);
    // maskImage.textFont(font)
    maskImage.text(letter, 30, FONT_SIZE);
    const masked = textCnv.get();
    masked.mask(maskImage);
    image(masked, x, y);
  };

  return { setup, preload };
  // };
};
