<template>
  <div class="">
    <Menu bgColor="bg-white" />

    <div class="container mx-auto p-8">
      <div>
        <!-- <h1 class="m-4">About</h1> -->
        <ContentDoc class="markdown" />
      </div>
    </div>
  </div>
</template>


<script setup>

const { pending, data: data } = await useLazyAsyncData('cv', () => $fetch('/api/cv'))

</script>

