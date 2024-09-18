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
    await housesService.createHosue()
  }
  catch (error) {
    Pop.meow(error);
    logger.log(error)
  }
}
</script>


<template>

  <body class="my-3 p-2">

    <form @submit="createHouse()" action="" class="row text-center justify-content-around">

      <div class="col-4 form-floating mb-3 p-1">
        <input required type="text" class="form-control" id="levels" name="levels" placeholder="name@example.com"
          maxlength="300">
        <label for="floatingInput">levels</label>
      </div>
      <div class="col-4 form-floating mb-3 p-1">
        <input required type="number" class="form-control" id="price" name="price" placeholder="name@example.com"
          minlength="0" maxlength="100000000000000">
        <label for="floatingInput">Price</label>
      </div>
      <div class="col-4 form-floating mb-3 p-1">
        <input required type="number" class="form-control" id="bedrooms" name="bedrooms" placeholder="name@example.com"
          maxlength="1000">
        <label for="floatingInput">Bedrooms</label>
      </div>
      <div class="col-4 form-floating mb-3 p-1">
        <input required type="number" class="form-control" id="year" name="year" placeholder="name@example.com"
          maxlength="100">
        <label for="floatingInput">Year</label>
      </div>
      <div class="col-4 form-floating mb-3 p-1">
        <input required type="number" class="form-control" id="bathrooms" name="bathrooms"
          placeholder="name@example.com" maxlength="1000">
        <label for="floatingInput">Bathrooms</label>
      </div>
      <div class="col-4 form-floating mb-3 p-1">
        <input required type="text" class="form-control" id="description" name="description"
          placeholder="name@example.com" maxlength="5000">
        <label for="floatingInput">Description</label>
      </div>
      <div class="col-4 form-floating mb-3 p-1">
        <input required type="url" class="form-control" id="imgUrL" name="imgUrL" placeholder="name@example.com"
          minlength="10" maxlength="500">
        <label for="floatingInput">Img URL</label>
      </div>
      <div class="col-12 form-floating mb-3">
        <Button type="submit" class="btn btn-outline-primary">Submit</Button>
      </div>

    </form>

  </body>
</template>


<style lang="scss" scoped></style>