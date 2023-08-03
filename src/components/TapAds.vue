<script setup>
import SectionImage from '@/components/base/SectionImage.vue';
import imgTapAds from '@/assets/images/tap-ads.png';
</script>

<template>
<section class="tap-ads bg-custom_section_color">
  <div class="h-full w-full flex flex-col med:flex-row lg:flex-row med:px-20">
      <div class="w-full med:w-1/2 lg:w-1/2 flex justify-center items-center">
        <SectionImage :img="imgTapAds"/>
      </div>
      <div class="w-full med:w-1/2 lg:w-1/2">
        <div class ="w-full h-full p-10 med:p-20 flex flex-col items-center">
          <div class="w-full">
            <p class="font-bold text-2xl med:text-4xl">Tap into Asia's largest food and grocery delivery network*</p>
          </div>
          <div class="w-full mt-4">
            <p class="">Connect with millions of customers across 400+ cities in 11 markets, all through the world's #3 food delivery app.</p>
          </div>
          <div class="w-full mt-4">
            <p class="font-bold text-1xl">Target a unique and highly valuable audience</p>
          </div>
          <div class="w-full mt-4">
            <p class="">Engage with foodpanda customers – tech-savvy convenience-seekers with established purchasing habits.</p>
          </div>
          <div class="w-full mt-4">
            <p class="font-bold text-1xl">Build strategic brand partnerships with dedicated support</p>
          </div>
          <div class="w-full mt-4">
            <p class="">Get 360° campaign support to help achieve your marketing goals, from campaign strategies to optimisation and insights..</p>
          </div>
          <div class="w-full mt-4">
            <p class="italic">* Outside of China</p>
          </div>
        </div>
      </div>
  </div>
</section>

</template>
