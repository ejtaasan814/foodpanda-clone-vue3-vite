<script setup>
import SectionImage from '@/components/base/SectionImage.vue';
</script>

<template>
<section class="taste-con pt-10 med:pt-32 med:px-28">
  <div class="h-full w-full flex flex-col-reverse med:flex-row lg:flex-row">
      <div class="w-full med:w-1/2 lg:w-1/2">
        <div class ="w-full h-full flex flex-col justify-center items-center p-10 med:p-0">
          <div class="w-full">
            <p class="font-bold text-2xl med:text-4xl">Taste the convenience.</p>
          </div>
          <div class="w-full mt-4 pr-4">
            <p class="">Try us out! Delicious food and speedy groceries are at your fingertips. Go ahead, download foodpanda now.</p>
          </div>
          <div class="w-full mt-6">
            <div class="buttons-app flex gap-4 w-full">
              <div class="relative">
                <a href="/">
                  <div class="absolute top-0 w-full h-full rounded-lg hover:bg-slate-800/50">
                  </div>
                  <img src="@/assets/images/app-apple.png" />
                </a>
              </div>
              <div class="relative">
                <a href="/">
                  <div class="absolute top-0 w-full h-full rounded-lg hover:bg-slate-800/50">
                  </div>
                  <img src="@/assets/images/app-google.png" />
                </a>
              </div>
              <div class="relative">
                <a href="/">
                  <div class="absolute top-0 w-full h-full rounded-lg hover:bg-slate-800/50">
                  </div>
                  <img src="@/assets/images/app-huawei.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full med:w-1/2 lg:w-1/2 flex justify-center items-center">
        <SectionImage img="/src/assets/images/taste-con.jpeg" />
      </div>
  </div>
</section>

</template>
