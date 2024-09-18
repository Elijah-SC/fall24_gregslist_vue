<script setup>
import { housesService } from "@/services/HousesService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { onMounted } from "vue";


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

  <body>
    <h1>Welcome to the Houses Page</h1>
  </body>
</template>


<style lang="scss" scoped></style>