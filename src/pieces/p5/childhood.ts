import { Piece } from "../../classes/piece";
import createCanvas from "../../utils/create-canvas";
import { CANVAS_SIZE } from "../../configs";

export default new Piece("Boyhood", "boyhood", (sketch) => {
  var x = 0;
  var JOAO;
  var go = false;

  const LINE_LENGTH_MIN = 4;
  const LINE_LENGTH_MAX = 14;
  const STROKE_WEIGHT = 1;
  const LINE_MAX_CHILDREN = 2;

  const ANGLE_MIN = -1;
  const ANGLE_MAX = 1;

  const SPEED = 30;

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
    get,
  } = sketch;

  const setup = () => {
    createCanvas(sketch);
    stroke(0);
    strokeWeight(STROKE_WEIGHT);
    JOAO = new Human();
  };

  const draw = () => {
    if (go) {
      for (let i = 0; i < SPEED; i++) {
        JOAO.drawStep();
      }
      // go = false
    }
  };

  const keyPressed = () => {
    go = true;
  };

  class Human {
    lines: Line[];
    line: Line;
    currentLine: Line;
    constructor() {
      this.lines = [
        new Line(
          new Point(CANVAS_SIZE / 2, CANVAS_SIZE / 2),
          new Point(CANVAS_SIZE / 2, CANVAS_SIZE / 2 + 20)
        ),
      ];
      this.currentLine = this.lines[0];
    }
    drawStep() {
      if (!this.currentLine.finishedDrawing) {
        this.currentLine.drawNextStep();
      } else {
        if (
          this.lines[this.currentLine.parent] &&
          this.lines[this.currentLine.parent].children < LINE_MAX_CHILDREN
        ) {
          this.createNewLine(this.lines[this.currentLine.parent]);
        } else {
          this.currentLine = this.getLineWithLessThanTwoChildren();
          if (!this.currentLine) {
            go = false;
            console.log("FINISHED");
            return;
          }
          this.createNewLine(this.currentLine);
        }
      }
    }
    createNewLine(from) {
      // var r = random(255);
      // var g = random(255);
      // var b = random(255);
      // var a = 255;

      // stroke(r,g,b,a)
      from.children += 1;
      let angle = from.angle + random(ANGLE_MIN, ANGLE_MAX);
      let length = int(random(LINE_LENGTH_MIN, LINE_LENGTH_MAX));
      let x = length * Math.cos(angle);
      let y = length * Math.sin(angle);
      let novoFinal = new Point(x, y);
      novoFinal.sum(from.end);

      let newLine = new Line(Object.create(from.end), novoFinal);
      newLine.parent = this.lines.indexOf(from);

      this.lines.push(newLine);
      this.currentLine = newLine;
    }
    getLineWithLessThanTwoChildren() {
      const teste = this.lines.filter(
        (line) => line.children < LINE_MAX_CHILDREN && !line.steril
      );
      const voltar = teste[int(random(teste.length - 1))];
      return voltar;
    }
  }

  class Line {
    units: number;
    start: Point;
    end: Point;
    currentDrawPoint: Point;
    children: number;
    finishedDrawing: boolean;
    parent: number;
    steril: boolean;
    angle: number;
    nextPoint: Point;
    constructor(start, end) {
      this.units = 1;
      this.start = start;
      this.end = end;
      this.currentDrawPoint = Object.create(start);
      this.children = 0;
      this.finishedDrawing = false;
      this.parent = undefined;
      this.steril = false;
      this.angle = atan2(this.end.y - this.start.y, this.end.x - this.start.x);
      this.nextPoint = new Point(cos(this.angle), sin(this.angle));
    }
    drawNextStep() {
      this.checkCollision();
      if (this.currentDrawPoint.round().isEqual(this.end.round())) {
        this.finishedDrawing = true;
      } else {
        this.currentDrawPoint.sum(this.nextPoint);
        point(this.currentDrawPoint.x, this.currentDrawPoint.y);
      }
    }
    checkCollision() {
      const DISTANCE = 5;
      let teste = new Point(this.currentDrawPoint.x, this.currentDrawPoint.y);
      for (let i = 0; i < DISTANCE; i++) {
        teste.sum(this.nextPoint);
        if (
          !arrayEquals(get(teste.x, teste.y), [255, 255, 255, 255]) ||
          teste.x < 0 ||
          teste.x > CANVAS_SIZE ||
          teste.y < 0 ||
          teste.y > CANVAS_SIZE
        ) {
          this.finishedDrawing = true;
          this.end = this.currentDrawPoint;
          this.steril = true;
          return;
        }
      }
    }
  }

  const arrayEquals = (a, b) => {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  };

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

  return { setup, draw, keyPressed };
});
