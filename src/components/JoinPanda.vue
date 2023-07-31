<script setup>
import SectionImage from '@/components/base/SectionImage.vue';
import imgFindJob from '@/assets/images/find-job.jpeg'
</script>

<template>
<section class="find-job pt-10 med:pt-20 med:px-28">
  <div class="h-full w-full flex flex-col med:flex-row lg:flex-row">
      <div class="w-full med:w-1/2 lg:w-1/2">
        <div class ="w-full h-full p-10 med:px-0 flex flex-col items-center justify-center">
          <div class="w-full">
            <p class="font-bold text-3xl med:text-4xl">Join the panda team!</p>
          </div>
          <div class="w-full mt-4">
            <p class="">Hungry for growth? There’s a seat at our table! We’re looking for the best in tech, marketing, sales, logistics, account management and more. Explore career opportunities at foodpanda now.</p>
          </div>
          <div class="w-full mt-6">
            <a href="" class="border-2 border-pandaButton text-pandaButton hover:text-white hover:border-pandaButtonHover hover:bg-pandaButtonHover rounded-full px-7 py-3">view jobs</a>
          </div>
        </div>
      </div>
      <div class="w-full med:w-1/2 lg:w-1/2 flex justify-center items-center">
        <SectionImage :img="imgFindJob" />
      </div>
  </div>
</section>

</template>
