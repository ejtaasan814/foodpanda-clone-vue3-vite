<script setup>
import SectionImage from '@/components/base/SectionImage.vue';
import imgNextGen from '@/assets/images/next-gen.jpeg';
</script>

<template>
<section class="next-gen pt-10 md:pt-32 md:px-28">
  <div class="h-full w-full flex flex-col med:flex-row lg:flex-row">
      <div class="w-full med:w-1/2 lg:w-1/2 flex justify-center items-center">
        <SectionImage :img="imgNextGen"/>
      </div>
      <div class="w-full med:w-1/2 lg:w-1/2">
        <div class ="w-full h-full p-10 med:p-20 flex flex-col items-center">
          <div class="w-full">
            <p class="font-bold text-2xl med:text-4xl">Meet the next generation of delivery!</p>
          </div>
          <div class="w-full mt-4">
            <p class="">What makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe.</p>
          </div>
          <div class="w-full mt-6">
            <a href="" class="bg-pandaButton hover:bg-pandaButtonHover rounded-full px-7 py-3 text-white">read our story</a>
          </div>
        </div>
      </div>
  </div>
</section>

</template>
