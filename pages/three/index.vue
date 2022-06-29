<template>
  <div
    class="container mx-auto flex justify-center items-center h-screen"
    @click="teste"
  >
    <div class="flex flex-col">
      Three JS2
      <div class="" ref="three"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import { CANVAS_SIZE } from "~/src/configs";
import ToMelt from "~/src/classes/toMelt";
const three = ref(null);
let isMoving = false;
let meltObjs = [];

const teste = () => {
  isMoving = true;
};

if (process.client) {
  onMounted(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(CANVAS_SIZE, CANVAS_SIZE);
    three.value.appendChild(renderer.domElement);

    // const light = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light);
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
    // torus.rotateOnAxis(Math.PI);
    // torus.rotateZ(Math.PI * 1.8);
    scene.add(torus);
    scene.add(shape);
    scene.add(shape2);
    scene.add(torus);
    shape.translateX(50);
    shape2.translateX(-50);
    shape.translateY(80);
    shape2.translateY(80);
    torus.translateY(20);

    // const light2 = new THREE.PointLight(0xff0000, 2, 100);
    // light2.position.set(0, 80, 100);
    // scene.add(light2);

    const light3 = new THREE.PointLight(0xff0000, 2, 210);
    light3.position.set(0, 40, 50);
    scene.add(light3);

    camera.position.z = 220;
    let l = 0.015;
    meltObjs.push(new ToMelt(shape));
    meltObjs.push(new ToMelt(shape2));

    let jest = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      if (isMoving) {
        jest++;
        if (jest >= 300) {
          meltObjs.push(new ToMelt(torus));
        }
        meltObjs.forEach((obj) => {
          obj.move();
        });
      }
      // cube.rotation.x += 0.001;
      shape.rotation.y += 0.005;
      shape2.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // piece.mount(canvas.value);
  });
  onUnmounted(() => {
    // piece.remove();
    // animate();
  });

  const twist = (geometry) => {
    const quaternion = new THREE.Quaternion();

    for (let i = 0; i < geometry.vertices.length; i++) {
      // a single vertex Y position
      const yPos = geometry.vertices[i].y;
      const twistAmount = 10;
      const upVec = new THREE.Vector3(0, 1, 0);

      quaternion.setFromAxisAngle(
        upVec,
        (Math.PI / 180) * (yPos / twistAmount)
      );

      geometry.vertices[i].applyQuaternion(quaternion);
    }

    // tells Three.js to re-render this mesh
    geometry.verticesNeedUpdate = true;
  };
}
</script>

<style>
canvas {
  @apply border;
  @apply border-black;
  /* border: 1px solid black; */
  visibility: visible !important;
}
</style>
