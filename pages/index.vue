<template>
  <div class="container mx-auto flex justify-center items-center h-screen">
    <!-- <h1 class="font-bold text-gray-600 text-lg">Stuff</h1> -->

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
          <li class="inline-block hover:bg-black hover:text-white">
            <NuxtLink :to="`/three`">
              <button class="lowercase">
                confidence
              </button>
            </NuxtLink>
          </li>
          <li class="inline-block hover:bg-black hover:text-white">
            <NuxtLink :to="`/fragment`">
              <button class="lowercase">
                fragment
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
const canvas = ref(null);
let list = [];

if (process.client) {
  const { pieces } = await import("~~/src/pieces");
  console.log("PIECES", pieces);
  list = pieces;
  onMounted(() => {
    console.log(window.innerWidth, window.innerHeight);
  });
}
</script>
