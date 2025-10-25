<template>
  <div class="max-w-full" :class="`w-[100vw] h-[100vh]`" ref="canvas"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const canvas = ref(null);
const route = useRoute();

if (process.client) {
  //Adapt to see if it's a p5 or threejs piece
  const pieces = await import("~/src/pieces");
  const piece = pieces.default(route.params.piece as string);
  const {
    title: pieceTitle,
    description: pieceDescription,
    instructions: pieceInstructions,
  } = piece;
  onMounted(() => {
    piece.mount(canvas.value);
  });
  onUnmounted(() => {
    piece.remove(canvas.value);
  });
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
