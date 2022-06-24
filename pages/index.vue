<template>
  <div class="container mx-auto bg-gray-300 p-8">
    <h1 class="font-bold text-gray-600 text-lg">Stuff</h1>
    <!-- <ul>
      <li v-for="piece in list" :key="piece.url">
        <NuxtLink :to="`/pieces/${piece.url}`">
          <button>
            {{ piece.title }}
          </button>
        </NuxtLink>
      </li>
    </ul> -->
  </div>
</template>

<script setup lang="ts">
// import { onMounted } from "vue";
// const canvas = ref(null);
// let list = []

// if (process.client) {
//   const {pieces} = await import("~~/src/pieces");
//   console.log('PIECES', pieces)
//   list = pieces
//   onMounted(() => {
//     console.log(window.innerWidth, window.innerHeight);
//   });
// }
</script>
