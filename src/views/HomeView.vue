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
      <FullBanner />
      <SectionInfo />
      <NextGen />
      <TasteCon />
      <FindJob />
      <CardInfo />
      <CardSwiper />
      <FeedTeam />
    </Layout>
</template>
