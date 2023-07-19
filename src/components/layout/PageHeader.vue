<script setup>
import { ref } from 'vue'

//Reactive data
//task.value to get the value
const isnavMobile = ref({
  status: false,
})

const showMobileMenu = (stat) => {
  isnavMobile.value.status = stat;
}
</script>

<template>
  <header class="bg-zinc-50">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-full">

      <a href="/" class="flex items-center p-4">
        <img class="" src="@/assets/images/foodpanda_logo_2023.svg" />
      </a>

      <!-- Mobile menu button -->
      <div class="inline-flex items-center justify-center md:hidden">
          <div class="md:hidden flex justify-start mr-10">
            <button @click="showMobileMenu(!isnavMobile.status)" data-collapse-toggle="navbar-default" aria-controls="navbar-default" aria-expanded="false" class="outline-none mobile-menu-button ease-in duration-300">
              <svg v-if="!isnavMobile.status" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#ff2b85"/>
              </svg>
              <svg v-if="isnavMobile.status" fill="#ff2b85" width="2.5rem" height="2.5rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14.41 3.27-.82-.94L8 7.17 2.41 2.33l-.82.94L7.05 8l-5.46 4.73.82.94L8 8.83l5.59 4.84.82-.94L8.95 8l5.46-4.73z"/></svg>
            </button>
          </div>
        </div>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <div class="nav-links w-full flex flex-col px-5 gap-1 md:p-0 md:flex-row md:gap-5 h-screen md:h-full transition ease-in duration-300 delay-300">
          <div class="border-t-4 border-transparent md:border-pandaButton hover:border-t-4 md:hover:border-pandaButton md:h-full py-1 md:py-4">
            <a class="text-sm" href="">Home</a>
          </div>
          <div class="border-t-4 border-transparent hover:border-t-4 md:hover:border-pandaButton md:h-full py-1 md:py-4 transition ease-in-out delay-150">
            <a class="text-sm" href="">About</a>
          </div>
          <div class="border-t-4 border-transparent hover:border-t-4 md:hover:border-pandaButton md:h-full py-1  md:py-4 transition ease-in-out delay-150">
            <a class="text-sm" href="">Newsroom</a>
          </div>
          <div class="border-t-4 border-transparent hover:border-t-4 md:hover:border-pandaButton md:h-full py-1  md:py-4 transition ease-in-out delay-150">
            <a class="text-sm" href="">panda ads</a>
          </div>
          <div class="border-t-4 border-transparent hover:border-t-4 md:hover:border-pandaButton md:h-full py-1  md:py-4 transition ease-in-out delay-150">
            <a class="text-sm" href="">Contact</a>
          </div>
          <div class="border-t-4 border-transparent hover:border-t-4 md:hover:border-pandaButton md:h-full py-1  md:py-4 transition ease-in-out delay-150">
            <a class="text-sm" href="">Careers</a>
          </div>
          <div class="group relative md:inline-block group border-t-4 border-transparent h-full py-4">
            <a href="" class="text-sm md:font-bold md:px-3 md:py-2 md:text-white md:bg-pandaButton md:hover:bg-pandaButtonHover md:rounded-full">Choose location</a>
            
              <div class="group-hover:block absolute z-1 w-48 mt-2 bg-zinc-50 flex flex-col px-5 md:hidden">
                <div class="w-full md:border-b md:border-slate-800 p-1">
                  <a class="text-sm md:text-pandaButton hover:text-slate-800" href="#"> Bangladesh</a>
                </div>
                <div class="w-full md:border-b md:border-slate-800 p-1">
                  <a class="text-sm md:text-pandaButton hover:text-slate-800" href="#"> Cambodia</a>
                </div>
                <div class="w-full md:border-b md:border-slate-800 p-1">
                  <a class="text-sm md:text-pandaButton hover:text-slate-800" href="#"> Hongkong</a>
                </div>
                <div class="w-full md:border-b md:border-slate-800 p-1">
                  <a class="text-sm md:text-pandaButton hover:text-slate-800" href="#"> Laos</a>
                </div>
                <div class="w-full md:border-b md:border-slate-800 p-1">
                  <a class="text-sm md:text-pandaButton hover:text-slate-800" href="#"> Malaysia</a>
                </div>
                <div class="w-full md:border-b md:border-slate-800 p-1">
                  <a class="text-sm md:text-pandaButton hover:text-slate-800" href="#"> Myanmar</a>
                </div>
                <div class="w-full md:border-b md:border-slate-800 p-1">
                  <a class="text-sm md:text-pandaButton hover:text-slate-800" href="#"> Pakistan</a>
                </div>
                <div class="w-full md:border-b md:border-slate-800 p-1">
                  <a class="text-sm md:text-pandaButton hover:text-slate-800" href="#"> Philippines</a>
                </div>
                <div class="w-full md:border-b md:border-slate-800 p-1">
                  <a class="text-sm md:text-pandaButton hover:text-slate-800" href="#"> Singapore</a>
                </div>
                <div class="w-full md:border-b md:border-slate-800 p-1">
                  <a class="text-sm md:text-pandaButton hover:text-slate-800" href="#"> Taiwan</a>
                </div>
                <div class="w-full md:border-b p-1">
                  <a class="text-sm md:text-pandaButton hover:text-slate-800" href="#"> Thailand</a>
                </div>
              </div>
            
           
          </div>
          <div class="hidden border-t-4 border-transparent md:flex justify-start items-center">
            <a href="/">
              <img class="w-10 scale-50" src="@/assets/images/icons/search.svg">
            </a>
          </div>
        </div>
      </div>

    </div>
  </header>
</template>

<style>

</style>