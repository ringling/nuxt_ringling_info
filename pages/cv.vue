<template>
	<div class="">
		<Menu bgColor="bg-white" />

		<div class="container cv mx-auto p-4 ">
			<div>
				<h1 class="m-4">CV</h1>
				<div v-if="pending" class="flex justify-center p-8">
					<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
				</div>
				<div v-else class="flex justify-center">
					<img src="/img/cv.jpg" class="lg:w-48 md:w-48 w-32 rounded-lg">
				</div>

				<div class="mt-8 mb-2"></div>
				<h2 class="m-4">Profile</h2>

				<div class="m-4">
					As a lifetime learner and polyglot software craftsman, I have a great love for physical training, music, and
					nature. I am currently living north of Copenhagen with my wife and daughter. With over 20 years of experience in
					software development, I have implemented and taught agile methodologies and principles. I have a wide range of
					experience in different technologies, paradigms, and programming languages. My roles have included developer,
					coach, teacher, architect, project manager, scrum master, product owner, and team lead, both within and outside
					of
					IT.
				</div>
				<div class="m-4">

					As someone who still actively develops software, I keep up with new technologies and thrive in environments and
					cultures that value competences, innovation, and creativity. My experience has taught me that the key to success
					in software development is not just technical expertise, but also the ability to communicate effectively and
					work
					collaboratively with others.
				</div>
				<div class="m-4">

					My passion for physical training, music, and nature has taught me the importance of balance in life. I believe
					that a healthy body and mind are essential for success in any field, including software development. I am
					committed to continuous learning and growth, both personally and professionally.
				</div>
				<h2 class="m-4">Contact</h2>
				<ContactInfo :contactData="contactInfo" />


				<h2 class="m-4">Skills</h2>

				<p class="m-4">Self-assessment</p>
				<SkillsOverview :skills="skillsOverview" />

				<hr />
				<h2 class="m-4">Education</h2>
				<div v-if="!pending" class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Education v-for="education in data.cv.educations" :item="education" v-bind:key="education.studyType" />
				</div>

				<hr />

				<h2 class="m-4">Languages</h2>
				<div v-if="!pending" class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Language v-for="language in data.cv.languages" :item="language" v-bind:key="language.language" />

				</div>
				<hr />

				<h2 class="m-4">Courses</h2>
				<div v-if="!pending" class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Course v-for="course in getAchievements(data, 'courses')" :item="course" v-bind:key="course" />

				</div>

				<hr />
				<h2 class="m-4">Certifications</h2>
				<div v-if="!pending" class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Certification v-for="certification in getAchievements(data, 'certifications')" :item="certification"
						v-bind:key="certification" />
				</div>
				<hr />

				<h2 class="m-4">Conferences</h2>
				<div v-if="!pending" class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Conference v-for="conference in getAchievements(data, 'conferences')" :item="conference" v-bind:key="conference" />
				</div>
				<hr />

				<h2 class="m-4">Experience</h2>

				<label class="relative inline-flex items-center cursor-pointer ml-4">
					<input type="checkbox" @click="toggleDetails()" value="" class="sr-only peer">
					<div
						class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
					</div>
					<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Details</span>
				</label>


				<div v-if="!pending" class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-4">
					<Experience v-for="experience in (data.cv.experiences)" :item="experience" v-bind:key="experience"
						:showDetails="showDetails || route.query.showDetails=='true'" />
				</div>

				<h2 class="m-4">Technologies</h2>
				<div v-if="!pending && data.cv.skills" class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<Skill v-for="skill in sortSkills(data.cv.skills)" :item="skill" v-bind:key="skill.name" />
				</div>

				<h2 class="m-4">Hobbies</h2>


				<div class="flex justify-center">
				</div>
				<div class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
					<div>

						<img src="/img/fitness.jpg" class="lg:w-48 md:w-48 w-32 rounded-lg">
						<figure class="box">
							<figcaption class="flex items-center space-x-4">
								<div class="flex-auto">
									<h3 class="mb-1">Physical training</h3>
									<div class="normal-case">I have trained my entire life, including martial arts for 30 years. Now
										primarily weight training.</div>
								</div>
							</figcaption>
						</figure>
					</div>
					<div>
						<img src="/img/guitar.jpg" class="lg:w-48 md:w-48 w-32 rounded-lg">

						<figure class="box">
							<figcaption class="flex items-center space-x-4">
								<div class="flex-auto">
									<h3 class="mb-1">Guitar</h3>
									<div class="normal-case">Primarily classical guitar, but a little western as well</div>
								</div>
							</figcaption>
						</figure>
					</div>

					<div>
						<img src="/img/japanese.jpg" class="lg:w-48 md:w-48 w-32 rounded-lg">

						<figure class="box">
							<figcaption class="flex items-center space-x-4">
								<div class="flex-auto">
									<h3 class="mb-1">Japanese</h3>
									<div class="normal-case">Language, culture and sashimono(joinery)</div>
								</div>
							</figcaption>
						</figure>
					</div>
					<div>

						<img src="/img/family.jpg" class="text-center lg:w-48 md:w-48 w-32">
						<figure class="box">
							<figcaption class="flex items-center space-x-4">
								<div class="flex-auto">
									<h3 class="mb-1">Family</h3>
									<div class="normal-case">Spending a lot of my time together with my family</div>
								</div>
							</figcaption>
						</figure>
					</div>
				</div>

			</div>

			<div v-if="data && route.query.showFullCV">
				<pre>{{ data.cv }}*</pre>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">


useHead({
	title: 'Thomas Ringling - CV',
  meta: [
		{ name: 'description', content: 'Curriculum Vitae' }
  ],
	link: [
    {rel: "canonical", href: "https://www.ringling.info/cv"}
  ],
})

import type { CVResponse, Skill, Achievement } from '~/types/cv'

const route = useRoute()
const { pending, data: data, error } = await useFetch<CVResponse>('/api/cv')

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode || 500,
    statusMessage: error.value.statusMessage || 'Failed to load CV data'
  })
}

const showDetails = ref(false)

const skillsOverview = [
  { name: 'agile principles', percentage: 100 },
  { name: 'programming', percentage: 100 },
  { name: 'web technologies', percentage: 80 },
  { name: 'architecture', percentage: 70 },
  { name: 'dev ops', percentage: 60 },
  { name: 'UI design', percentage: 50 },
  { name: 'Machine Learning', percentage: 20 }
]

const contactInfo = {
  email: 'cv@ringling.info',
  twitterUsername: 'thomasringling',
  linkedinUrl: 'https://www.linkedin.com/in/thomas-ringling-88698b/',
  linkedinText: 'Thomas Ringling'
}

function sortSkills(skills: Skill[]): Skill[] {
	return skills.filter(skill => skill.lastUsed > '2014')
}

function toggleDetails(): void {
	showDetails.value = !showDetails.value
}

function getAchievements(data: CVResponse, type: string): Achievement[] {
	return data.cv.achievements.list.filter(ach => ach.type === type)
}



</script>

