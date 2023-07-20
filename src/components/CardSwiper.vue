<script setup>
import cardSwiper from '@/components/data/cardSwiper.js'

</script>
<template>
  <section class="card-swiper">
    <div class="h-full flex flex-row overflow-auto">
      <div class="">
        <div class="card-container h-full w-full bg-scale-50 gap-10 justify-center flex flex-start">

          <div :class="`relative card h-cardHeight w-80 rounded-lg ${card.data.background_class} bg-cover`" v-for="(card, index) in cardSwiper" :key="index">
            <div class="absolute top-0 h-full w-full rounded-lg bg-gradient-to-t from-slate-800">
              <div class="card-content h-full w-full flex flex-col py-8 px-5">
                <div class="w-full flex justify-center gap-2 text-white font-bold">
                  <a :href="cardLink.link" v-for="(cardLink, ci) in card.data.links" :key="ci">
                    {{ cardLink.label }}
                  </a>
                </div>
                <div class="w-full h-full flex justify-center items-end">
                  <p class="text-2xl text-white">{{ card.data.description }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section> 
</template>
