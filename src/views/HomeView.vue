<script setup>
import AboutUs from '../components/AboutUs.vue'
import PageHeader from '../components/layout/PageHeader.vue'
import PageFooter from '../components/layout/PageFooter.vue'
import FullBanner from '../components/FullBanner.vue'
import CareerComp from '../components/CareerComp.vue'
import PressComp from '../components/PressComp.vue'
import ContactComp from '../components/ContactComp.vue'
</script>

<template>
  <main>
    <PageHeader />
    <FullBanner />
    <AboutUs />
    <CareerComp />
    <PressComp />
    <ContactComp />
    <PageFooter />
  </main>
</template>
