<script setup>
import FullBanner from '../components/FullBanner.vue'
import SectionInfo from '../components/SectionInfo.vue'
import NextGen from '../components/NextGen.vue'
import TasteCon from '../components/TasteCon.vue'
import FindJob from '../components/FindJob.vue'
import CardSwiper from '../components/CardSwiper.vue'
import CardInfo from '../components/CardInfo.vue'
import FeedTeam from '../components/FeedTeam.vue'
import Layout from '@/components/layout/MainTemplate.vue'
</script>

<template>
    <Layout page="Home">
      <FullBanner type="video" description="food and groceries in a tap"/>
      <section-info> 
        <p class="text-3xl med:text-4xl font-bold">We’re here to help you live life the panda way. Spend more time doing what you love – we’ll take care of tasty meals, fresh groceries and new flavours.</p>
      </section-info>
      <NextGen />
      <TasteCon />
      <FindJob />
      <CardInfo />
      <CardSwiper />
      <FeedTeam />
    </Layout>
</template>
