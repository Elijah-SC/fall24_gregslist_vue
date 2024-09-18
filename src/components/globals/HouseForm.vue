<script setup>
import { housesService } from "@/services/HousesService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { ref } from "vue";

const currentYear = new Date().getFullYear()

const editableHouseData = ref({
  bedrooms: ``,
  bathrooms: ``,
  levels: ``,
  imgUrl: ``,
  year: currentYear,
  price: 0,
  description: ``,
})



async function createHouse() {
  try {
    const houseData = editableHouseData.value
    await housesService.createHouse(houseData)
  }
  catch (error) {
    Pop.meow(error);
    logger.log(error)
  }
}
</script>


<template>

  <body class="my-3 p-2">

    <form @submit.prevent="createHouse()" action="" class="row text-center justify-content-around">

      <div class="col-4 form-floating mb-3 p-1">
        <input v-model="editableHouseData.levels" required type="text" class="form-control" id="levels" name="levels"
          placeholder="name@example.com" maxlength="300">
        <label for="floatingInput">levels</label>
      </div>
      <div class="col-4 form-floating mb-3 p-1">
        <input v-model="editableHouseData.price" required type="number" class="form-control" id="price" name="price"
          placeholder="name@example.com" minlength="0" maxlength="100000000000000">
        <label for="floatingInput">Price</label>
      </div>
      <div class="col-4 form-floating mb-3 p-1">
        <input v-model="editableHouseData.bedrooms" required type="number" class="form-control" id="bedrooms"
          name="bedrooms" placeholder="name@example.com" maxlength="1000">
        <label for="floatingInput">Bedrooms</label>
      </div>
      <div class="col-4 form-floating mb-3 p-1">
        <input v-model="editableHouseData.year" required type="number" class="form-control" id="year" name="year"
          placeholder="name@example.com" maxlength="100">
        <label for="floatingInput">Year</label>
      </div>
      <div class="col-4 form-floating mb-3 p-1">
        <input v-model="editableHouseData.bathrooms" required type="number" class="form-control" id="bathrooms"
          name="bathrooms" placeholder="name@example.com" maxlength="1000">
        <label for="floatingInput">Bathrooms</label>
      </div>
      <div class="col-4 form-floating mb-3 p-1">
        <input v-model="editableHouseData.description" required type="text" class="form-control" id="description"
          name="description" placeholder="name@example.com" maxlength="5000">
        <label for="floatingInput">Description</label>
      </div>
      <div class="col-4 form-floating mb-3 p-1">
        <input v-model="editableHouseData.imgUrl" required type="url" class="form-control" id="imgUrL" name="imgUrL"
          placeholder="name@example.com" minlength="10" maxlength="500">
        <label for="floatingInput">Img URL</label>
      </div>
      <div class="col-12 form-floating mb-3">
        <button type="submit" class="btn btn-outline-primary">Submit</button>
      </div>
    </form>

  </body>
</template>


<style lang="scss" scoped></style>