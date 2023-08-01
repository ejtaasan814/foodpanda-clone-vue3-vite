<script setup>
import { ref, computed } from 'vue';

let show = ref(false);

const buttonLabel = computed(() => { 
  return show.value == true ? '- FEWER FILTERS': '+ MORE FILTERS';
})
</script>

<template>
<section class="filter-buttons pt-10 med:pt-20 med:px-28">
  <div class="h-full w-full flex flex-col med:flex-row lg:flex-row justify-center med:justify-end gap-4">
    <div class="flex gap-2 justify-center">
      <div>
        <button class="border-2 border-slate-800 rounded-full bg-black hover:text-white text-white px-10 py-2">ALL</button>
      </div>
      <div>
        <button class="border-2 border-slate-800 rounded-full hover:bg-black hover:text-white px-10 py-2">BUSINESS</button>
      </div>
      <div>
        <button class="border-2 border-slate-800 rounded-full hover:bg-black hover:text-white px-10 py-2">CAMPAIGNS</button>
      </div>
    </div>
    <div class="flex justify-center">
      <button @click="show = !show" class="text-1xl">{{ buttonLabel }}</button>
    </div>
  </div>


    <div v-if = "show" class="h-full w-full flex flex-col med:flex-row lg:flex-row justify-center med:justify-end gap-4 transition ease-in-out delay-900 mt-5">
      <div class="flex flex-wrap justify-center gap-2">
        <div>
          <button class="border-2 border-slate-800 rounded-full hover:bg-black hover:text-white px-10 py-2">COMMUNITY</button>
        </div>
        <div>
          <button class="border-2 border-slate-800 rounded-full hover:bg-black hover:text-white px-10 py-2">MERCHANTS</button>
        </div>
        <div>
          <button class="border-2 border-slate-800 rounded-full hover:bg-black hover:text-white px-10 py-2">PRESS</button>
        </div>
        <div>
          <button class="border-2 border-slate-800 rounded-full hover:bg-black hover:text-white px-10 py-2">RIDERS</button>
        </div>
        <div>
          <button class="border-2 border-slate-800 rounded-full hover:bg-black hover:text-white px-10 py-2">TECH</button>
        </div>
      </div>
    </div>
  
 
</section>

</template>
