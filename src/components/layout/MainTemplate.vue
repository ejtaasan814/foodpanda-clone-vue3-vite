<template>
  <main class="h-screen">
    <Header :page="props.page"/>
      <slot />
    <Footer />
  </main>
</template>

<script setup>
import Header from '@/components/layout/PageHeader.vue';
import Footer from '@/components/layout/PageFooter.vue';

const props = defineProps(['page'])
</script>

<style lang="scss" scoped>

</style>