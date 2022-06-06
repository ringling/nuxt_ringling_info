<template>
	<div class="">
		<Menu bgColor="bg-white" />

		<div class="container mx-auto p-4 ">
			<div>
				<h1 class="m-4">CV</h1>

<h2 class="m-4">Education</h2>
        <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Education v-for="education in data.cv.educations" :item="education" v-bind:key="education.studyType" />
        </div>

        <hr />

        <h2 class="m-4">Languages</h2>
        <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Language v-for="language in data.cv.languages" :item="language" v-bind:key="language.language" />
        </div>
        <hr />

        <h2 class="m-4">Courses</h2>
        <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Course v-for="course in courses" :item="course" v-bind:key="course" />
        </div>
        <hr />

        <h2 class="m-4">Certifications</h2>

        <div class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Certification v-for="certification in data.cv.achievements.list.filter(ach => ach.type === 'certifications')" :item="certification" v-bind:key="certification" />
        </div>
        <hr />

        <h2 class="m-4">Conferences</h2>
        <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Conference v-for="conference in conferences" :item="conference" v-bind:key="conference" />
        </div>
			</div>

			<div v-if="data && route.query.showFullCV">
				<pre>
				{{ data.cv }}*
				</pre>
			</div>
		</div>
	</div>
</template>

<script setup>
const { pending, data: data } = useLazyFetch('/api/cv');
const route = useRoute()

const courses = [
  { "title": "Product Owner 360", "company": "GoAgile", "year": "2019" },
  { "title": "Lead for Greatness", "company": "GoAgile", "year": "2018" },
  { "title": "Angular 2.0", "company": "Trifork", "year": "2016" },
  { "title": "Stillwater Leadership", "company": "Stillwater", "year": "2016" },
  { "title": "Graphical Facilitation", "company": "Future Factory", "year": "2016" },
  { "title": "Agile Project Leadership", "company": "GoAgile", "year": "2012" }
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
