<template>
  <div>
    <Menu />
    <div class="page-inner">

      <!-- Skip link -->
      <a class="skip-link" href="#main">Skip to content</a>

      <!-- Hero header -->
      <div id="main" class="cv-header">
        <div class="cv-eyebrow">
          <span class="eyebrow-rule" />
          02 — Curriculum vitae
        </div>
        <h1 class="cv-h1">
          Twenty-five years <span class="accent">of</span> shipping software.
        </h1>
        <p class="cv-lede">
          Software developer since 2001. Living north of Copenhagen with my wife and daughters.
        </p>
        <dl class="cv-meta">
          <dt>Based</dt><dd>Copenhagen, DK</dd>
          <dt>Currently</dt><dd>Data Engineer</dd>
          <dt>Updated</dt><dd>April 2026</dd>
        </dl>
      </div>

      <!-- 01 Profile -->
      <div class="section-rule"><span class="sr-num">01 / Profile</span><span class="sr-line" /></div>
      <div class="prose-2col">
        <p>
          I've been building software for over 25 years and I still write code — that part hasn't changed. What has
          changed is how many roles I've cycled through: developer, coach, architect, team lead. I've introduced agile
          in places that needed it, and worked in enough languages and paradigms that I stopped keeping count.
        </p>
        <p>
          I live north of Copenhagen with my wife and daughters. When I'm not at a keyboard, I train, play
          classical guitar, or just go for a walk.
          The longer I do this work, the more I think the hard part was never the technology. It's getting people to
          actually talk to each other. Every project that went well had that. Every one that didn't, didn't.
        </p>
      </div>

      <!-- 02 Contact -->
      <div class="section-rule"><span class="sr-num">02 / Contact</span><span class="sr-line" /></div>
      <div class="contact-row">
        <div class="contact-item">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <a href="mailto:cv@ringling.info">cv@ringling.info</a>
        </div>
        <div class="contact-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="#111827">
            <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"/>
          </svg>
          <a href="https://www.linkedin.com/in/thomas-ringling-88698b/" target="_blank" rel="noreferrer">Thomas Ringling</a>
        </div>
      </div>

      <!-- 03 Skills -->
      <div class="section-rule"><span class="sr-num">03 / Skills</span><span class="sr-line" /></div>
      <p class="section-note">Self-assessment</p>
      <div class="progress-grid">
        <div v-for="skill in skillsOverview" :key="skill.name" class="progress-bar">
          <div class="progress-label">{{ skill.name }}</div>
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: skill.percentage + '%' }" />
          </div>
        </div>
      </div>

      <!-- 04 Education -->
      <div class="section-rule"><span class="sr-num">04 / Education</span><span class="sr-line" /></div>
      <div class="bf-grid">
        <div v-for="(edu, i) in educations" :key="edu.studyType" class="box-figure">
          <div class="bf-idx">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="bf-body">
            <div class="bf-kicker">{{ edu.startDate }} — {{ edu.endDate }}</div>
            <div class="bf-title">{{ edu.studyType }}</div>
            <div class="bf-subtitle">{{ edu.institution }}</div>
            <div v-if="edu.note" class="bf-note">{{ edu.note }}</div>
          </div>
        </div>
      </div>

      <!-- 05 Languages -->
      <div class="section-rule"><span class="sr-num">05 / Languages</span><span class="sr-line" /></div>
      <div v-if="!pending" class="progress-grid">
        <div v-for="lang in data.cv.languages" :key="lang.language" class="progress-bar">
          <div class="progress-label">{{ lang.language }}</div>
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: lang.proficiency }" />
          </div>
          <div class="lang-fluency">{{ lang.fluency }}</div>
        </div>
      </div>

      <!-- 06 Experience -->
      <div class="section-rule"><span class="sr-num">06 / Experience</span><span class="sr-line" /></div>
      <label class="toggle-label">
        <span class="toggle-track" :class="{ on: showDetails }">
          <span class="toggle-thumb" :class="{ on: showDetails }" />
          <input type="checkbox" v-model="showDetails" class="toggle-input" />
        </span>
        <span class="toggle-text">Details</span>
      </label>
      <div v-if="!pending" class="bf-grid">
        <div v-for="(exp, i) in data.cv.experiences" :key="i" class="box-figure">
          <div class="bf-idx">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="bf-body">
            <div class="bf-kicker">{{ exp.startDate }} — {{ exp.endDate || 'present' }}</div>
            <div class="bf-title">{{ exp.companyName }}</div>
            <div class="bf-subtitle">{{ exp.title }}</div>
            <div v-if="showDetails && exp.summary" class="bf-note">{{ exp.summary }}</div>
          </div>
        </div>
      </div>

      <!-- 07 Courses -->
      <div class="section-rule"><span class="sr-num">07 / Courses</span><span class="sr-line" /></div>
      <div v-if="!pending" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <Course v-for="course in getAchievements(data, 'courses')" :item="course" :key="course.title" />
      </div>

      <!-- 08 Certifications -->
      <div class="section-rule"><span class="sr-num">08 / Certifications</span><span class="sr-line" /></div>
      <div v-if="!pending" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <Certification v-for="cert in getAchievements(data, 'certifications')" :item="cert" :key="cert.title" />
      </div>

      <!-- 09 Conferences -->
      <div class="section-rule"><span class="sr-num">09 / Conferences</span><span class="sr-line" /></div>
      <div v-if="!pending" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <Conference v-for="conf in getAchievements(data, 'conferences')" :item="conf" :key="conf.title" />
      </div>

      <!-- 10 Hobbies -->
      <div class="section-rule"><span class="sr-num">10 / Hobbies</span><span class="sr-line" /></div>
      <div class="hobbies-grid">
        <div v-for="hobby in hobbies" :key="hobby.title" class="hobby-card">
          <img :src="hobby.img" :alt="hobby.title" class="hobby-img" />
          <div class="hobby-label">{{ hobby.title }}</div>
          <div class="hobby-body">{{ hobby.body }}</div>
        </div>
      </div>

      <!-- 11 Technologies -->
      <div class="section-rule"><span class="sr-num">11 / Technologies</span><span class="sr-line" /></div>
      <div v-if="!pending && data.cv.skills" class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 mb-8">
        <Skill v-for="skill in sortSkills(data.cv.skills)" :item="skill" :key="skill.name" />
      </div>

      <!-- Colophon -->
      <footer class="cv-footer">
        <div class="footer-left">
          <span class="footer-site">ringling.info</span>
          <span>© 2026</span>
        </div>
        <div class="footer-right">
          <span>Built with Nuxt 3</span>
          <span>Hetzner / Docker</span>
        </div>
      </footer>

    </div>

    <div v-if="data && route.query.showFullCV">
      <pre>{{ data.cv }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CVResponse, Skill, Achievement } from '~/types/cv'

useHead({
  title: 'Thomas Ringling — CV',
  meta: [{ name: 'description', content: 'Curriculum Vitae — Twenty-five years of shipping software.' }],
  link: [{ rel: 'canonical', href: 'https://www.ringling.info/cv' }],
})

const route = useRoute()
const { pending, data, error } = await useFetch<CVResponse>('/api/cv')

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode || 500,
    statusMessage: error.value.statusMessage || 'Failed to load CV data'
  })
}

const showDetails = ref(false)

const skillsOverview = [
  { name: 'Agile principles', percentage: 100 },
  { name: 'Programming', percentage: 100 },
  { name: 'Web technologies', percentage: 80 },
  { name: 'Architecture', percentage: 70 },
  { name: 'Dev Ops', percentage: 60 },
  { name: 'UI design', percentage: 50 },
  { name: 'Machine Learning', percentage: 20 },
]

const educations = [
  { studyType: 'Diploma in IT', institution: 'IT University of Copenhagen', startDate: '2002', endDate: '2005', note: 'Two-year graduate diploma programme (continuing education) · 60 ECTS · EQF level 6.' },
  { studyType: 'AP Graduate in Computer Science (Datamatiker)', institution: 'Lyngby Uddannelsescenter', startDate: '1998', endDate: '2000', note: '2½-year applied computer science programme · 150 ECTS · EQF level 5.' },
  { studyType: 'Gymnasium', institution: 'Deutsches Gymnasium für Nordschleswig', startDate: '1988', endDate: '1991', note: 'Upper secondary education.' },
]

const hobbies = [
  { title: 'Physical training', img: '/img/fitness.jpg', body: 'Trained my whole life — martial arts for 30 years, now mostly weights.' },
  { title: 'Guitar', img: '/img/guitar.jpg', body: 'Mostly classical guitar, some western too.' },
  { title: 'Japanese', img: '/img/japanese.jpg', body: 'Language, culture and sashimono (joinery).' },
  { title: 'Family', img: '/img/family.jpg', body: 'Most of my time outside work goes to family.' },
]

function sortSkills(skills: Skill[]): Skill[] {
  return skills.filter(skill => skill.lastUsed > '2014')
}

function getAchievements(data: CVResponse, type: string): Achievement[] {
  return data.cv.achievements.list.filter(ach => ach.type === type)
}
</script>

<style scoped>
.page-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

.skip-link {
  position: absolute;
  left: -9999px;
  padding: 8px 12px;
  background: #111827;
  color: #fff;
  font-family: var(--font-mono);
  font-size: 12px;
  z-index: 100;
  background-image: none !important;
}
.skip-link:focus {
  left: 8px;
  top: 8px;
}

/* Header */
.cv-header { margin-top: 80px; }

.cv-eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #111827;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.eyebrow-rule {
  display: inline-block;
  width: 24px;
  height: 1px;
  background: #111827;
}

.cv-h1 {
  font-size: clamp(48px, 6vw, 72px);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #111827;
  line-height: 0.95;
  margin: 0 0 8px 0;
  text-align: left;
}

.cv-lede {
  font-size: 17px;
  color: #374151;
  line-height: 1.6;
  max-width: 56ch;
  margin-top: 18px;
  margin-bottom: 0;
}

.cv-meta {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0 16px;
  font-size: 13px;
  color: #4b5563;
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  max-width: 480px;
}
.cv-meta dt {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #9ca3af;
  padding: 6px 0;
}
.cv-meta dd {
  margin: 0;
  padding: 6px 0;
  color: #111827;
}

/* Section rule */
.section-rule {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 64px 0 24px 0;
}
.sr-num {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #111827;
  font-weight: 600;
  white-space: nowrap;
}
.sr-line {
  flex: 1;
  height: 1px;
  background: #111827;
}

/* Prose — two-column editorial layout */
.prose-2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.prose-2col p { margin: 0; }
@media (max-width: 640px) {
  .prose-2col { grid-template-columns: 1fr; gap: 12px; }
}

.section-note {
  margin-bottom: 16px;
  color: #6b7280;
}

/* Contact */
.contact-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin: 0 0 8px 0;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
}

/* Progress bars */
.progress-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 8px;
}
.progress-bar {}
.progress-label {
  margin-bottom: 4px;
  text-transform: uppercase;
  font-size: 13px;
  color: #4b5563;
}
.progress-track {
  background: #9ca3af;
  height: 14px;
}
.progress-fill {
  background: #4b5563;
  height: 14px;
}
.lang-fluency {
  color: #4b5563;
  font-size: 13px;
  margin-top: 4px;
}

/* BoxFigure grid */
.bf-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 28px;
  margin-bottom: 8px;
}

/* Toggle */
.toggle-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  margin-bottom: 16px;
}
.toggle-track {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background: #e5e7eb;
  border-radius: 9999px;
  transition: background 150ms;
}
.toggle-track.on { background: #2563eb; }
.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  transition: left 150ms;
}
.toggle-thumb.on { left: 22px; }
.toggle-input {
  position: absolute;
  opacity: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.toggle-text {
  font-size: 14px;
  font-weight: 500;
  color: #111827;
}

/* Hobbies */
.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
  margin-bottom: 8px;
}
.hobby-card {}
.hobby-img {
  width: 100%;
  max-width: 192px;
  border-radius: 6px;
  display: block;
  margin-bottom: 12px;
}
.hobby-label {
  font-weight: 600;
  font-size: 15px;
  color: #111827;
  margin-bottom: 4px;
}
.hobby-body {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
}

/* Footer */
.cv-footer {
  margin-top: 80px;
  margin-bottom: 32px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: #6b7280;
}
.footer-left, .footer-right { display: flex; gap: 24px; }
.footer-site { color: #111827; }
</style>
