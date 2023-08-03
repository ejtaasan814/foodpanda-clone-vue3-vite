<script setup>
import Layout from '@/components/layout/MainTemplate.vue'
import FullBanner from '@/components/FullBanner.vue'
import FormContact from '@/components/FormContact.vue'
import SectionInfo from '@/components/SectionInfo.vue'
</script>


<template>
  <Layout page="Contact">
    <FullBanner type="img" page="contact" img="bg-contact-banner" description="Contact us" />
    <FormContact />
    <section-info bg_color="bg-custom_section_color">
      <div class="w-full med:w-3/5 h-full bg-custom_section_color pb-10 med:pb-20">
        <p class="text-md">Got a question about your order? Need help with some of your app features? Contact Help Centre via app menu.</p>
      </div>
    </section-info>
  </Layout>
</template>
