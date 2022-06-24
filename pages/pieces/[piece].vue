<template>
  <div>
    <NuxtLink to="/">
      <button>Back</button>
    </NuxtLink>
    <h1>{{ title }}</h1>
    <div ref="canvas"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const canvas = ref(null);
const route = useRoute();
let title = ''

if (process.client) {
  const pieces = await import("../../src/pieces");
  const piece = pieces.default(route.params.piece as string);
  const { title: pieceTitle } = piece;
  title = pieceTitle
  onMounted(() => {
    piece.mount(canvas.value);
  });
  onUnmounted(() => {
    piece.remove();
  });
}
</script>

<style>
canvas {
  border: 1px solid black;
  visibility: visible !important;
}
</style>
