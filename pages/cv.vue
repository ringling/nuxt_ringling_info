<template>
	<div class="">
		<Menu bgColor="bg-white" />

		<div class="container cv mx-auto p-4 ">
			<div>
				<h1 class="m-4">CV</h1>

				<h2 class="m-4">Skills</h2>


				<p class="m-4">Self-assessment</p>
				<div
					class="m-4 mb-16 text-gray-600 text-sm grid grid-cols- gap-4 lg:gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8 uppercase">
					<div class="skill">
						<div class="skill-text">
							agile principles
						</div>
						<div class="w-full bg-gray-400 mb-2 flex-grow">
							<div class="bg-gray-600 text-xs leading-none py-1 text-center text-black skill-text" style="width:100%;">
							</div>
						</div>
					</div>
					<div class="skill">
						<div class="skill-text">
							programming
						</div>
						<div class="w-full bg-gray-400 mb-2 flex-grow">
							<div class="bg-gray-600 text-xs leading-none py-1 text-center text-black skill-text" style="width:100%;">
							</div>
						</div>
					</div>
					<div class="skill">
						<div class="skill-text">
							web technologies
						</div>
						<div class="w-full bg-gray-400 mb-2 flex-grow">
							<div class="bg-gray-600 text-xs leading-none py-1 text-center text-black skill-text" style="width:80%;">
							</div>
						</div>
					</div>
					<div class="skill">
						<div class="skill-text">
							architecture
						</div>
						<div class="w-full bg-gray-400 mb-2 flex-grow">
							<div class="bg-gray-600 text-xs leading-none py-1 text-center text-black skill-text" style="width:70%;">
							</div>
						</div>
					</div>
					<div class="skill">
						<div class="skill-text">
							dev ops
						</div>
						<div class="w-full bg-gray-400 mb-2 flex-grow">
							<div class="bg-gray-600 text-xs leading-none py-1 text-center text-black skill-text" style="width:60%;">
							</div>
						</div>
					</div>
					<div class="skill">
						<div class="skill-text">
							UI design
						</div>
						<div class="w-full bg-gray-400 mb-2 flex-grow">
							<div class="bg-gray-600 text-xs leading-none py-1 text-center text-black skill-text" style="width:50%;">
							</div>
						</div>
					</div>
				</div>

				<hr/>
				<h2 class="m-4">Education</h2>
				<div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Education v-for="education in data.cv.educations" :item="education" v-bind:key="education.studyType" />
				</div>

				<hr/>

				<h2 class="m-4">Languages</h2>
				<div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Language v-for="language in data.cv.languages" :item="language" v-bind:key="language.language" />
				</div>
				<hr/>

				<h2 class="m-4">Courses</h2>
				<div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Course v-for="course in achivement(data, 'courses')" :item="course" v-bind:key="course" />
				</div>
				<hr/>

				<h2 class="m-4">Certifications</h2>
				<div class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Certification v-for="certification in achivement(data, 'certifications')" :item="certification"
						v-bind:key="certification" />
				</div>
				<hr/>

				<h2 class="m-4">Conferences</h2>
				<div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Conference v-for="conference in achivement(data, 'conferences')" :item="conference"
						v-bind:key="conference" />
				</div>
				<hr/>

				<h2 class="m-4">Technologies</h2>
				<div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Skill v-for="skill in skills(data)" :item="skill" v-bind:key="skill.name" />
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

function skills(data) {
	
	return data.cv.skills.sort(function (x, y) {
		return y.lastUsed > x.lastUsed
	});


}

function achivement(data, type) {
	return data.cv.achievements.list.filter(ach => ach.type === type)
}
</script>
