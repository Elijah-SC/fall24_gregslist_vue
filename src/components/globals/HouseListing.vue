<script setup>
import { House } from "@/models/House.js";

const props = defineProps({
  houseProp: { type: House, required: true }
})
</script>


<template>

  <body class="row">
    <div class="col-12">
      <div class="house-card d-flex">
        <div>
          <img :src="houseProp.imgUrl" :alt="houseProp.description" class="house-img">
        </div>
        <div class="p-3 d-flex flex-column justify-content-between">
          <div>
            <h2>{{ houseProp.priceAsCurrency }} year: {{ houseProp.year }}</h2>
            <p>{{ houseProp.bathrooms }} bathrooms, and {{ houseProp.bedrooms }} bedrooms</p>
            <p>{{ houseProp.description }}</p>
          </div>
          <div>
            <span>listed on {{ houseProp.createdAt.toLocaleDateString() }} by {{ houseProp.creatorName }}
              <img class="creator-img" :src="houseProp.creatorPicture" :alt="houseProp.creatorName"></span>
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