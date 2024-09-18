<script setup>
import { AppState } from "@/AppState.js";
import { House } from "@/models/House.js";
import { housesService } from "@/services/HousesService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed } from "vue";

const props = defineProps({
  houseProp: { type: House, required: true }
})

const account = computed(() => AppState.account)


async function deleteHouse() {
  try {
    const doesUserWantToDelete = await Pop.confirm(`Are you Sure you want to delete this House?`)
    if (!doesUserWantToDelete) return
    logger.log(`deleting House`)
    const houseId = props.houseProp.id
    await housesService.deleteHouse(houseId)
  }
  catch (error) {
    Pop.error(error);
    logger.log(error)
  }
}
</script>


<template>

  <body class="row">
    <div class="col-12">
      <div class="house-card d-flex">
        <div>
          <img :src="houseProp.imgUrl" :alt="houseProp.description" class="house-img">
        </div>
        <div class="p-3 d-flex flex-column justify-content-between flex-grow-1">
          <div>
            <h2>{{ houseProp.priceAsCurrency }} year: {{ houseProp.year }}</h2>
            <p>{{ houseProp.bathrooms }} bathrooms, and {{ houseProp.bedrooms }} bedrooms</p>
            <p>{{ houseProp.description }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <span>listed on {{ houseProp.createdAt.toLocaleDateString() }} by {{ houseProp.creatorName }}
                <img class="creator-img" :src="houseProp.creatorPicture" :alt="houseProp.creatorName"></span>
            </div>
            <span v-if="houseProp.creatorId == account?.id" @click="deleteHouse()"><i role="button"
                class="fs-1 mdi mdi-trash-can-outline text-danger" title="delete House Listing"></i></span>
          </div>
        </div>
      </div>
    </div>
  </body>

</template>


<style lang="scss" scoped>
.house-img {
  width: 30vw;
  aspect-ratio: 1/1;
  object-fit: cover;

}

.house-card {
  box-shadow: 1px 2px 10px rgb(74, 73, 73);
  margin-bottom: 3em;
}

.creator-img {
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>