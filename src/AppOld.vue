<script setup lang="ts">
import "./style.css";
</script>

<template>
  <header class="p-4">
    <h1 class="">Welcome to Star Wars</h1>
  </header>
  <nav class="navbar bg-primary text-primary-content">
    <RouterLink to="/people" class="btn btn-ghost text-xl " >People</RouterLink>
    <RouterLink to="/planets" class="btn btn-ghost text-xl " >Planets</RouterLink>
  </nav>
  <main class="p-4">
    <RouterView />
  </main>
</template>
