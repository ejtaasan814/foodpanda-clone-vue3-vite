<script setup>
import TestComp from '../TestComp.vue'
</script>
<template>
  <footer class="footer bg-white py-6">
    <div class="flex flex-row">
      <div class="basis-1/2 flex justify-center">
        <img class="scale-50" src="@/assets/images/food-panda-logo.png">
      </div>
      <div class="basis-1/2 flex justify-center">
          <div class="flex items-center text-deffontcolor gap-x-2">
            <div class="img-icons cursor-pointer">
              <a href="#">
                <img src="@/assets/images/icons/fb.svg" />
              </a>
            </div>
            <div class="img-icons cursor-pointer">
              <a href="#">
                <img src="@/assets/images/icons/linkedin.svg" />
              </a>
            </div>
          </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="basis-1/2 flex justify-center">
        &copy; 2023
      </div>
      <div class="basis-1/2 flex justify-center">
          <div class="flex items-center gap-x-2 text-black">
            <a href="" class="no-underline hover:underline">Imprint</a>
            <a href="" class="no-underline hover:underline">Security</a>
            <a href="" class="no-underline hover:underline">Privacy</a>
          </div>
      </div>
    </div>
  </footer>
</template>

