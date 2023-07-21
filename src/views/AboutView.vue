<script setup>
import Layout from '@/components/layout/MainTemplate.vue'
import FullBanner from '@/components/FullBanner.vue';
import SectionInfo from '@/components/SectionInfo.vue';
import CarouselSection from '@/components/CarouselSection.vue';
import urlaboutBanner from '@/assets/images/about-banner.jpeg'

</script>


<template>
  <Layout page="About">
    <FullBanner type="img" :img="urlaboutBanner" description="About foodpanda"/>
    <section-info> 
      <p class="text-1xl med:text-3xl font-bold">From food delivery to your daily convenience companion.</p>
      <p class="mt-4 text-1xl">A subsidiary of Delivery Hero, foodpanda launched in Singapore in 2014 as a food delivery platform.  Dedicated to helping customers get their tasty favourites fast, it quickly won the hearts and minds of customers in APAC.</p>
      <p class="mt-4 text-1xl">Powered by tech and operational excellence, foodpanda has been growing its quick-commerce footprint in more than 400 cities across 11 markets in Asia – Singapore, Hong Kong, Thailand, Malaysia, Pakistan, Taiwan, Philippines, Bangladesh, Laos, Cambodia, and Myanmar.</p>
      <p class="mt-4 text-1xl">Thanks to dedicated partners, riders, and a team united by shared values,  foodpanda is now providing millions with a convenient way to get food and groceries in a few taps.</p>
    </section-info>
    <CarouselSection />
  </Layout>
</template>
