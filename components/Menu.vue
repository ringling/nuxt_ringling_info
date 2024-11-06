<template>
  <div :class="bgColor" class="sticky top-0 z-40 w-full flex-none lg:z-50 lg:border-b lg:border-gray-900/10">
    <div class="max-w-8xl mx-auto border-b border-gray-900/10 lg:px-8">
      <div class="py-4  mx-4 lg:mx-0">
        <div class="relative flex items-center">
          <a class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto" href="/">
            <span class="sr-only">Thomas Ringling home page</span>
            <img class="w-auto h-8" src="/img/tr_logo_small.png">
          </a>

          <div class="relative flex items-center mr-8 ml-8">
            <nav class="text-sm leading-6 font-semibold text-gray-700">
              <ul class="flex space-x-8">
                <li>
                  <NuxtLink class="hover:text-sky-500" style="z-index: 1000" to="/now">Now</NuxtLink>
                </li>
                <li>
                  <NuxtLink class="hover:text-sky-500" style="z-index: 1000" to="/cv">CV</NuxtLink>
                </li>
                <li>
                  <NuxtLink class="hover:text-sky-500" style="z-index: 1000" to="/team">Team</NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  bgColor: {
    type: [String],
  },
});
</script>