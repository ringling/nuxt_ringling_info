<template>
  <figure class="box">
    <figcaption class="flex items-center space-x-4">
      <div class="flex-auto">
        <h3 class="mb-1 font-normal">{{ item.startDate }} - {{ item.endDate }}</h3>
        <h3 class="mb-1">{{ item.companyName }}</h3>
        <div v-if="showDetails">{{ item.title }}</div>

        <div class="my-2 normal-case" v-html="item.summary" v-if="showDetails"></div>
        <!--

          <ul v-for="tech in item.technologies" v-if="showDetails">
            <li class="normal-case list-disc list-inside">{{ tech }}</li>
          </ul>
        -->

      </div>
    </figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
  showDetails: {
    type: Boolean,
    default: false,
  },
  item: {
    type: [Object],
  },
});
</script>