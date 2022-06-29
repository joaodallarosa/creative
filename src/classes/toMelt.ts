import * as THREE from "three";

export default class ToMelt {
  obj: THREE.Mesh;
  yPoints: number[];
  toMove = [];
  groupCounter = 1;
  dripCounter = 0;
  speed = 0.015;
  constructor(obj: THREE.Mesh) {
    this.obj = obj;
    const numbers = Array.from(
      Array(this.obj.geometry.attributes.position.array.length).keys()
    );
    this.yPoints = numbers.filter((n) => n % 3 === 1);
  }
  addVerticeToMelt = () => {
    const n = Math.floor(Math.random() * this.yPoints.length);
    this.toMove.push(this.yPoints.splice(n, 1));
  };

  move = () => {
    this.speed += 0.06;
    this.dripCounter += 10;

    if (this.dripCounter >= 100) {
      for (let i = 0; i < this.groupCounter; i++) {
        this.addVerticeToMelt();
      }
      this.groupCounter += 0.002;
      if (this.speed >= 15) {
        this.groupCounter += 8;
      }
      this.dripCounter = 0;
    }

    this.toMove.forEach((element) => {
      this.obj.geometry.attributes.position.array[element] -= this.speed;
    });

    this.obj.geometry.attributes.position.needsUpdate = true;
  };
}
