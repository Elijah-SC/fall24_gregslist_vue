<script setup>
import { AppState } from "@/AppState.js";
import { housesService } from "@/services/HousesService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted } from "vue";

const houses = computed(() => AppState.houses)

onMounted(() =>
  getHouses()
)

async function getHouses() {
  try {
    await housesService.getHouses()
  } catch (error) {
    Pop.meow(error)
    logger.log(error)
  }
}
</script>


<template>

  <body class="container">
    <section class="row">
      <h1>Welcome to the Houses Page</h1>
      <div v-for="house in houses" :key="house.id" class="col-12">
        {{ house }}
      </div>
    </section>

  </body>
</template>


<style lang="scss" scoped></style>