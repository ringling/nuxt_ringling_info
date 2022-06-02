<template>
  <div class="">
    <Menu bgColor="bg-white"/>

    <div class="container mx-auto p-4 ">
      <div>
        <h1 class="m-4">About</h1>

        <h2 class="m-4">Introduction</h2>
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

        <br>

        <h2 class="m-4">Education</h2>
        <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Education v-for="school in schools" :item="school" v-bind:key="school.title" />
        </div>

        <h2 class="m-4">Languages</h2>
        <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Language v-for="language in languages" :item="language" v-bind:key="language.language" />
        </div>

        <h2 class="m-4">Courses</h2>
        <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Course v-for="course in courses" :item="course" v-bind:key="course" />
        </div>

        <h2 class="m-4">Certifications</h2>
        <div class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Certification v-for="certification in certifications" :item="certification" v-bind:key="certification" />
        </div>

        <h2 class="m-4">Conferences</h2>
        <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Conference v-for="conference in conferences" :item="conference" v-bind:key="conference" />
        </div>
      </div>
    </div>
  </div>

</template>


<script setup>

const languages = [
  { "language": "Danish", "proficiency": "Native" },
  { "language": "German", "proficiency": "Native" },
  { "language": "English", "proficiency": "Full professional proficiency" },
  { "language": "Japanese", "proficiency": "Elementary proficiency" }
]

const schools = [
  {
    "timespan": "2002 - 2005",
    "school": "IT-University Copenhagen",
    "title": "Diploma in Information Technology"

  },
  {
    "timespan": "1998 - 2000",
    "school": "Lyngby Uddannelsescenter",
    "title": "Datamatician"
  },
  {
    "timespan": "1988 - 1991",
    "school": "Deutsches Gymnasium für Nordschleswig",
    "title": "High school"
  }

]

const courses = [
  { "title": "Product Owner 360", "company": "GoAgile", "year": "2019" },
  { "title": "Lead for Greatness", "company": "GoAgile", "year": "2018" },
  { "title": "Angular 2.0", "company": "Trifork", "year": "2016" },
  { "title": "Stillwater Leadership", "company": "Stillwater", "year": "2016" },
  { "title": "Graphical Facilitation", "company": "Future Factory", "year": "2016" },
  { "title": "Agile Project Leadership", "company": "GoAgile", "year": "2012" }
]

const certifications = [
  { "title": "Introduction to Quantum Computing for Everyone", "company": "edX / ChicagoX", "year": "2021" },
  { "title": "QTM1x: The Quantum Internet and Quantum Computers: How Will They Change the World?", "company": "edX / DelftX", "year": "2021" },
  { "title": "Certified LeSS practitioner", "company": "LeSS", "year": "2021" },
  { "title": "Certified SAfe agilist", "company": "SAFe", "year": "2016" },
  { "title": "Professional Scrum Master", "company": "Scrum.org", "year": "2013" },
  { "title": "Agile Foundation Leadership Focus", "company": "DSDM", "year": "2012" }
]
const conferences = [
  { "title": "Agile Coach Camp", "country": "Denmark", "year": "2022" },
  { "title": "Agile Coach Camp (co-organizer)", "country": "Denmark", "year": "2019" },
  { "title": "Elixir Conf Europe", "country": "Barcelona", "year": "2017" },
  { "title": "Elixir Conf Europe", "country": "Berlin", "year": "2016" },
  { "title": "Agile Coach Camp (co-organizer)", "country": "Denmark", "year": "2016" },
  { "title": "Agile Coach Camp", "country": "Denmark", "year": "2015" },
  { "title": "XP Days", "country": "Benelux", "year": "2015" }
]
</script>