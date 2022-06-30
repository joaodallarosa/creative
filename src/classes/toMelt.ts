import * as THREE from "three";

export default class ToMelt {
  obj: THREE.Mesh;
  yPoints: number[];
  toMove = [];
  groupCounter = 1;
  dripCounter = 0;
  speed = 0.015;
  speedIncrease = 0;
  dripsPerSec = 1;
  groupIncrease = 0;
  startGroupingAt = 0;
  frame = 0;
  constructor(obj: THREE.Mesh, options: ToMeltOptions) {
    this.obj = obj;
    const numbers = Array.from(
      Array(this.obj.geometry.attributes.position.array.length).keys()
    );
    this.yPoints = numbers.filter((n) => n % 3 === 1);

    const {
      speed,
      speedIncrease,
      dripsPerSec,
      groupIncrease,
      startGroupingAt,
    } = options;
    this.speed = speed;
    this.speedIncrease = speedIncrease;
    this.dripsPerSec = dripsPerSec;
    this.groupIncrease = groupIncrease;
    this.startGroupingAt = startGroupingAt;
  }
  addVerticeToMelt = (n: number) => {
    const at = Math.floor(Math.random() * this.yPoints.length);
    for (let i = 0; i < Math.floor(n); i++) {
      this.toMove.push(this.yPoints.splice(at, 1));
    }
  };

  move = () => {
    this.frame++;
    this.speed += this.speedIncrease;
    this.dripCounter += this.dripsPerSec;

    if (this.dripCounter >= 60) {
      this.addVerticeToMelt(this.groupCounter);
      if (this.frame / 60 >= this.startGroupingAt) {
        this.groupCounter += this.groupIncrease;
      }
      this.dripCounter = 0;
    }

    this.toMove.forEach((element) => {
      this.obj.geometry.attributes.position.array[element] -= this.speed;
    });

    this.obj.geometry.attributes.position.needsUpdate = true;
  };
}

export interface ToMeltOptions {
  speed: number;
  speedIncrease: number;
  dripsPerSec: number;
  groupIncrease: number;
  startGroupingAt: number;
}
