<template>
	<div class="">
		<Menu bgColor="bg-white" />

		<div class="container mx-auto p-4 ">
			<div>
				<h1 class="m-4">CV</h1>

				<h2 class="m-4">Education</h2>
        <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <Education v-for="education in data.cv.educations" :item="education" v-bind:key="education.studyType" />
        </div>
			
        <h2 class="m-4">Languages</h2>
        <div class="grid grid-cols- sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <Language v-for="language in data.cv.languages" :item="language" v-bind:key="language.language" />
        </div>

        <h2 class="m-4">Courses</h2>
        <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <Course v-for="course in achivement(data, 'courses')" :item="course" v-bind:key="course" />
        </div>

        <h2 class="m-4">Certifications</h2>
        <div class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <Certification v-for="certification in achivement(data,'certifications')" :item="certification" v-bind:key="certification" />
        </div>

        <h2 class="m-4">Conferences</h2>
        <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <Conference v-for="conference in achivement(data,'conferences')" :item="conference" v-bind:key="conference" />
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

function achivement(data, type) {
	return data.cv.achievements.list.filter(ach => ach.type === type)
}
</script>
