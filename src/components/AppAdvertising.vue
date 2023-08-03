<script setup>
import SectionImage from '@/components/base/SectionImage.vue';
import imgAppAds from '@/assets/images/advertise.png';
</script>

<template>
<section class="app-advertising">
  <div class="h-full w-full flex flex-col med:flex-row lg:flex-row med:px-20">
      <div class="w-full med:w-1/2 lg:w-1/2">
        <div class="w-full h-full p-10 med:p-20 flex flex-col items-center">
          <div class="w-full">
            <p class="font-bold text-2xl med:text-4xl">Advertise on foodpanda</p>
          </div>
          <div class="w-full mt-4">
            <p class="font-bold text-1xl">In-app advertising</p>
          </div>
          <div class="w-full mt-4">
            <p class="">Increase brand visibility with native display ads across different categories on the foodpanda app.</p>
          </div>
          <div class="w-full mt-4">
            <p class="font-bold text-1xl">Digital marketing channels</p>
          </div>
          <div class="w-full mt-4">
            <p class="">Extend your reach via foodpanda's digital network, from eDMs and push notifications to social media posts.</p>
          </div>
          <div class="w-full mt-4">
            <p class="font-bold text-1xl">Partnership initiatives</p>
          </div>
          <div class="w-full mt-4">
            <p class="">Execute integrated campaigns for maximum impact, with tailored solutions like product sampling, vouchers, and consumer insights.</p>
          </div>
        </div>
      </div>
      <div class="w-full med:w-1/2 lg:w-1/2 flex justify-center items-center">
        <SectionImage :img="imgAppAds"/>
      </div>
  </div>
</section>

</template>
