<script setup>
import { computed } from 'vue';

const props =  defineProps(['type', 'page', 'img', 'description','sub_description'])

const type = computed(() => {
  return props.type == 'img' ? true : false;
})

const pandaAdsCheck = computed(() =>{
  return props.page == 'panda-ads' ? true : false;
})
</script>


<template>
  <section>
    <div class="full-banner flex w-full h-bannerHeight relative bg-slate-200">
      <video v-if= "!type" class="w-full object-cover" poster="https://www.foodpanda.com/wp-content/uploads/2023/03/fp-home-video-poster.jpg" id="player" autoplay="" muted="" loop="">
        <source src="https://player.vimeo.com/progressive_redirect/playback/809646186/rendition/720p/file.mp4?loc=external&amp;signature=b3c8f78618e1bc64987de8a2533c33471709edf480fc783d42672110f40b500b" type="video/mp4">
      </video>

      <div v-if="type" :class="`w-full h-bannerHeight ${img} bg-cover bg-center`"></div>

      <div v-if="!pandaAdsCheck" class="absolute p-12 h-full w-full bg-opacity-25">
        <div class="w-3/4 absolute left-0 bottom-0 p-20 med:p-28">
          <p class="text-white font-bold text-4xl med:text-5xl">{{ props.description }}</p>
        </div>
      </div>

      <div v-if="pandaAdsCheck" class="absolute p-12 h-full w-full bg-opacity-25">
        <div class="w-full med:w-1/2 absolute med:top-0 left-0 bottom-0">
          <div class="flex flex-col pb-20 px-4 med:p-28">
            <div class="">
              <p class="text-white font-bold text-5xl">{{ props.description }}</p>
            </div>
            <div class="">
              <p class="text-white font-bold text-1xl mt-8 mb-8">{{ props.sub_description }}</p>
            </div>
            <div class="">
              <a href="" class="bg-pandaButton hover:bg-pandaButtonHover rounded-full px-7 py-3 text-white">Get in touch</a>
            </div>          
          </div>
        </div>
      </div>



    </div>
  </section>
</template>
