import { Piece } from "../classes/piece";
import { P5I, p5i } from "p5i";
import createCanvas from "../utils/create-canvas";
import { CANVAS_SIZE } from "../configs";

export default new Piece(
  "Single Line",
  "single-line",
  (sketch) => {
    const {
      mount,
      stroke,
      background,
      translate,
      rotate,
      strokeWeight,
      noFill,
      pixelDensity,
      point,
      push,
      pop,
      arc,
      HALF_PI,
      PI,
      remove,
    } = sketch;

    const setup = () => {
      createCanvas(sketch);
      singleLine(50, 50, CANVAS_SIZE - 100, CANVAS_SIZE - 100);
      // renderPaperTexture()
    };

    const mouseClicked = ({ saveCanvas }) => {
      // saveCanvas("myCanvas", "jpg");
    };

    const singleLine = (startingX, startingY, width, height) => {
      const lineSpacing = 30;
      const lineWeight = 6;
      stroke(255, 0, 0);
      // rect(startingX, startingY, width, height)
      stroke(0);
      strokeWeight(lineWeight);
      for (let row = 0; row <= height; row += lineSpacing) {
        const isLastRow = row + lineSpacing > height;
        // const lineStart = !row ? 0:lineSpacing/2
        const lineStart = lineSpacing / 2;
        const lineEnd =
          (row / lineSpacing) % 2 === 0 && isLastRow
            ? width
            : width - lineSpacing / 2;
        for (let col = lineStart; col < lineEnd; col += 1) {
          point(col + startingX, row + startingY);
        }

        if (!isLastRow) {
          push();
          strokeWeight(lineWeight);
          noFill();
          if ((row / lineSpacing) % 2) {
            translate(
              lineSpacing + startingX - lineSpacing / 2,
              row + startingY + lineSpacing / 2,
              0
            );
            rotate(HALF_PI + PI * 2);
            arc(0, 0, lineSpacing, lineSpacing, 0, PI);
          } else {
            translate(
              width + startingX - lineSpacing / 2,
              row + startingY + lineSpacing / 2,
              0
            );
            rotate(HALF_PI + PI);
            arc(0, 0, lineSpacing, lineSpacing, 0, PI);
          }
          pop();
        }
      }
    };

    return { setup, mouseClicked };
    // return { setup, mouseClicked}
  }
);
