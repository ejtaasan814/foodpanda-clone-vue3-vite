<script setup>
import SectionImage from '@/components/base/SectionImage.vue';
import imgAdsForm from '@/assets/images/ads-form.png';
</script>

<template>
<section class="app-advertising">
  <div class="h-full w-full flex flex-col med:flex-row lg:flex-row med:px-20">
    <div class="w-full med:w-1/2 lg:w-1/2 flex justify-center items-center">
        <SectionImage :img="imgAdsForm"/>
      </div>
      <div class="w-full med:w-1/2 lg:w-1/2">
        <div class="w-full h-full p-7 med:p-20 flex flex-col items-center">
          <div class="w-full">
            <p class="font-bold text-2xl med:text-4xl">Hungry for growth? We got you!</p>
          </div>
          <div class="w-full mt-10">
            <div class="flex flex-col gap-2">
              
              <div class="flex flex-col">
                <label class="text-gray-800">Company</label>
                <input class="border border-1 border-gray-400 rounded-md text-base p-2 focus:outline-none focus:border-black" type="text" />
              </div>

              <div class="flex flex-col">
                <label class="text-gray-800">Job title</label>
                <input class="border border-1 border-gray-400 rounded-md text-base p-2 focus:outline-none focus:border-black" type="text" />
              </div>

              <div class="flex flex-col">
                <label class="text-gray-800">First Name</label>
                <input class="border border-1 border-gray-400 rounded-md text-base p-2 focus:outline-none focus:border-black" type="text" />
              </div>

              <div class="flex flex-col">
                <label class="text-gray-800">Last Name</label>
                <input class="border border-1 border-gray-400 rounded-md text-base p-2 focus:outline-none focus:border-black" type="text" />
              </div>

              <div class="flex flex-col">
                <label class="text-gray-800">Email</label>
                <input class="border border-1 border-gray-400 rounded-md text-base p-2 focus:outline-none focus:border-black" type="email" />
              </div>

              <div class="flex flex-col">
                <label class="text-gray-800">Country Phone Prefix:</label>
                <select class="border border-1 border-gray-400 rounded-md text-base p-2 focus:outline-none focus:border-black">
                  <option value="-None-" selected>-None-</option>
                  <option value="+1">+1</option>
                  <option value="+358">+358</option>
                  <option value="+36">+36</option>
                  <option value="420">+420</option>
                  <option value="+421">+421</option>
                  <option value="+43">+43</option>
                  <option value="+45">+45</option>
                  <option value="+46">+46</option>
                  <option value="+47">+47</option>
                  <option value="+49">+49</option>
                  <option value="+60">+60</option>
                  <option value="+61">+61</option>
                  <option value="+63">+63</option>
                  <option value="+65">+65</option>
                  <option value="+66">+66</option>
                  <option value="+852">+852</option>
                  <option value="+855">+855</option>
                  <option value="+856">+856</option>
                  <option value="+880">+880</option>
                  <option value="+886">+886</option>
                  <option value="+92">+92</option>
                  <option value="+95">+95</option>
                </select>
              </div>

              <div class="flex flex-col">
                <label class="text-gray-800">Mobile</label>
                <input class="border border-1 border-gray-400 rounded-md text-base p-2 focus:outline-none focus:border-black" type="text" />
              </div>

              <div class="flex flex-col">
                <label class="text-gray-800">Industy</label>
                <select class="border border-1 border-gray-400 rounded-md text-base p-2 focus:outline-none focus:border-black">
                  <option value="-None-" selected>-None-</option>
                  <option value="Agency">Agency</option>
                  <option value="Aggregators">Aggregators</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Consumer Electronics">Consumer Electronics</option>
                  <option value="CPG">CPG</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="e-Retailer">e-Retailer</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Health & Pharma">Health & Pharma</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Mobile / OEMs">Mobile / OEMs</option>
                  <option value="Non-CPG">Non-CPG</option>
                  <option value="Telco">Telco</option>
                  <option value="Travel & Hospitality">Travel & Hospitality</option>
                </select>
              </div>


              <div class="flex flex-col">
                <label class="text-gray-800">Country:</label>
                <select class="border border-1 border-gray-400 rounded-md text-base p-2 focus:outline-none focus:border-black">
                  <option value="-None-" selected>-None-</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Laos">Laos</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Thailand">Thailand</option>
                </select>
              </div>

              <div class="flex flex-col">
                <label class="text-gray-800">City</label>
                <input class="border border-1 border-gray-400 rounded-md text-base p-2 focus:outline-none focus:border-black" type="text" />
              </div>
              <div class="flex mt-2">
                <button class="bg-pandaButton hover:bg-pandaButtonHover rounded-full px-7 py-2 text-white">Submit</button>
              </div>
              
              
            </div>
          </div>
          
        </div>
      </div>
  </div>
</section>

</template>
