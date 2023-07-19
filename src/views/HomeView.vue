<script setup>
import PageHeader from '../components/layout/PageHeader.vue'
import PageFooter from '../components/layout/PageFooter.vue'
import FullBanner from '../components/FullBanner.vue'
import SectionInfo from '../components/SectionInfo.vue'
import NextGen from '../components/NextGen.vue'
import TasteCon from '../components/TasteCon.vue'
import FindJob from '../components/FindJob.vue'
import CardSwiper from '../components/CardSwiper.vue'
import CardInfo from '../components/CardInfo.vue'
import FeedTeam from '../components/FeedTeam.vue'
</script>

<template>
  <main class="h-screen">
    <PageHeader />
    <FullBanner />
    <SectionInfo />
    <NextGen />
    <TasteCon />
    <FindJob />
    <CardInfo />
    <CardSwiper />
    <FeedTeam />
    <PageFooter />
  </main>
</template>
