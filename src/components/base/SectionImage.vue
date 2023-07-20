<template>
  <div class="img-holder">
      <img :src="props.img">
  </div>
</template>

<script setup>
const props = defineProps(['img'])
</script>

<style lang="scss" scoped>

</style>