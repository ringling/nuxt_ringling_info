<template>
  <figure class="box">
    <blockquote class="mt-6">
      <p>{{item.startDate}} - {{item.endDate}}</p>
    </blockquote>
    <figcaption class="flex items-center space-x-4">
      <div class="flex-auto">
        <h3 class="mb-1">{{item.studyType}}</h3>
        <div>{{item.institution}}</div>
      </div>
    </figcaption>
  </figure>
</template>

<script setup>
  const props = defineProps({
    item: {
      type: [Object],
    },
  });
</script>