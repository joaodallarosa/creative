<template>
  <div
    class="container mx-auto flex justify-center h-screen w-full my-[20px] lg:my-[30px]"
  >
    <div class="flex flex-col max-w-full">
      <div>
        <NuxtLink to="/">
          <button class="px-5 py-2 hover:bg-black hover:text-white select-none">
            Back
          </button>
        </NuxtLink>

        <button
          tabindex="-1"
          @click="reset"
          class="display px-5 py-2 hover:bg-black hover:text-white select-none"
        >
          Reset
        </button>
      </div>
      <div
        class="max-w-full"
        :class="`w-[${canvasSize}px] h-[${canvasSize}px]`"
        ref="canvas"
      ></div>
      <div class="text-right select-none" v-html="instructions" />
      <div class="select-none">{{ title }}</div>
      <span class="select-none" v-html="description" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { CANVAS_SIZE } from "~~/src/configs";
const canvas = ref(null);
const route = useRoute();
let title = "";
let description = "";
let instructions = "";
let reset;
let canvasSize = ref(0);

if (process.client) {
  //Adapt to see if it's a p5 or threejs piece
  const pieces = await import("~/src/pieces");
  const piece = pieces.default(route.params.piece as string);
  const {
    title: pieceTitle,
    description: pieceDescription,
    instructions: pieceInstructions,
  } = piece;
  title = pieceTitle;
  description = pieceDescription;
  instructions = pieceInstructions;
  // console.log("ALOU", window.innerWidth);
  if (window.innerWidth < CANVAS_SIZE || window.innerHeight < CANVAS_SIZE) {
    canvasSize.value = Math.min(window.innerWidth, window.innerHeight);
    console.log("Recalculate size...", canvasSize);
  }
  onMounted(() => {
    piece.mount(canvas.value);
  });
  onUnmounted(() => {
    piece.remove(canvas.value);
  });
  reset = () => {
    piece.remove(canvas.value);
    piece.mount(canvas.value);
    canvas.value.children[0].focus();
  };
}
</script>

<style>
canvas {
  @apply border;
  @apply border-black;
  max-width: 100%;
  /* border: 1px solid black; */
  visibility: visible !important;
}
</style>
