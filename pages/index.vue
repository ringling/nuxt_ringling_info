<template>
  <div class="h-screen w-screen bg-cover bg-[left_-12rem_top] md:bg-left-top bg-[url(/img/home-bg-1.jpg)]">

    <div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 supports-backdrop-blur:bg-white/95">
            <div
                class="max-w-8xl mx-auto border-b border-gray-900/10 lg:px-8">
                <div class="py-4  mx-4 lg:mx-0">
                    <div class="relative flex items-center">
                        <a class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto" href="/">
                            <span class="sr-only">Thomas Ringling home page</span>
                            <img class="w-auto h-8" src="/img/logo.svg">
                        </a>
                     
                        <div class="relative flex items-center mr-8 ml-8">
                            <nav class="text-sm leading-6 font-semibold text-gray-700">
                                <ul class="flex space-x-8">
                                    <li>
                                        <NuxtLink class="hover:text-sky-500"
                                            style="z-index: 1000" to="/about">About</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink class="hover:text-sky-500"
                                            style="z-index: 1000" to="/now">Now</NuxtLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div class="container mx-auto p-4 ">
      <main class="container">
        <p class="alert alert-info" role="alert"></p>
        <p class="alert alert-danger" role="alert"></p>
        <h1 class="text-black  text-4xl xl:text-6xl font-bold text-right mt-12 mr-12">Creative Technologist &amp;<br>
          Software Enthusiast</h1>

        <section class="m-12 text-right">
          <p class="mb-2 text-xl xl:text-2xl">A little about who I am</p>
          <p class="mb-2 text-xl xl:text-2xl">What I am doing right now</p>
          <p class="mb-2 text-xl xl:text-2xl">And what I have been doing</p>
        </section>

        <div class="cloud top-0 left-0 absolute h-full w-full" style="background: url(/img/cloud.png)"></div>
      </main>
    </div>
  </div>
</template>