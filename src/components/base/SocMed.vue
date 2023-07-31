<template>
    <a href="/">
      <img class="w-6" :src="imgLinkedin" />
    </a>
    <a href="/">
      <img class="w-6" :src="imgTwitter" />
    </a>
    <a href="/">
      <img class="w-6" :src="imgInsta" />
    </a>
</template>

<script setup>
import footerLinks from '@/components/data/footerLinks';
import imgLinkedin from '@/assets/images/icons/linkedin.svg';
import imgTwitter from '@/assets/images/icons/twitter.svg';
import imgInsta from '@/assets/images/icons/instagram.svg';

</script>

<style lang="scss" scoped>

</style>