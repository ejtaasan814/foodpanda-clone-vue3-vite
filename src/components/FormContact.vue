<script setup>
</script>

<template>
<section class="app-advertising">
  <div class="h-full w-full flex flex-col med:flex-row lg:flex-row p-5 med:p-20">
      <div class="w-full med:w-3/4 lg:w-3/4">

        <div class="flex flex-col med:flex-row gap-2">
          <div class="flex flex-col w-full med:w-1/2">
            <label class="text-gray-800">Name</label>
            <input class="p-3 border border-1 border-gray-400 rounded-full text-base p-2 focus:outline-none focus:border-black" type="text"/>
          </div>

          <div class="flex flex-col w-full med:w-1/2">
            <label class="text-gray-800">Email</label>
            <input class="p-3 border border-1 border-gray-400 rounded-full text-base p-2 focus:outline-none focus:border-black" type="email" />
          </div> 
        </div>

        <div class="flex flex-row gap-2 mt-5">
          <div class="flex flex-col w-full">
            <label class="text-gray-800">Message</label>
            <textarea cols="40" rows="10" class="border border-1 border-gray-400 rounded-2xl text-base p-2 focus:outline-none focus:border-black"> </textarea>
          </div> 
        </div>

        <div class="flex flex-row gap-2 mt-5">
          <a href="#" @click.prevent="" class="font-bold border-2 border-pandaButton rounded-full px-7 py-3 hover:bg-pandaButton hover:text-white text-pandaButton hover:border-pandaButton">Send message</a>
        </div>


      </div>
  </div>
</section>

</template>
