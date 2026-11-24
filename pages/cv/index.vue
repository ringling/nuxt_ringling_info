<template>
  <div>
    <Menu />
    <a class="skip-link" href="#main">Skip to content</a>

    <main id="main" class="pp">
      <header>
        <div class="pp-masthead">
          <span class="pp-label">Curriculum Vitae</span>
          <span class="pp-label">Updated November 2026</span>
        </div>
        <h1>Twenty-five years of shipping software.</h1>
        <p class="pp-lede">Software developer since 2001. Living north of Copenhagen with my wife and daughters.</p>
      </header>

      <hr>

      <section class="pp-intro">
        <div class="pp-profile">
          <p>
            I've been building software for over 25 years and I still write code. That part hasn't changed. What has
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
        <div>
          <div class="pp-label pp-colhead">Contact</div>
          <ul class="pp-pairs">
            <li><span class="k">Email</span><span class="v"><a href="mailto:cv@ringling.info">cv@ringling.info</a></span></li>
            <li><span class="k">LinkedIn</span><span class="v"><a href="https://www.linkedin.com/in/thomas-ringling-88698b/" target="_blank" rel="noreferrer">Thomas Ringling</a></span></li>
            <li><span class="k">Based</span><span class="v">Copenhagen, Denmark</span></li>
            <li><span class="k">Currently</span><span class="v">Data Engineer</span></li>
          </ul>
          <div class="pp-label pp-colhead">Languages</div>
          <ul v-if="data" class="pp-pairs">
            <li v-for="l in data.cv.languages" :key="l.language">
              <span class="k">{{ l.language }}</span><span class="v">{{ l.fluency }}</span>
            </li>
          </ul>
          <div class="pp-label pp-colhead">Print version</div>
          <ul class="pp-pairs pp-flush">
            <li><span class="k">PDF-ready CV</span><span class="v"><NuxtLink to="/cv/print">English</NuxtLink> · <NuxtLink to="/cv/print?lang=da">Dansk</NuxtLink></span></li>
          </ul>
        </div>
      </section>

      <hr>

      <section>
        <h2>Experience</h2>
        <button type="button" class="pp-toggle" :aria-expanded="showDetails" @click="showDetails = !showDetails">
          {{ showDetails ? 'Hide details' : 'Show details' }}
        </button>
        <template v-if="data">
          <article v-for="(exp, i) in data.cv.experiences" :key="i" class="pp-row">
            <div class="pp-row-meta"><div class="pp-label">{{ exp.startDate }} — {{ exp.endDate || 'Present' }}</div></div>
            <div>
              <h3>{{ exp.title }}</h3>
              <div class="pp-org">{{ exp.companyName }}</div>
              <template v-if="showDetails">
                <p v-if="exp.summary" v-html="exp.summary" />
                <div v-if="exp.technologies?.length" class="pp-tags">{{ exp.technologies.join(' · ') }}</div>
              </template>
            </div>
          </article>
        </template>
      </section>

      <section class="pp-section">
        <h2>Education</h2>
        <article v-for="edu in educations" :key="edu.studyType" class="pp-row">
          <div class="pp-row-meta"><div class="pp-label">{{ edu.startDate }} — {{ edu.endDate }}</div></div>
          <div>
            <h3>{{ edu.studyType }}</h3>
            <div class="pp-org">{{ edu.institution }}</div>
            <p>{{ edu.note }}</p>
          </div>
        </article>
      </section>

      <section v-for="list in achievementSections" :key="list.title" class="pp-section">
        <h2>{{ list.title }}</h2>
        <div v-for="g in list.groups" :key="g.label" class="pp-row cv-group">
          <div class="pp-row-meta"><div class="pp-label">{{ g.label }}</div></div>
          <ul class="pp-pairs pp-flush">
            <li v-for="item in g.items" :key="item.name">
              <span class="k">{{ item.name }}</span><span class="v">{{ item.meta }}<template v-if="item.link"> · <a :href="item.link" target="_blank" rel="noreferrer">Certificate</a></template></span>
            </li>
          </ul>
        </div>
      </section>

      <section class="pp-section">
        <h2>Self-assessment</h2>
        <div class="cv-bars">
          <div v-for="skill in skillsOverview" :key="skill.name">
            <div class="pp-label cv-bar-label">{{ skill.name }}</div>
            <div class="cv-bar-track"><div class="cv-bar-fill" :style="{ width: skill.percentage + '%' }" /></div>
          </div>
        </div>
      </section>

      <section v-if="data?.cv.skills" class="pp-section">
        <h2>Technologies</h2>
        <ul class="pp-pairs pp-flush pp-inline">
          <li v-for="skill in sortSkills(data.cv.skills)" :key="skill.name">
            <span class="k">{{ skill.name }}</span><span class="v">{{ skill.firstUsed }}–{{ skill.lastUsed }}</span>
          </li>
        </ul>
      </section>

      <section class="pp-section">
        <h2>Outside work</h2>
        <div class="cv-hobbies">
          <figure v-for="hobby in hobbies" :key="hobby.title">
            <img :src="hobby.img" :alt="hobby.title">
            <figcaption>
              <h4>{{ hobby.title }}</h4>
              <p>{{ hobby.body }}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <footer class="pp-footer">
        <span class="pp-label">ringling.info · © 2026</span>
        <span class="pp-label">Built with Nuxt 3 · Hetzner / Docker</span>
      </footer>
    </main>

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
  { name: 'Machine Learning', percentage: 40 },
]

const educations = [
  { studyType: 'Diploma in IT', institution: 'IT University of Copenhagen', startDate: '2002', endDate: '2005', note: 'Two-year graduate diploma programme (continuing education) · 60 ECTS · EQF level 6.' },
  { studyType: 'AP Graduate in Computer Science (Datamatiker)', institution: 'Lyngby Uddannelsescenter', startDate: '1998', endDate: '2000', note: '2½-year applied computer science programme · 150 ECTS · EQF level 5.' },
  { studyType: 'Gymnasium', institution: 'Deutsches Gymnasium für Nordschleswig', startDate: '1988', endDate: '1991', note: 'Upper secondary education.' },
]

const hobbies = [
  { title: 'Physical training', img: '/img/fitness.jpg', body: 'Trained my whole life: martial arts for 30 years, now mostly weights.' },
  { title: 'Guitar', img: '/img/guitar.jpg', body: 'Mostly classical guitar, some western too.' },
  { title: 'Japanese', img: '/img/japanese.jpg', body: 'Language, culture and sashimono (joinery).' },
  { title: 'Family', img: '/img/family.jpg', body: 'Most of my time outside work goes to family.' },
]

// Show technologies used since 2018 (plus pinned ones), most recent first, then by proficiency (1 = best)
function sortSkills(skills: Skill[]): Skill[] {
  return skills
    .filter(skill => skill.lastUsed >= '2018' || skill.pinned)
    .sort((a, b) =>
      b.lastUsed.localeCompare(a.lastUsed) ||
      a.proficiencyLevel - b.proficiencyLevel ||
      a.name.localeCompare(b.name))
}

interface ListItem { name: string, meta: string, link?: string }
interface ListGroup { label: string, items: ListItem[] }

const achievementsOf = (type: Achievement['type']) =>
  (data.value?.cv.achievements.list ?? []).filter(a => a.type === type && a.web !== false)

// "2024 - Coursera / Duke University" -> "Coursera / Duke University · 2024", to match the printMeta style.
const tidyMeta = (s: string) => s.replace(/^(\d{4}) - (.+)$/, '$2 · $1').replace(/ - /g, ' · ')

const item = (a: Achievement): ListItem => ({
  name: a.printTitle || a.title,
  meta: a.printMeta || tidyMeta(a.description || ''),
  link: a.documentation || undefined,
})

// Certifications and courses carry a `group` in data.json; the order here is the display order.
function byGroup(type: Achievement['type'], groups: [string, string][]): ListGroup[] {
  const list = achievementsOf(type)
  return groups
    // Formal certifications (print: true) before online course certificates within a group.
    .map(([key, label]) => ({ label, items: list.filter(a => a.group === key).sort((a, b) => Number(b.print === true) - Number(a.print === true)).map(item) }))
    .filter(g => g.items.length)
}

// Conferences: one line per series ("SAOS 2024" -> "SAOS"), newest series first, years listed newest first.
function conferenceGroups(): ListGroup[] {
  const series = new Map<string, { latest: number, full: string, entries: { year: string, place: string, organizer: boolean }[] }>()
  for (const a of achievementsOf('conferences')) {
    const year = a.title.match(/\d{4}$/)?.[0] ?? ''
    const name = a.title.replace(/\s*\d{4}$/, '')
    const desc = a.description ?? ''
    const s = series.get(name) ?? { latest: 0, full: a.documentation ?? '', entries: [] }
    s.latest = Math.max(s.latest, Number(year))
    s.entries.push({ year, place: desc.replace(/\s*-\s*co-organizer/i, ''), organizer: /co-organizer/i.test(desc) })
    series.set(name, s)
  }
  const AGILE = ['Agile Coach Camp', 'SAOS', 'XP Days']
  const items = [...series.entries()]
    .sort((x, y) => y[1].latest - x[1].latest)
    .map(([name, s]) => {
      const places = new Set(s.entries.map(e => e.place))
      const years = s.entries
        .sort((x, y) => Number(y.year) - Number(x.year))
        .map(e => (places.size > 1 ? `${e.place} ${e.year}` : e.year) + (e.organizer ? ' (co-organizer)' : ''))
        .join(', ')
      const meta = [s.full, places.size === 1 ? [...places][0] : '', years].filter(Boolean).join(' · ')
      return { name, meta, agile: AGILE.includes(name) }
    })
  return [
    { label: 'Agile & architecture', items: items.filter(i => i.agile) },
    { label: 'Programming', items: items.filter(i => !i.agile) },
  ].filter(g => g.items.length)
}

// Teaching: most recent first, by the last year of the period.
function teachingGroups(): ListGroup[] {
  const end = (a: Achievement) => Number(a.period?.match(/\d{4}$/)?.[0] ?? 0)
  const list = achievementsOf('teaching').sort((a, b) => end(b) - end(a))
  const isMilitary = (a: Achievement) => /army|medic/i.test(a.title)
  const toItem = (a: Achievement) => ({ name: a.title, meta: [a.description, a.period?.replace('-', '–')].filter(Boolean).join(' · ') })
  return [
    { label: 'Software & agile', items: list.filter(a => !isMilitary(a)).map(toItem) },
    { label: 'Military', items: list.filter(isMilitary).map(toItem) },
  ].filter(g => g.items.length)
}

const achievementSections = computed(() => [
  { title: 'Certifications', groups: byGroup('certifications', [['agile', 'Agile'], ['testing', 'Testing'], ['ai-data', 'AI & Data'], ['systems', 'Systems & more']]) },
  { title: 'Courses', groups: byGroup('courses', [['agile', 'Agile & leadership'], ['technical', 'Technical'], ['language', 'Language']]) },
  { title: 'Teaching', groups: teachingGroups() },
  { title: 'Conferences', groups: conferenceGroups() },
].filter(s => s.groups.length))
</script>

<style scoped>
.skip-link {
  position: absolute;
  left: -9999px;
  padding: 8px 12px;
  background: #1c1c1c;
  color: #fff;
  z-index: 100;
  background-image: none !important;
}
.skip-link:focus { left: 8px; top: 8px; }

.cv-group { padding-bottom: 28px; }

.cv-bars { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px 40px; }
.cv-bar-label { margin-bottom: 6px; }
.cv-bar-track { height: 2px; background: var(--rule); }
.cv-bar-fill { height: 2px; background: var(--ink); }

.cv-hobbies { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 48px; }
.cv-hobbies figure { margin: 0; }
/* The paper-art images have white backgrounds; multiply blends them into the page background. */
.cv-hobbies img { width: 100%; aspect-ratio: 1; object-fit: contain; display: block; margin-bottom: 16px; mix-blend-mode: multiply; }
.cv-hobbies h4 { margin-bottom: 6px; }
.cv-hobbies p { margin: 0; font-size: 18px; line-height: 1.45; }

@media screen and (max-width: 900px) {
  .cv-hobbies { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px 24px; }
}
</style>
