<template>
	<div class="">
		<Menu bgColor="bg-white" />

		<div class="container cv mx-auto p-4 ">
			<div>
				<h1 class="m-4">CV</h1>

				<div class="flex justify-center">
					<img src="/img/cv.jpg" class="lg:w-48 md:w-48 w-32 rounded-lg">
				</div>



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

				<hr />
				<h2 class="m-4">Education</h2>
				<div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Education v-for="education in data.cv.educations" :item="education" v-bind:key="education.studyType" />
				</div>

				<hr />

				<h2 class="m-4">Languages</h2>
				<div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Language v-for="language in data.cv.languages" :item="language" v-bind:key="language.language" />
				</div>
				<hr />

				<h2 class="m-4">Courses</h2>
				<div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Course v-for="course in achivement(data, 'courses')" :item="course" v-bind:key="course" />
				</div>
				<hr />
				<h2 class="m-4">Certifications</h2>
				<div class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Certification v-for="certification in achivement(data, 'certifications')" :item="certification"
						v-bind:key="certification" />
				</div>
				<hr />

				<h2 class="m-4">Conferences</h2>
				<div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Conference v-for="conference in achivement(data, 'conferences')" :item="conference" v-bind:key="conference" />
				</div>
				<hr />

				<h2 class="m-4">Experience</h2>

				<label class="relative inline-flex items-center cursor-pointer ml-4">
					<input type="checkbox" @click="toogleDetails()" value="" class="sr-only peer">
					<div
						class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
					</div>
					<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Details</span>
				</label>


				<div class=" grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-4">
					<Experience v-for="experience in (data.cv.experiences)" :item="experience" v-bind:key="experience"
						:showDetails="showDetails" />
				</div>
				<h2 class="m-4">Technologies</h2>
				<div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8" v-if="data.cv.skills">
					<Skill v-for="skill in sortSkills(data.cv.skills)" :item="skill" v-bind:key="skill.name" />
				</div>

			</div>

			<div v-if="data && route.query.showFullCV">
				<pre>{{ data.cv }}*</pre>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { pending, data: data } = await useFetch('/api/cv');

const showDetails = ref(false);

function sortSkills(skills) {
	return skills.filter(skill => skill.lastUsed > '2014')//.sort((x, y) => y.lastUsed < x.lastUsed)
}

function toogleDetails() {
	console.log("toogle")
	showDetails.value = !showDetails.value;
}

function achivement(data, type) {
	return data.cv.achievements.list.filter(ach => ach.type === type)
}
</script>
