<template>
  <section class="mt-10 med:mt-20 med:px-28">
    <div class="flex flex-col w-100 gap-10 items-center justify-center">
      <p class="text-2xl med:text-4xl font-bold">Our values</p>

      <div class="flex flex-wrap justify-center gap-10 w-100">
          <div class="w-100">
            <a href="#" @click.prevent="goToSlide(0)" class="font-bold border-2 border-slate-800 rounded-full px-7 py-3 bg-slate-800 text-white text-pandaButton hover:border-pandaButton">Get 1% better every day</a>
          </div>
          <div class="w-100">
            <a href="#" @click.prevent="goToSlide(1)" class="font-bold border-2 border-slate-800 rounded-full px-7 py-3 hover:bg-pandaButton hover:text-white text-pandaButton hover:border-pandaButton">Own it</a>
          </div>
          <div class="w-100">
            <a href="#" @click.prevent="goToSlide(2)"  class="font-bold border-2 border-slate-800 rounded-full px-7 py-3 hover:bg-pandaButton hover:text-white text-pandaButton hover:border-pandaButton">Take risks</a>
          </div>
          <div class="w-100">
            <a href="#" @click.prevent="goToSlide(3)"  class="font-bold border-2 border-slate-800 rounded-full px-7 py-3 hover:bg-pandaButton hover:text-white text-pandaButton hover:border-pandaButton">Launch moonshots</a>
          </div>
          <div class="w-100">
            <a href="#" @click.prevent="goToSlide(4)"  class="font-bold border-2 border-slate-800 rounded-full px-7 py-3 hover:bg-pandaButton hover:text-white text-pandaButton hover:border-pandaButton">Win through diversity</a>
          </div>
          <div class="w-100">
            <a href="#" @click.prevent="goToSlide(5)"  class="font-bold border-2 border-slate-800 rounded-full px-7 py-3 hover:bg-pandaButton hover:text-white text-pandaButton hover:border-pandaButton">Stay humble</a>
          </div>
          <div class="w-100">
            <a href="#" @click.prevent="goToSlide(5)"  class="font-bold border-2 border-slate-800 rounded-full px-7 py-3 hover:bg-pandaButton hover:text-white text-pandaButton hover:border-pandaButton">Create experiences</a>
          </div>
      </div>


      <div class="mt-10">
        <Splide ref="splide" :options="options" :has-track="false">

          <div>
            <SplideTrack>


              <SplideSlide>
                <div class="flex">
                  <div class="w-1/2 bg-carousel1-1 bg-cover h-96 max-h-96">
                  </div>
                  <div class="w-1/2">
                    <div class="w-full">
                        <h1 class="text-3xl px-10 mt-28">Get 1% better every day</h1>
                        <p class="text-1xl px-10 mt-5">Very often the improvements we make may not show results right away. It's important to stay resilient and always ask ourselves - what's that one thing we can do better today</p>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              


              <SplideSlide>
                <div class="flex">
                  <div class="w-1/2 bg-carousel1-2 bg-cover h-96 max-h-96">
                  </div>
                  <div class="w-1/2">
                    <div class="w-full">
                      <h1 class="text-3xl px-10 mt-28">Own it</h1>
                      <p class="text-1xl px-10 mt-5">We believe in owning the problems we encounter, even when they stretch past our own areas of expertise. We stay accountable, focus on solutions, and don't make excuses. We own the things we say and do, and are accountable for the outcomes.</p>
                    </div>
                  </div>
                </div>
              </SplideSlide> 


              <SplideSlide>
                <div class="flex">
                  <div class="w-1/2 bg-carousel1-3 bg-cover h-96">
                  </div>
                  <div class="w-1/2">
                    <div class="w-full">
                      <h1 class="text-3xl px-10 mt-28">Decide fast, take risks, get it done</h1>
                      <p class="text-1xl px-10 mt-5">We must not be afraid to make decisions and take action, even when we face uncertainty. We learn from mistakes, keep iterating, and always focus on execution.</p>
                    </div>
                  </div>
                </div>
              </SplideSlide>



              <SplideSlide>
                <div class="flex">
                  <div class="w-1/2 bg-carousel1-4 bg-cover h-96 max-h-96">
                  </div>
                  <div class="w-1/2">
                    <div class="w-full">
                      <h1 class="text-3xl px-10 mt-28">Launch moonshots</h1>
                      <p class="text-1xl px-10 mt-5">Sometimes it's the crazy ideas that become the biggest success stories. By looking beyond the limits of today, we set ourselves up to succeed tomorrow.</p>
                    </div>
                  </div>
                </div>
              </SplideSlide>


              <SplideSlide>
                <div class="flex">
                  <div class="w-1/2 bg-carousel1-5 bg-cover h-96 max-h-96">
                  </div>
                  <div class="w-1/2">
                    <div class="w-full">
                      <h1 class="text-3xl px-10 mt-28">Win through diversity</h1>
                      <p class="text-1xl px-10 mt-5">Our ongoing commitment to diversity lies not only in the belief that it's what's right, but also that it helps us win. Diversity empowers our problem-solving, fuels innovation, emboldens our decision-making, and is a key part of our success.</p>
                    </div>
                  </div>
                </div>
              </SplideSlide>


              <SplideSlide>
                <div class="flex">
                  <div class="w-1/2 bg-carousel1-6 bg-cover h-96 max-h-96">
                  </div>
                  <div class="w-1/2">
                    <div class="w-full">
                      <h1 class="text-3xl px-10 mt-28">Stay humble</h1>
                      <p class="text-1xl px-10 mt-5">We've all got room to improve, so we need to stay self-critical and maintain a low ego. Listen to all the views in the room, and remember that both individually and as a company, there's always room for growth.</p>
                    </div>
                  </div>
                </div>
              </SplideSlide>


              <!-- <SplideSlide>
                <div class="flex">
                  <div class="w-1/2 bg-carousel1-7 bg-cover h-96 max-h-96">
                  </div>
                  <div class="w-1/2">
                    <div class="flex flex-col justify-center">
                      <h1 class="text-3xl">Create magical experiences</h1>
                      <p class="text-1xl">Whether it's our users, restaurants, riders, or pandas, we believe that the key to keeping them with us is to continuously wow them with magical experiences.</p>
                    </div>
                  </div>
                </div>
              </SplideSlide>  -->



            </SplideTrack>
          </div>
        </Splide>
      </div>

    </div>
  </section>
</template>

<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import { defineComponent, ref, onMounted } from 'vue';
import '@splidejs/vue-splide/css';


export default defineComponent( {
  components: {
    Splide,
    SplideSlide,
    SplideTrack
  },

  setup() {
    const options = {
      rewind: true,
      gap   : '1rem',
      arrows: false,
      pagination: false,
      autoplay: true,  
    };

    const splide = ref();
    const activeIndex = ref(0);
    const carouselLength = ref(0);

    onMounted( () => {
      if ( splide.value && splide.value.splide ) {
        activeIndex.value = splide.value.splide.index;
        carouselLength.value = splide.value.splide.length;
      }
    } );

    function goToSlide(slide) {
      this.splide.go(slide);
      activeIndex.value = splide.value.splide.index;
    }

    return { options, splide, activeIndex, carouselLength, goToSlide};
  } 

} ); 
</script>
<style scoped>
.splide__pagination{
  position:static;
  width:100%;
  right:auto;
  bottom:auto;
  left:auto;
}

.splide__pagination__page .is-active{
  background: rgb(6, 6, 6) !important;
  background-color: none;
}

.splide__pagination__page{
  background: rgb(6, 6, 6) !important;
}
*{
min-height: 0;
min-width: 0;
}
</style>