<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import "./style.css";
import MovieDetail from "./components/MovieDetail.vue"



// https://api.themoviedb.org/3/movie/popular?api_key=e1f4d9fbcc4b63dae869263332a05d5f&sort_by=popularity
// https://api.themoviedb.org/3/movie/{id}?api_key=e1f4d9fbcc4b63dae869263332a05d5f

async function fetchMovie() {
  const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e1f4d9fbcc4b63dae869263332a05d5f&sort_by=popularity")
  if (!response.ok) {
    throw ("some error")
  }
  const data = await response.json()
  return data
}

const { data, isLoading, isError } = useQuery({
  queryKey: ["movies"],
  queryFn: fetchMovie,
});

</script>

<template>
  <header class="p-4">
    <h1 class="">Some App</h1>
  </header>
  <main class="p-4">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">Error!</div>
    <ul v-else class="flex gap-2 flex-wrap">
      <li v-for="thing in data.results" :key="thing.id">
        <MovieDetail :title="thing.title" :popularity="thing.popularity"
          :poster_path="thing.poster_path" />
      </li>
    </ul>

  </main>
</template>
