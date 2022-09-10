<template>
  <div class="">
    <Menu bgColor="bg-white" />

    <div class="container mx-auto p-4 ">
      <div>
        <h1 class="m-4">About</h1>
        <section class="m-8 flex flex-wrap">

          <div>

            <ContentDoc />

          </div>

        </section>


      </div>
    </div>
  </div>

</template>


<script setup>

const { pending, data: data } = await useLazyAsyncData('cv', () => $fetch('/api/cv'))

</script>

