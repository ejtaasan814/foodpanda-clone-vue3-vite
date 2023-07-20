<script setup>
import SectionImage from '@/components/base/SectionImage.vue';

</script>

<template>
<section class="find-job pt-10 med:pt-32 med:px-28">
  <div class="h-full w-full flex flex-col med:flex-row lg:flex-row">
      <div class="w-full med:w-1/2 lg:w-1/2 flex justify-center items-center">
        <SectionImage img="/src/assets/images/find-job.jpeg" />
      </div>
      <div class="w-full med:w-1/2 lg:w-1/2">
        <div class ="w-full h-full p-10 med:p-20 flex flex-col items-center">
          <div class="w-full">
            <p class="font-bold text-3xl med:text-4xl">Find the job you'd love!</p>
          </div>
          <div class="w-full mt-4">
            <p class="">Hungry to make a difference? There’s a seat at our table!</p>
          </div>
          <div class="w-full mt-4">
            <p class="">Find out how we connect tech, passions, projects and people – explore international career opportunities at foodpanda.</p>
          </div>
          <div class="w-full mt-6">
            <a href="" class="bg-pandaButton hover:bg-pandaButtonHover rounded-full px-7 py-3 text-white">Join us!</a>
          </div>
        </div>
      </div>
  </div>
</section>

</template>
