<script setup>
import Layout from '@/components/layout/MainTemplate.vue'
import FullBanner from '@/components/FullBanner.vue'
import SectionInfo from '@/components/SectionInfo.vue'
import CardSwiper from '@/components/CardSwiper.vue'
import FilterButtons from '../components/FilterButtons.vue'
import CardPosts from '../components/CardPosts.vue'

</script>


<template>
  <Layout page="Newsroom">
    <FullBanner type="img" img="bg-newsroom-banner" description="Newsroom"/>
    <section-info layoutWidth="w-full"> 
      <div class="flex justify-center w-full mb-10 med:mb-20">
        <p class="text-2xl med:text-2xl font-bold">Latest Posts.</p>
      </div>
    </section-info>
    <CardSwiper />
    <FilterButtons />
    <CardPosts />
  </Layout>
</template>
