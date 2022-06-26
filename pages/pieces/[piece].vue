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
      <!-- <h1>{{ title }}</h1> -->
      <div class="w-[700px] h-[700px] border-black border" ref="canvas"></div>
      <div class="text-right">'Space' to start</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
// import pieces from "../../src/pieces";
const canvas = ref(null);
const route = useRoute();
let title = "";
let reset

if (process.client) {
  const pieces = await import("../../src/pieces");
  const piece = pieces.default(route.params.piece as string);
  const { title: pieceTitle } = piece;
  title = pieceTitle;
  onMounted(() => {
    piece.mount(canvas.value);
  });
  onUnmounted(() => {
    piece.remove();
  });
  reset = () => {
    piece.remove();
    piece.mount(canvas.value);
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
