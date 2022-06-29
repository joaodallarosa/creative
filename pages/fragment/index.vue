<template>
  <div
    class="container mx-auto flex justify-center items-center h-screen"
    @click="teste"
  >
    <div class="flex flex-col">
      Fragment Melt
      <div class="" ref="three"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
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
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(CANVAS_SIZE, CANVAS_SIZE);
    three.value.appendChild(renderer.domElement);

    const loader = new SVGLoader();
    const fragmentObj = new THREE.Group();

    // load a SVG resource
    loader.load(
      // resource URL
      "/images/fragment.svg",
      // called when the resource is loaded
      function (data) {
        const paths = data.paths;

        for (let i = 0; i < paths.length; i++) {
          const path = paths[i];

          const material = new THREE.MeshToonMaterial({
            // color: path.color,
            color: "black",
            // side: THREE.DoubleSide,
            depthWrite: false,
            wireframe: true,
          });

          const shapes = SVGLoader.createShapes(path);

          for (let j = 0; j < shapes.length; j++) {
            const shape = shapes[j];
            const extrudeSettings = {
              steps: 1,
              depth: 60,
              bevelEnabled: true,
              bevelThickness: 10,
              bevelSize: 1,
              bevelOffset: 0,
              bevelSegments: 1,
            };

            const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
            const mesh = new THREE.Mesh(geometry, material);
            fragmentObj.add(mesh);
          }
        }

        fragmentObj.translateX(-480);
        fragmentObj.translateY(250);
        fragmentObj.rotateX(Math.PI);
        scene.add(fragmentObj);

        meltObjs.push(new ToMelt(fragmentObj.children[5]));
        meltObjs.push(new ToMelt(fragmentObj.children[6]));
        meltObjs.push(new ToMelt(fragmentObj.children[7]));
        meltObjs.push(new ToMelt(fragmentObj.children[8]));
      },
      // called when loading is in progresses
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened", error);
      }
    );

    const light3 = new THREE.PointLight(0xff0000, 2, 210);
    light3.position.set(0, 40, 50);
    scene.add(light3);

    camera.position.z = 820;
    let l = 0.015;
    let ran = false;
    const startSecondLine = () => {
      setTimeout(() => {
        meltObjs.push(new ToMelt(fragmentObj.children[0]));
        meltObjs.push(new ToMelt(fragmentObj.children[1]));
        meltObjs.push(new ToMelt(fragmentObj.children[2]));
        meltObjs.push(new ToMelt(fragmentObj.children[3]));
        meltObjs.push(new ToMelt(fragmentObj.children[4]));
      }, 3500);
      ran = true;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (isMoving) {
        if (!ran) {
          startSecondLine();
        }
        meltObjs.forEach((obj) => {
          obj.move();
        });
      }
      renderer.render(scene, camera);
    };
    animate();
  });
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
