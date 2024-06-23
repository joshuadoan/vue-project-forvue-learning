import { createWebHistory, createRouter } from "vue-router";

import Person from "./components/Person.vue";
import Planet from "./components/Planet.vue";
import People from "./components/People.vue";
import Planets from "./components/Planets.vue";

const routes = [
  {
    path: "/",
    redirect: {
      name: "people",
    },
  },
  { path: "/people", component: People, name: "people" },
  { path: "/planets", component: Planets },
  { path: "/people/:id", component: Person },
  { path: "/planets/:id", component: Planet },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
