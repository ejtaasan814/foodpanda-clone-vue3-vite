<template>
  <section class="mt-10 med:px-20">
    <div class="h-full w-full flex flex-col med:flex-row lg:flex-row">
      <Splide ref="splide" :options="options" :has-track="false" aria-label="carousel section">

          <div class="w-full relative">
            <SplideTrack>
              <SplideSlide>
                <div class="flex flex-col med:flex-row">
                    <div class="w-full med:w-1/2">
                        <div class="px-10 py-5 med:px-20 med:py-10 w-full h-full">
                            <h1 class="text-3xl">Which markets are panda ads available in?</h1>
                            <p class="text-1xl mt-10">panda ads is available in 11 markets across APAC: Bangladesh, Cambodia, Hong Kong, Laos, Malaysia, Myanmar, Pakistan, Philippines, Singapore, Taiwan and Thailand.</p>
                        </div>
                    </div>
                    <div class="w-full med:w-1/2 bg-carousel-ads-1 bg-cover h-96 max-h-96">
                    </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div class="flex flex-col med:flex-row">
                  <div class="w-full med:w-1/2">
                    <div class="px-10 py-5 med:px-20 med:py-10 w-full h-full">
                            <h1 class="text-3xl">Do I need to be a vendor on foodpanda to advertise with panda ads?</h1>
                            <p class="text-1xl mt-10">You don't need to be a foodpanda vendor to advertise with panda ads. Our solutions are available for businesses across all industries who want to tap into foodpanda's audiences.</p>
                        </div>
                    </div>
                    <div class="w-full med:w-1/2 bg-carousel-ads-2 bg-cover h-96 max-h-96">
                    </div>
                </div>
              </SplideSlide>


              <SplideSlide>
                <div class="flex flex-col med:flex-row">
                  <div class="w-full med:w-1/2">
                    <div class="px-10 py-5 med:px-20 med:py-10 w-full h-full">
                            <h1 class="text-3xl">Are panda ads served only when users place food delivery orders on foodpanda?</h1>
                            <p class="text-1xl mt-10">panda ads are served when any type of order is placed on foodpanda, from food delivery to pick-up, pandamart, and foodpanda shops!</p>  
                        </div>
                    </div>
                    <div class="w-full med:w-1/2 bg-carousel-ads-3 bg-cover h-96 max-h-96">
                    </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div class="flex flex-col med:flex-row">
                  <div class="w-full med:w-1/2">
                    <div class="px-10 py-5 med:px-20 med:py-10 w-full h-full">
                            <h1 class="text-3xl">What is the ideal budget for my first panda ads campaign?</h1>
                            <p class="text-1xl mt-10">This depends on factors such as campaign objective, campaign period, and audience. Get in touch with our team so we can understand your needs and help you plan accordingly!</p>  
                        </div>
                    </div>
                    <div class="w-full med:w-1/2 bg-carousel-ads-4 bg-cover h-96 max-h-96">
                    </div>
                </div>
              </SplideSlide>
             
            </SplideTrack>

            <div class="absolute bottom-0 left-0 hidden med:w-1/2 med:flex bg-slate-800">
              <div class="absolute bottom-4 left-4 px-20 flex align-end gap-4 justify-end">
                <button class="" @click="prevSlide">
                  <svg width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10 19-7-7m0 0 7-7m-7 7h18"></path>
                  </svg>
                </button>
                
                <div class="custom-pagination w-full flex"> 
                  <!-- <div :class="activeIndex === index ? 'bg-slate-800' : ''" class="border border-slate-800 rounded-full w-2 h-2 self-center" aria-label="Go to slide 1" v-for="(n,index) in carouselLength" :key="index"></div> -->
                  <ul class="splide__pagination w-full self-center"></ul>
                </div>
                
                <button class="" @click="nextSlide">
                  <svg width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m14 5 7 7m0 0-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>

          </div>

        
         <!-- <div class="splide__arrows absolute bottom-2 block w-full bg-slate-200">
                  <button class="splide__arrow splide__arrow--prev absolute right-0">Prev</button>
                  <ul class="splide__pagination"></ul>
                  <button class="splide__arrow splide__arrow--next">Next</button>
                </div> -->
             
      </Splide>


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
      // pagination: false,
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
      console.log('mounted')
    } );

    function nextSlide() {
      this.splide.go("+1");
      activeIndex.value = splide.value.splide.index;
    }

    function prevSlide(){
      this.splide.go("-1");
      activeIndex.value = splide.value.splide.index ? 0 : 1;
    }

    function getIndex(){
      console.log(splide.value.splide.index);
    }

    // watch(splide.value, (newValue, oldValue) => {
    //   console.log('changed');
    // }, { deep: true, immediate: true })

    return { options, splide, activeIndex, carouselLength, nextSlide , prevSlide, getIndex};
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
</style>