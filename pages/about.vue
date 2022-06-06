<template>
  <div class="">
    <Menu bgColor="bg-white" />

    <div class="container mx-auto p-4 ">
      <div>
        <h1 class="m-4">About</h1>
        <section class="m-8 flex flex-wrap">

          <div>
            <p class="mt-6 text-lg text-gray-600">
              Living north of Copenhagen with my wife and my daughter.
            </p>

            <p class="mt-2 text-lg text-gray-600">
              Lifetime learner and polyglot software craftsman with a great love for physical training,
              music and nature.
            </p>

            <p class="mt-2 text-lg text-gray-600">
              A long experience implementing and teaching agile methodologies and principles.
            </p>

            <p class="mt-2 text-lg text-gray-600">
              With over 20 years of experience within software development, I span a variety of different
              technologies, paradigms and programming languages.
            </p>

            <p class="mt-2 text-lg text-gray-600">
              I have had many roles within and outside IT, such as developer, coach, teacher, architect,
              project manager, scrum master, product owner, team lead etc.
            </p>

            <p class="mt-2 text-lg text-gray-600">
              As I still do software development, I keep up with new technologies and hence thrive in
              environments and cultures who value competences, innovation and creativity.
            </p>
          </div>

        </section>

        
      </div>
    </div>
  </div>

</template>


<script setup>

const { pending, data: data } = await useLazyAsyncData('cv', () => $fetch('/api/cv'))

</script>

