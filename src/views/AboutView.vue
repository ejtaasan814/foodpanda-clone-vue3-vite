<script setup>
import Layout from '@/components/layout/MainTemplate.vue'
import FullBanner from '@/components/FullBanner.vue';
import urlaboutBanner from '@/assets/images/about-banner.jpeg'
</script>


<template>
  <Layout page="About">
    <FullBanner type="img" :img="urlaboutBanner"/>


  </Layout>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
