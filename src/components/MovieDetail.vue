<script setup lang="ts">

const props = defineProps({
  title: String,
  popularity: Number,
  poster_path: String
})
</script>
<template>
  <div class="flex flex-col gap-2 max-w-32">
    <img :src="`https://image.tmdb.org/t/p/w500/${props.poster_path}`" />
    <div> {{ title }} {{ popularity }}</div>
  </div>
</template>
