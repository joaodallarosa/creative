<template>
  <div class="container mx-auto flex justify-center items-center h-screen">
    <div class="flex flex-col">
      <div :class="`border-black border p-5`">
        <ul class="grid grid-cols-2 gap-x-10 gap-y-5">
          <li
            class="inline-block hover:bg-black hover:text-white"
            v-for="piece in list"
            :key="piece.url"
          >
            <NuxtLink :to="`/pieces/${piece.url}`">
              <button class="lowercase">
                {{ piece.title }}
              </button>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { CANVAS_SIZE } from "~/src/configs";
import { pieces } from '~/src/pieces';
const canvas = ref(null);
let list = [];
let threeList = [];

if (process.client) {
  // const { pieces } = await import("~~/src/pieces");
  // const { pieces: threePieces } = await import("~~/src/pieces/three");
  // console.log("PIECES", threePieces);
  list = pieces;
  // threeList = threePieces;
  onMounted(() => {
    console.log(window.innerWidth, window.innerHeight);
  });
}
</script>
