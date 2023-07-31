<template>
  <section class="mt-10 med:mt-32 med:px-28 bg-slate-200">
    <div class="h-full w-full flex flex-col med:flex-row lg:flex-row">
      <Splide ref="splide" :options="options" :has-track="false" aria-label="carousel section">

          <div class="relative bg-slate-200">
            <SplideTrack>
              <SplideSlide>
                <div class="flex">
                    <div class="w-1/2">
                        <div class="px-20 py-10 w-full h-full">
                            <h1 class="text-3xl">Our riders are our heroes</h1>
                            <p class="text-1xl mt-10">We're here to provide exciting opportunities and empower work flexibility. Learn more about rider's journey or sign up to become one</p>
                            <div class="w-full mt-10">
                              <a href="/" class="bg-pandaButton hover:bg-pandaButtonHover rounded-full px-7 py-3 text-white">ride with us</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 bg-carousel-1 bg-cover h-96 max-h-96">
                      <!-- <img class="object-cover" src="@/assets/images/about-carousel-1.jpeg" alt="Sample 1"> -->
                    </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div class="flex">
                  <div class="w-1/2">
                        <div class="px-20 py-10 w-full h-full">
                            <h1 class="text-3xl">Growing with our partners</h1>
                            <p class="text-1xl mt-10">We work with the best restaurants and stores. We support our partners every step of the way and empower their growth. Ready to take your business to the next level?</p>
                            <div class="w-full mt-10">
                              <a href="" class="bg-pandaButton hover:bg-pandaButtonHover rounded-full px-7 py-3 text-white">ride with us</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 bg-carousel-2 bg-cover h-96 max-h-96">
                      <!-- <img class="w-full" src="@/assets/images/about-carousel-2.png" alt="Sample 1"> -->
                    </div>
                </div>
              </SplideSlide>


              <SplideSlide>
                <div class="flex">
                  <div class="w-1/2">
                        <div class="px-20 py-10 w-full h-full">
                            <h1 class="text-3xl">Customers come first</h1>
                            <p class="text-1xl mt-10">We're far more than just swift food delivery. foodpanda enables customers to pick up their takeaway meals, skip boring grocery trips and send parcels. Customer needs are the core and centre of our business. Download the app to experience true convenience.</p>  
                        </div>
                    </div>
                    <div class="w-1/2 bg-carousel-3 bg-cover h-96 max-h-96">
                      <!-- <img class="object-cover max-w-full" src="@/assets/images/about-carousel-3.jpeg" alt="Sample 1"> -->
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