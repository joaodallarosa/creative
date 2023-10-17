import { P5I, p5i } from "p5i";
import createCanvas from "../../utils/create-canvas";
import { getCanvasSize } from "~~/src/configs";

export default (sketch: P5I) => {
  const badFeelings = [
    "Anxiety",
    "Sadness",
    "Loneliness",
    "Anger",
    "Guilt",
    "Shame",
    "Jewordusy",
    "Frustration",
    "Fear",
    "Regret",
    "Disappointment",
    "Insecurity",
    "Envy",
    "Resentment",
    "Boredom",
    "Stress",
    "Despair",
    "Helplessness",
    "Doubt",
    "Inadequacy",
  ];
  const CANVAS_SIZE = getCanvasSize();
  let dirtParticles = [];
  const GRAVITY = 0.1;
  let word;
  let startedTyping = false;
  const {
    background,
    random,
    stroke,
    frameRate,
    TWO_PI,
    beginShape,
    vertex,
    endShape,
    cos,
    sin,
    CLOSE,
    atan2,
    loadFont,
    loadImage,
  } = sketch;

  let buffer;
  let font;
  let coinImg;

  const preload = () => {
    font = loadFont("/creative/fonts/flicker.otf");
    coinImg = loadImage("/creative/images/coin.png");
  };

  const setup = ({
    createGraphics,
    fill,
    textSize,
    textAlign,
    CENTER,
    textFont,
    pixelDensity,
    image,
  }) => {
    pixelDensity(1);
    word = random(badFeelings);
    createCanvas(sketch);
    fill(0);
    textSize(CANVAS_SIZE / 7);
    textAlign(CENTER, CENTER);
    textFont(font);
    buffer = createGraphics(CANVAS_SIZE, CANVAS_SIZE);
    buffer.fill(0);
    stroke(60);
    buffer.stroke(60);
    frameRate(60);
  };
  const draw = ({ background, fill, text, image }) => {
    background(255);
    image(coinImg, CANVAS_SIZE / 2 - 100, CANVAS_SIZE / 2 - 100, 200, 200);

    // fill(136, 8, 8);
    // stroke(136, 8, 8);
    // text(word, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
    // fill(0)
    // stroke(60);
    image(buffer, 0, 0);
    dirtParticles
      .sort((a, b) => a.sizeDraw - b.sizeDraw)
      .forEach((particle) => {
        particle.updatePhysics();
        polygon(particle.x, particle.y, particle.sizeDraw, particle.nPoints);
      });
  };

  const mousePressed = () => {
    let particles = random(50, 200);
    const spawnPoint = random(spawnPositions);
    for (let i = 0; i < particles; i++) {
      dirtParticles.push(
        new Dirt(
          random(spawnPoint.xFrom, spawnPoint.xTo),
          random(spawnPoint.yFrom, spawnPoint.yTo)
        )
      );
    }
    // On Mouse Position
    // dirtParticles.push(new Dirt(MOUSEX, MOUSEY));
    // let particles = random(20, 300);
    // for (let i = 0; i < particles; i++) {
    //   dirtParticles.push(
    //     new Dirt(MOUSEX + random(-200, 200), MOUSEY + random(-200, 200))
    //   );
    // }
  };

  const keyPressed = () => {
    if (
      (sketch.keyCode >= 65 && sketch.keyCode <= 90) ||
      sketch.keyCode === 32
    ) {
      // Any Letter or Space
      if (!startedTyping) {
        word = "";
        startedTyping = true;
      }
      word = word.concat(sketch.key);
    }

    if (sketch.keyCode === 8) {
      // Backspace
      word = word.slice(0, -1);
    }

    if (sketch.keyCode === 13) {
      // Enter
      let particles = random(20, 200);
      const spawnPoint = random(spawnPositions);
      for (let i = 0; i < particles; i++) {
        dirtParticles.push(
          new Dirt(
            random(spawnPoint.xFrom, spawnPoint.xTo),
            random(spawnPoint.yFrom, spawnPoint.yTo)
          )
        );
      }
    }
  };

  const spawnPositions = [
    {
      xFrom: -100,
      xTo: -80,
      yFrom: 0,
      yTo: CANVAS_SIZE,
    },
    {
      xFrom: CANVAS_SIZE + 80,
      xTo: CANVAS_SIZE + 100,
      yFrom: 0,
      yTo: CANVAS_SIZE,
    },
    {
      xFrom: 0,
      xTo: CANVAS_SIZE,
      yFrom: -100,
      yTo: -80,
    },
    {
      xFrom: 0,
      xTo: CANVAS_SIZE,
      yFrom: CANVAS_SIZE + 80,
      yTo: CANVAS_SIZE + 100,
    },
  ];

  class Dirt {
    x: number;
    y: number;
    zPos: number;
    size: number = 10;
    sizeDraw: number;
    acceleration: number = 0;
    slideVelocity: number;
    slideX: number;
    slideY: number;
    friction: number;
    still: Boolean = false;
    nPoints: number;
    angle: number;
    constructor(x, y) {
      this.x = x;
      this.y = y;
      const endX = CANVAS_SIZE / 2 + random(-200, 200);
      const endY = CANVAS_SIZE / 2 + random(-200, 200);
      this.angle = atan2(endY - this.y, endX - this.x);

      this.slideX = cos(this.angle);
      this.slideY = sin(this.angle);
      this.zPos = random(40, 55);
      this.sizeDraw = this.size + this.zPos;
      this.size = random(10, 50);
      this.slideVelocity = random(5, 30) / (this.size / 11);
      this.friction = this.size * 0.1;
      this.nPoints = random(3, 8);
    }
    updatePhysics() {
      if (this.still) return;
      if (this.zPos >= 0) {
        this.acceleration += GRAVITY;
        this.zPos -= this.acceleration;
        this.sizeDraw = this.size + this.zPos;
      } else {
        if (this.slideVelocity > 0) {
          this.slideVelocity -= this.friction;
        } else {
          this.slideVelocity = 0;
          this.still = true;
          bufferPolygon(this.x, this.y, this.sizeDraw, this.nPoints);
          dirtParticles = dirtParticles.filter((obj) => obj !== this);
        }
      }
      this.x += this.slideVelocity * this.slideX;
      this.y += this.slideVelocity * this.slideY;
    }
  }

  const polygon = (x, y, radius, npoints) => {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  };

  const bufferPolygon = (x, y, radius, npoints) => {
    let angle = TWO_PI / npoints;
    buffer.beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      buffer.vertex(sx, sy);
    }
    buffer.endShape(CLOSE);
  };

  return { setup, draw, mousePressed, keyPressed, preload };
};
