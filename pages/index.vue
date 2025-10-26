<template>
  <div class="mx-auto flex justify-center items-center h-screen w-screen bg-white">
    <div class="flex flex-col">
      <div :class="`border-black border p-5 bg-white`">
        <ul class="grid grid-cols-2 gap-x-10 gap-y-5">
          <li class="inline-block hover:bg-black hover:text-white" v-for="piece in list" :key="piece.url">
            <NuxtLink class="lowercase" :to="`/pieces/${piece.url}`">
              {{ piece.title }}
            </NuxtLink>
          </li>
          <li class="inline-block hover:bg-black hover:text-white">
            <NuxtLink class="lowercase" to="/nuggets">
              what's in the box?
            </NuxtLink>
          </li>
          <li class="inline-block hover:bg-black hover:text-white">
            <NuxtLink class="lowercase" to="/clinamen">
              clinamen
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let list = [];

if (process.client) {
  const { pieces } = await import("~~/src/pieces");
  list = pieces;
}
</script>
