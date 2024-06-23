<script setup lang="ts">
import { useRoute } from "vue-router";
import { StarWarsEntities } from "../api/star-wars"

const route = useRoute();
const entity = route.path.split("/")[1] as StarWarsEntities

console.log(entity);

</script>

<template>
<div className="text-sm breadcrumbs">
  <ul>
    <li>
      <RouterLink :to="`/${entity}`">{{ entity }}</RouterLink>
      </li>
  </ul>
</div>
</template>

