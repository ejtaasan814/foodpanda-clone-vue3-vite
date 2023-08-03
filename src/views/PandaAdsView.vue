<script setup>
import Layout from '@/components/layout/MainTemplate.vue'
import FullBanner from '@/components/FullBanner.vue'
import TapAds from '@/components/TapAds.vue'
import AppAdvertising from '@/components/AppAdvertising.vue'
import WorkedWith from '@/components/WorkedWith.vue'
import AdsCarousel from '@/components/AdsCarousel.vue'
import AdsForm from '@/components/AdsForm.vue'
</script>


<template>
  <Layout page="panda ads">
    <FullBanner type="img" page="panda-ads" img="bg-ads-banner" description="Boost your brands with panda ads" sub_description="Reach millions of digital-native customers on foodpanda across APAC with our integrated marketing solutions."/>
    <TapAds />
    <AppAdvertising />
    <WorkedWith />
    <AdsCarousel />
    <AdsForm />
  </Layout>
</template>
