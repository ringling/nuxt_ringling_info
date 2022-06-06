<template>
  <div class="h-screen w-screen bg-cover bg-[left_-12rem_top] md:bg-left-top bg-[url(/img/home-bg-1.jpg)]">

    <Menu />

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

        <div class="cloud top-0 left-0 absolute h-full w-full" style="z-index: 10; background: url(/img/cloud.png)">
        </div>
      </main>
    </div>
  </div>
</template>