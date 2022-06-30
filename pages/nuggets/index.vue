<template>
  <div class="container mx-auto flex justify-center items-center h-screen">
    <div class="flex flex-col">
      <div>
        <NuxtLink to="/">
          <button class="px-5 py-2 hover:bg-black hover:text-white">
            Back
          </button>
        </NuxtLink>

        <button
          @click="reset"
          class="display px-5 py-2 hover:bg-black hover:text-white"
        >
          Reset
        </button>
      </div>
      <div class="scene">
        <div class="cube" ref="cubeRef" style="display: none">
          <div class="cube__face cube__face--front" ref="front">
            SURPRISE INSIDE!
          </div>
          <div class="cube__face cube__face--back" ref="back"></div>
          <div class="cube__face cube__face--right" ref="right"></div>
          <div class="cube__face cube__face--left" ref="left"></div>
          <div class="cube__face cube__face--bottom" ref="bottom"></div>
          <div class="cube__face cube__face--top" ref="top">
            <img src="/images/pollos.png" />
          </div>
          <div class="cube__face cube__face--inside">
            THIS WAS MADE ONLY WITH CSS
          </div>
          <div class="cube__face cube__face--left-label"></div>
          <div class="cube__face cube__face--rigt-label"></div>
        </div>
      </div>
      <p class="radio-group" ref="radio">
        <label>
          <input type="radio" name="rotate-cube-side" value="front" checked />
          front
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="right" /> right
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="back" /> back
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="left" /> left
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="top" /> top
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="bottom" /> bottom
        </label>

        <button
          class="px-5 py-2 hover:bg-black hover:text-white"
          @click="openBox"
        >
          Open the Box!
        </button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
let openBox;
let reset;
let radio = ref(null);
let cubeRef = ref(null);
var top = ref(null);
var right = ref(null);
var bottom = ref(null);
var left = ref(null);
var front = ref(null);
var back = ref(null);

const BOX_WIDTH = 700;
const BOX_HEIGHT = 180;
const BOX_DEPTH = 500;

if (process.client) {
  openBox = () => {
    const topEl = top.value;
    topEl.classList.add("cube__face--top--opened");
    topEl.style.transform = `translateZ(${
      -BOX_DEPTH / 2
    }px) translateY(0px) rotateX(120deg)`;
  };
  onMounted(() => {
    var cube = cubeRef.value;
    var radioGroup = radio.value;
    var currentClass = "";

    const changeSide = () => {
      // if (!radioGroup) return;
      var checkedRadio = radioGroup.querySelector(":checked");
      var showClass = "show-" + checkedRadio.value;
      if (currentClass) {
        cube.classList.remove(currentClass);
      }
      cube.classList.add(showClass);
      currentClass = showClass;
    };
    // set initial side
    changeSide();

    const createBox = (boxWidth, boxHeight, boxDepth) => {
      // FRONT
      const faceFront = front.value;
      faceFront.style.height = `${boxHeight}px`;
      faceFront.style.width = `${boxWidth}px`;
      faceFront.style.background = `#e32929`;
      faceFront.style.transform = `rotateY(0deg) translateZ(${boxDepth / 2}px)`;

      //RIGHT
      const faceRight = right.value;
      faceRight.style.height = `${boxHeight}px`;
      faceRight.style.width = `${boxDepth}px`;
      faceRight.style.background = `#cc2424`;
      faceRight.style.transform = `rotateY(90deg) translateZ(${
        boxWidth - boxDepth / 2
      }px)`;

      //LEFT
      const faceLeft = left.value;
      faceLeft.style.height = `${boxHeight}px`;
      faceLeft.style.width = `${boxDepth}px`;
      faceLeft.style.background = `#cc2424`;
      faceLeft.style.transform = `rotateY(90deg) translateZ(${
        -boxDepth / 2
      }px)`;

      //BACK
      const faceBack = back.value;
      faceBack.style.height = `${boxHeight}px`;
      faceBack.style.width = `${boxWidth}px`;
      faceBack.style.background = `#b52020`;
      faceBack.style.transform = `rotateY(180deg) translateZ(${
        boxDepth / 2
      }px)`;

      //BOTTOM
      const faceBottom = bottom.value;
      faceBottom.style.height = `${boxDepth}px`;
      faceBottom.style.width = `${boxWidth}px`;
      faceBottom.style.background = "#b52020";
      faceBottom.style.transform = `rotateX(90deg) translateZ(${
        boxDepth / 2 - boxHeight
      }px) translateX(${0}px)`;

      //TOP
      const faceTop = top.value;
      faceTop.style.height = `${boxDepth}px`;
      faceTop.style.width = `${boxWidth}px`;
      faceTop.style.background = "yellow";
      // faceTop.style.transformOrigin = 'top center';
      faceTop.style.transform = `translateZ(${
        -boxDepth / 2
      }px) translateY(0px) rotateX( 90deg)`;
    };

    reset = () => {
      window.location.reload();
    };

    radioGroup.addEventListener("change", changeSide);
    createBox(BOX_WIDTH, BOX_HEIGHT, BOX_DEPTH);
    cubeRef.value.style.display = "block";
  });
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.scene {
  width: 700px;
  height: 700px;
  border: 1px solid black;
  perspective: 400px;
}

.cube {
  width: 200px;
  height: 50px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-800px);
  transition: transform 1s;
}

.cube.show-front {
  transform: translateZ(-300px) rotateY(20deg) translateY(300px) rotateX(-20deg);
}
.cube.show-right {
  transform: translateZ(-800px) rotateY(-60deg) translateY(300px)
    rotateX(-20deg);
}
.cube.show-back {
  transform: translateZ(-600px) rotateY(-190deg) translateY(800px)
    rotateX(-20deg);
}
.cube.show-left {
  transform: translateZ(-400px) rotateY(60deg) translateY(300px) rotateX(-20deg);
}
.cube.show-top {
  transform: translateZ(-400px) rotateX(-90deg);
}
.cube.show-bottom {
  transform: translateZ(-400px) translateY(300px) rotateX(90deg);
}

.cube__face {
  position: absolute;
  border: #222 solid 1px;
  /* width: 200px; */
  /* height: 200px; */
  /* border: 2px solid black; */
  /* line-height: 200px; */
  /* font-size: 40px; */
  /* font-weight: bold; */
  /* color: white; */
  /* text-align: center; */
}

/* .cube__face--front  { background: hsla(  0, 100%, 50%, 0.7); } */
/* .cube__face--right  { background: hsla( 60, 100%, 50%, 0.7); } */
/* .cube__face--back   { background: hsla(120, 100%, 50%, 0.7); } */
/* .cube__face--left   { background: hsla(180, 100%, 50%, 0.7); } */
/* .cube__face--top    { background: hsla(240, 100%, 50%, 0.7); } */
/* .cube__face--bottom { background: hsla(300, 100%, 50%, 0.7); } */

.cube__face--front {
  transform: rotateY(0deg) translateZ(100px);
  color: yellow;
  text-align: center;
  padding-top: 40px;
  font-size: 40px;
}
.cube__face--right {
  transform: rotateY(90deg) translateZ(100px);
}
.cube__face--back {
  transform: rotateY(180deg) translateZ(100px);
}
.cube__face--left {
  transform: rotateY(-90deg) translateZ(100px);
}
.cube__face--bottom {
  transform: rotateX(-90deg) translateZ(100px);
}
.cube__face--top {
  transform-origin: 50% top;
  transform: translateZ(-100px) translateY(0px) rotateX(90deg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.cube__face--inside {
  background-color: white;
  font-size: 40px;
  width: 700px;
}

.cube__face--top--opened {
  transition: transform 1s ease-out;
  transform-origin: 50% top;
  /* transform:  translateZ(-100px) translateY(0px) rotateX( 110deg) !important; */
}

label {
  margin-right: 10px;
}

.trapezoid {
  /* border-bottom: 200px solid red; */
  /* border-left: 25px solid transparent;
  border-right: 25px solid transparent; */
}
</style>
