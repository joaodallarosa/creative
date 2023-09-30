<template>
  <div class="container mx-auto flex justify-center items-center h-screen">
    <div class="flex flex-col">
      <div>
        <NuxtLink to="/">
          <button class="px-5 py-2 hover:bg-black hover:text-white select-none">
            Back
          </button>
        </NuxtLink>

        <button
          tabindex="-1"
          @click="reset"
          class="display px-5 py-2 hover:bg-black hover:text-white select-none focus:bg-red"
        >
          Reset
        </button>
      </div>
      <!-- <h1>{{ title }}</h1> -->
      <div class="w-[700px] h-[700px]" ref="canvas"></div>
      <div class="text-right select-none">{{instructions}}</div>
      <div class="select-none">{{title}}</div>
      <div class="select-none">{{description}}</div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const canvas = ref(null);
const route = useRoute();
let title = "";
let description = "";
let instructions = "";
let reset;

if (process.client) {
  //Adapt to see if it's a p5 or threejs piece
  const pieces = await import("~/src/pieces");
  const piece = pieces.default(route.params.piece as string);
  const { title: pieceTitle, description: pieceDescription, instructions: pieceInstructions } = piece;
  title = pieceTitle;
  description = pieceDescription
  instructions = pieceInstructions
  onMounted(() => {
    piece.mount(canvas.value);
  });
  onUnmounted(() => {
    piece.remove(canvas.value);
  });
  reset = () => {
    piece.remove(canvas.value);
    piece.mount(canvas.value);
    canvas.value.children[0].focus()
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
