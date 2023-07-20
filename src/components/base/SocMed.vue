<template>
    <a href="" v-for="(social, index) in footerLinks.socmed" :key="index">
      <img class="w-6" :src="social.image" />
    </a>
</template>

<script setup>
import footerLinks from '@/components/data/footerLinks';
</script>

<style lang="scss" scoped>

</style>