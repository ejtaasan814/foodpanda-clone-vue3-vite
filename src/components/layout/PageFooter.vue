<script setup>
import footerLinks from '@/components/data/footerLinks';
import SocMed from '@/components/base/SocMed.vue';
</script>
<template>
  <footer class="footer bg-black p-10 mt-10 med:mt-32 med:p-24 text-white">
    <div class="flex w-full h-full">
        <div class="w-1/2">
          <div class="logo-container">
            <img src="@/assets/images/foodpanda_logo_2023.svg" />
          </div>
        </div>
    </div>
    <div class="flex flex-col med:flex-row w-full mt-10">
        <div class="w-full med:w-1/2 flex">
          <div class="w-1/2 flex flex-col">
            <div class="pb-5">
              <p class="font-bold">Navigate</p>
            </div>
            <div v-for="(footer,index) in footerLinks.navigate" :key="index">
              <a :href="footer.link">{{footer.label}}</a>
            </div>
          </div>
          <div class="w-1/2 flex flex-col">
            <div class="pb-5">
              <p class="font-bold">Collaborate</p>
            </div>
            <div v-for="(footerCollaborate,index1) in footerLinks.collaborate" :key="index1">
              <a :href="footerCollaborate.link">{{footerCollaborate.label}}</a>
            </div>
          </div>
        </div>
        <div class="w-full mt-10 med:mt-0 med:w-1/2 flex flex-col med:items-center">
          <div class="pb-5">
            <p class="font-bold">Follow us on</p>
          </div>
          <div class="flex gap-4">
            <SocMed />
          </div>
        </div>
      </div>
      <div class="flex w-full mt-10 med:mt-24">
        <div class="flex flex-col med:flex-row w-full h-full">
          <div class="w-full med:w-1/2">
            <p>Copyright © 2023 foodpanda</p>
          </div>
          <div class="w-full med:w-1/2 flex justify-start med:justify-end">
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>
  </footer>
</template>

