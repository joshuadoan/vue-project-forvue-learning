<script setup lang="ts">
import { useRoute } from 'vue-router'
import { StarWarsEntities, useEntity } from '../api/star-wars';



const route = useRoute();
const { setup }  = useEntity
const { isPending, isError, data, error, isFetching } = setup(route.path.split("/")[1] as StarWarsEntities, route.params.id as string)
</script>

<template>
{{  route.params.id }}
  <div v-if="isPending || isFetching">Loading...</div>
  <div v-else-if="isError">{{ error }}</div>
  <ul v-else>
    <li v-for="[key, val] in Object.entries(data)" :key="key">
      <b>{{ key }}</b>   {{ val }}
    </li>
  </ul>
</template>
