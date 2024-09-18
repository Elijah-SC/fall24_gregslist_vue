<script setup>
import { AppState } from "@/AppState.js";
import HouseForm from "@/components/globals/HouseForm.vue";
import HouseListing from "@/components/globals/HouseListing.vue";
import { housesService } from "@/services/HousesService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted } from "vue";

const houses = computed(() => AppState.houses)
const account = computed(() => AppState.account)

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

  <body class="container-fluid">
    <section class="row justify-content-center">
      <h1>Welcome to the Houses Page</h1>
      <div v-if="account">
        <HouseForm />
      </div>
      <div class="col-9" v-for="house in houses" :key="house.id">
        <HouseListing :houseProp="house" />
      </div>
    </section>

  </body>
</template>


<style lang="scss" scoped>
body {
  background-color: white;
}
</style>