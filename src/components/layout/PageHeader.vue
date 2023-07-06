<script setup>
import { ref } from 'vue'

//Reactive data
//task.value to get the value
const isnavMobile = ref({
  status: false,
  buttonClicked: false
})

const showMobileMenu = (stat) => {
  const indicator = stat ? true : false;
  isnavMobile.value.status = indicator;
  isnavMobile.value.buttonClicked = indicator;
}
</script>

<template>
  <header>
    <div class="bg-gray-100 grid grid-cols-2 w-full fixed top-0 z-50">
       <!-- Mobile menu button -->
      <div class="md:hidden flex justify-start ml-10">
        <button v-if="!isnavMobile.buttonClicked" @click="showMobileMenu(1)" class="outline-none mobile-menu-button ease-in duration-300">
          <svg width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#0F1729"/>
          </svg>
        </button>
        <button v-if="isnavMobile.buttonClicked" @click="showMobileMenu(0)" class="outline-none mobile-menu-button ease-in duration-300">
          <svg fill="#000000" width="2.5rem" height="2.5rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14.41 3.27-.82-.94L8 7.17 2.41 2.33l-.82.94L7.05 8l-5.46 4.73.82.94L8 8.83l5.59 4.84.82-.94L8.95 8l5.46-4.73z"/></svg>
        </button>
      </div>

      <div class="basis-head-logo flex justify-center">
        <img class="scale-50" src="@/assets/images/food-panda-logo.png">
      </div>
      <div class="hidden md:flex basis-head-nav-links justify-center">
        <div class="flex flex-row items-center gap-x-11 text-deffont">
          <a href="">ABOUT</a>
          <a href="">CAREERS</a>
          <a href="">PRESS</a>
          <a href="">ORDER</a>
        </div>
      </div>

       <!-- mobile menu -->
			<div v-if="isnavMobile.status" class="md:hidden w-full bg-slate-800 col-span-2">
        <div class="flex justify-center bg-slate-200">
          <ul class="w-full flex flex-col justify-center">
            <li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
            <li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
            <li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
            <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
          </ul>
        </div>
			</div>


    </div>

    
  </header>
</template>
