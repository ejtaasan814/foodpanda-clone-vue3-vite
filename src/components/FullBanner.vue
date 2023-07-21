<script setup>
import { computed, defineProps } from 'vue';

const props =  defineProps(['type', 'img', 'description'])

const type = computed(() => {
  return props.type == 'img' ? true : false;
})
</script>


<template>
  <section>
    <div class="full-banner flex w-full h-bannerHeight relative bg-slate-200">
      <video v-if= "!type" class="w-full object-cover" poster="https://www.foodpanda.com/wp-content/uploads/2023/03/fp-home-video-poster.jpg" id="player" autoplay="" muted="" loop="">
        <source src="https://player.vimeo.com/progressive_redirect/playback/809646186/rendition/720p/file.mp4?loc=external&amp;signature=b3c8f78618e1bc64987de8a2533c33471709edf480fc783d42672110f40b500b" type="video/mp4">
      </video>

      <div v-if="type" class="w-full h-bannerHeight bg-about-banner bg-cover bg-center"></div>

      <div class="absolute p-12 h-full w-full bg-slate-800 bg-opacity-25">
        <div class="absolute left-0 bottom-0 p-12">
          <p class="text-white font-bold text-5xl">{{ props.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
