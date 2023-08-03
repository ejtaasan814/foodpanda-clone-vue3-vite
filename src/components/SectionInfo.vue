<script setup>

const props = defineProps(['layoutWidth', 'bg_color']);
</script>

<template>
<section :class="`section-info pt-10 px-10 med:pt-20 med:px-28 ${bg_color}`">
  <div class="h-full w-full">
      <div :class="`w-full med:${layoutWidth} flex flex-col justify-center`">
       <slot />
      </div>
  </div>
</section>

</template>
