<template>
  <figure class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
    <blockquote class="mt-6 text-gray-700">
      <p>{{item.timespan}}</p>
    </blockquote>
    <figcaption class="flex items-center space-x-4">
      <div class="flex-auto">
        <h3>{{item.title}}</h3>
        <div class="mt-0.5">{{item.school}}</div>
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