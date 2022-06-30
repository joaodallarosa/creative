import { Piece } from "../../classes/piece";
import { P5I, p5i } from "p5i";
import createCanvas from "../../utils/create-canvas";
import { CANVAS_SIZE } from "../../configs";

export default new Piece(
  "Anxiety Tree",
  "anxiety-tree",
  (sketch) => {
    var x = 0;
    var JOAO;
    var go = false;

    const {
      mount,
      stroke,
      background,
      strokeWeight,
      pixelDensity,
      point,
      atan2,
      cos,
      sin,
      random,
      int,
    } = sketch;

    const setup = () => {
      createCanvas(sketch);
      stroke(0);
      strokeWeight(1);
      JOAO = new Human();
    };

    const draw = () => {
      if (go) {
        JOAO.drawStep();
        JOAO.drawStep();
      }
    };

    const keyPressed = () => {
      go = true;
    };

    class Human {
      lines: Line[];
      currentLine: Line;
      constructor() {
        this.lines = [
          new Line(
            new Point(CANVAS_SIZE / 2, CANVAS_SIZE),
            new Point(CANVAS_SIZE / 2, CANVAS_SIZE / 1.5)
          ),
        ];
        this.currentLine = this.lines[0];
      }
      drawStep() {
        if (!this.currentLine.finishedDrawing) {
          this.currentLine.drawNextStep();
        } else {
          // go = false
          if (
            this.lines[this.currentLine.parent] &&
            this.lines[this.currentLine.parent].children < 2
          ) {
            this.createNewLine(this.lines[this.currentLine.parent]);
          } else {
            this.createNewLine(this.currentLine);
          }
        }
      }
      createNewLine(from) {
        from.children += 1;
        let angle = from.angle + random(-1, 1);
        let length = int(random(10, 60));
        let x = length * Math.cos(angle);
        let y = length * Math.sin(angle);
        let novoFinal = new Point(x, y);
        novoFinal.sum(from.end);

        let newLine = new Line(Object.create(from.end), novoFinal);
        newLine.parent = this.lines.indexOf(from);

        let counter = 0;
        while (
          novoFinal.x <= 0 ||
          novoFinal.x > 500 ||
          novoFinal.y <= 0 ||
          novoFinal.y >= 500 ||
          (this.intersects(newLine) && counter <= 500)
        ) {
          counter++;
          angle = from.angle + random(-2, 2);
          length = int(random(10, 60));
          x = length * Math.cos(angle);
          y = length * Math.sin(angle);
          novoFinal = new Point(x, y);
          novoFinal.sum(from.end);
          newLine = new Line(Object.create(from.end), novoFinal);
        }

        if (counter >= 500) {
          this.currentLine = this.getLineWithLessThanTwoChildren();
          return;
        }

        this.lines.push(newLine);
        this.currentLine = newLine;
      }
      getLineWithLessThanTwoChildren() {
        return this.lines.find((line) => line.children < 2);
      }
      intersects(line) {
        var deuRuim = false;
        for (
          let i = 0;
          i <
          this.lines.filter((d) => this.lines.indexOf(d) !== line.parent)
            .length;
          i++
        ) {
          const l = this.lines.filter(
            (d) => this.lines.indexOf(d) !== line.parent
          )[i];
          if (
            intersect(
              line.start.x,
              line.start.y,
              line.end.x,
              line.end.y,
              l.start.x,
              l.start.y,
              l.end.x,
              l.end.y
            )
          ) {
            deuRuim = true;
          }
        }
        return deuRuim;
      }
    }

    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
      // Check if none of the lines are of length 0
      if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
        return false;
      }

      if (x1 === x3 && y1 === y3) {
        return false;
      }

      //   if ( (x1 === x4) && ( y1=== y4) ) {
      //     return false
      // }

      let denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

      // Lines are parallel
      if (denominator === 0) {
        return false;
      }

      let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
      let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;

      // is the intersection along the segments
      if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return false;
      }

      // Return a object with the x and y coordinates of the intersection
      let x = x1 + ua * (x2 - x1);
      let y = y1 + ua * (y2 - y1);

      stroke(255, 0, 0);
      strokeWeight(6);
      //   point(x,y)
      stroke(0);
      strokeWeight(1);
      //   console.log('COLLIDED COORDS', )

      return { x, y };
    }

    class Line {
      units: number;
      start: Point;
      end: Point;
      currentDrawPoint: Point;
      children: number;
      finishedDrawing: boolean;
      parent: number;
      angle: number;
      constructor(start, end) {
        this.units = 1;
        this.start = start;
        this.end = end;
        this.currentDrawPoint = Object.create(start);
        this.children = 0;
        this.finishedDrawing = false;
        this.parent = undefined;
        stroke(255, 0, 0);
        strokeWeight(3);
        point(this.end.x, this.end.y);
        strokeWeight(1);
        stroke(0);
        this.angle = atan2(
          this.end.y - this.start.y,
          this.end.x - this.start.x
        );
        // console.log('ANGLE', this.angle)
      }
      // Method
      drawNextStep() {
        const nextPoint = new Point(cos(this.angle), sin(this.angle));
        // console.log('IS EQUAL', this.currentDrawPoint.round())
        if (this.currentDrawPoint.round().isEqual(this.end.round())) {
          this.finishedDrawing = true;
          // console.log('STOPPED DRAWING LINE', this.start, this.end)
        } else {
          this.currentDrawPoint.sum(nextPoint);
          point(this.currentDrawPoint.x, this.currentDrawPoint.y);
          // console.log('CURRENT', this.currentDrawPoint)
          // console.log('END', this.end)
        }
      }
    }

    class Point {
      x: number;
      y: number;
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      sum(point) {
        this.x += point.x;
        this.y += point.y;
      }
      isEqual(point) {
        return this.x === point.x && this.y === point.y;
      }
      round() {
        return new Point(Math.round(this.x), Math.round(this.y));
      }
      abs() {
        return new Point(Math.abs(this.x), Math.abs(this.y));
      }
    }

    // return mount(element, { setup, draw, keyPressed });
    return { setup, draw, keyPressed };
  }
);
