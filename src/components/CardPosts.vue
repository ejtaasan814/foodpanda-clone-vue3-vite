<script setup>
import { ref, computed } from 'vue';

let show = ref(false);

const buttonLabel = computed(() => { 
  return show.value == true ? '- FEWER FILTERS': '+ MORE FILTERS';
})
</script>

<template>
<section class="filter-buttons pt-10 med:pt-20 med:px-28">
 
  <div class="grid grid-cols-1 med:grid-cols-3 gap-12">
    
      <div class="w-full flex flex-col items-center px-20 med:px-0">
        <div class="w-full max-h-60 max-w-md overflow-hidden">
          <img class="object-cover" src="@/assets/images/card-1.jpeg">
        </div>

        <div class="w-full flex justify-center med:justify-start">
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">BUSINESS</a>
          </div>
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">MERCHANTS</a>
          </div>
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">PRESS</a>
          </div>
        </div>

        <div class="w-full flex justify-center">
          <p class="font-bold">pandamart refreshes the grocery shopping experience with pick-up service</p>
        </div>
      </div>
    
      <div class="w-full flex flex-col items-center px-20 med:px-0">
        <div class="w-full max-h-60 max-w-md overflow-hidden">
          <img class="object-cover" src="@/assets/images/card-2.png">
        </div>

        <div class="w-full flex justify-center med:justify-start">
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">BUSINESS</a>
          </div>
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">MERCHANTS</a>
          </div>
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">PRESS</a>
          </div>
        </div>

        <div class="w-full flex justify-center">
          <p class="font-bold">foodpanda launches inaugural partner summit as part of future proofing its merchant ecosystem</p>
        </div>
      </div>

      <div class="w-full flex flex-col items-center px-20 med:px-0">
        <div class="w-full max-h-60 max-w-md overflow-hidden">
          <img class="object-cover" src="@/assets/images/card-3.jpeg">
        </div>

        <div class="w-full flex justify-center med:justify-start">
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">BUSINESS</a>
          </div>
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">MERCHANTS</a>
          </div>
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">PRESS</a>
          </div>
        </div>

        <div class="w-full flex justify-center med:justify-left">
          <p class="font-bold">foodpanda and Visa sign a memorandum of Understanding to collaborate on seamless payment solutions and benefits for customers</p>
        </div>
      </div>


      <div class="w-full flex flex-col items-center px-20 med:px-0">
        <div class="w-full max-h-60 max-w-md overflow-hidden">
          <img class="object-cover" src="@/assets/images/card-4.png">
        </div>

        <div class="w-full flex justify-center med:justify-start">
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">BUSINESS</a>
          </div>
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">MERCHANTS</a>
          </div>
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">PRESS</a>
          </div>
        </div>

        <div class="w-full flex justify-center med:justify-start">
          <p class="font-bold">foodpanda launches pandapurpose 2022</p>
        </div>
      </div>


      
      <div class="w-full flex flex-col items-center px-20 med:px-0">
        <div class="w-full max-h-60 max-w-md overflow-hidden">
          <img class="object-cover" src="@/assets/images/card-5.jpeg">
        </div>

        <div class="w-full flex justify-center med:justify-start">
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">BUSINESS</a>
          </div>
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">MERCHANTS</a>
          </div>
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">PRESS</a>
          </div>
        </div>

        <div class="w-full flex justify-center med:justify-start">
          <p class="font-bold">foodpanda adds major brands to its growing quick-commerce retail arm</p>
        </div>
      </div>


      <div class="w-full flex flex-col items-center px-20 med:px-0">
        <div class="w-full max-h-60 max-w-md overflow-hidden">
          <img class="object-cover" src="@/assets/images/card-6.jpeg">
        </div>

        <div class="w-full flex justify-center med:justify-start">
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">BUSINESS</a>
          </div>
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">PRESS</a>
          </div>
          <div class="py-5 px-2">
            <a class="text-pandaButton" href="#">TECH</a>
          </div>
        </div>

        <div class="w-full flex justify-center med:justify-start">
          <p class="font-bold">foodpanda recognised as an inclusive workplace with Enabling Mark accreditation in Singapore</p>
        </div>
      </div>


  </div>
  
 
</section>

</template>
