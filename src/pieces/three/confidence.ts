import { ThreePiece } from "../../classes/threePiece";
import * as THREE from "three";
import ToMelt from "~/src/classes/toMelt";

// import { P5I, p5i } from "p5i";
// import createCanvas from "../utils/create-canvas";
// import { Image } from "p5";
import { CANVAS_SIZE } from "../../configs";

export default new ThreePiece("Confidence :)", "confidence", (element) => {
  let meltObjs = [];

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(CANVAS_SIZE, CANVAS_SIZE);
  console.log("ASMON", element);
  element.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(32, 32, 32);
  const material = new THREE.MeshToonMaterial({
    color: "black",
    // flatShading: true,
    // color: 0xffff00,
    // wireframe: true,
  });
  const shape = new THREE.Mesh(geometry, material);
  const shape2 = new THREE.Mesh(geometry, material);

  const torusGeometry = new THREE.TorusGeometry(120, 18, 36, 30, -Math.PI);
  const torusMaterial = new THREE.MeshToonMaterial({
    color: "black",
    flatShading: true,
    // wireframe: true,
  });
  const torus = new THREE.Mesh(torusGeometry, torusMaterial);
  scene.add(torus);
  scene.add(shape);
  scene.add(shape2);
  scene.add(torus);
  shape.translateX(50);
  shape2.translateX(-50);
  shape.translateY(80);
  shape2.translateY(80);
  torus.translateY(20);

  const light3 = new THREE.PointLight(0xff0000, 2, 210);
  light3.position.set(0, 40, 50);
  scene.add(light3);

  camera.position.z = 220;
  let l = 0.015;
  meltObjs.push(new ToMelt(shape));
  meltObjs.push(new ToMelt(shape2));

  let jest = 0;
  let reqAnim;
  const animate = () => {
    reqAnim = requestAnimationFrame(animate);
    jest++;
    if (jest >= 300) {
      meltObjs.push(new ToMelt(torus));
    }
    meltObjs.forEach((obj) => {
      obj.move();
    });
    shape.rotation.y += 0.005;
    shape2.rotation.y += 0.005;
    renderer.render(scene, camera);
  };
  animate();

  const reset = () => {
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
    renderer.dispose();
    scene.remove();
    cancelAnimationFrame(reqAnim);
    console.log("SCENE", scene);
  };
});
