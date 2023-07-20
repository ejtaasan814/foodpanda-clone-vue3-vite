<script setup>
import SectionImage from './base/SectionImage.vue'
import imgFeedTeam from '@/assets/images/feed-team.jpeg'
</script>

<template>
<section class="feed-team pt-10 med:pt-32 med:px-28">
  <div class="h-full w-full flex flex-col-reverse med:flex-row lg:flex-row">
      <div class="w-full med:w-1/2 lg:w-1/2">
        <div class ="w-full h-full flex flex-col justify-center items-center p-10 med:p-0">
          <div class="w-full">
            <p class="font-bold text-3xl med:text-4xl">Feed your team.</p>
          </div>
          <div class="w-full mt-4 pr-4">
            <p class="">Treat your talented team to their favourite meals. Let them pick! Explore flexible corporate food delivery options and tasty employee perks.</p>
          </div>
          <div class="w-full mt-6">
            <div class="button-learn flex gap-4 w-full">
                <a class="text-pandaButton font-bold" href="#">learn more > </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full med:w-1/2 lg:w-1/2 flex justify-center items-center">
        <SectionImage :img="imgFeedTeam" />
      </div>
  </div>
</section>

</template>
