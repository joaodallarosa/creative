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
import pieces from "../../src/pieces";
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);

const route = useRoute();
const piece = pieces(route.params.piece as string);
const { title } = piece;

onMounted(() => {
  piece.mount(canvas.value);
});

onUnmounted(() => {
  piece.remove();
});
</script>

<style>
canvas {
  border: 1px solid black;
  visibility: visible !important;
}
</style>
