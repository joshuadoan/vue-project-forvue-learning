<script setup lang="ts">
import { useRoute } from "vue-router";
import  { getIdFromUrl, StarWarsEntities, useStarWarsEntities } from "../api/star-wars"


const route = useRoute();
const entity = route.path.split("/")[1] as StarWarsEntities

const { 
  isPending, 
  isError, 
  data, 
  error 
} = useStarWarsEntities.setup(entity)

</script>

<template>
<h1 class="text-2xl">{{ $route.path }}</h1>
  <div v-if="isPending">Loading...</div>
  <div v-else-if="isError">{{ error }}</div>
  <ul v-else>
    <li v-for="person in data.results" :key="person.name">
      <RouterLink class="" :to="`/planets/${getIdFromUrl(person.url)}`">{{ person.name }}</RouterLink>
    </li>
  </ul>


</template>

