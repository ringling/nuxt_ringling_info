<template>
  <div class="pcv-screen">
    <div class="pcv-toolbar">
      <NuxtLink to="/cv">← Back to CV</NuxtLink>
      <button type="button" @click="print">Print / Save as PDF</button>
    </div>

    <main v-if="cv" class="pcv">
      <header>
        <div class="pcv-masthead">
          <span class="pcv-label">Curriculum Vitae</span>
          <span class="pcv-label">{{ updated }}</span>
        </div>
        <h1>{{ cv.basics.name }}</h1>
        <p class="pcv-lede">{{ cv.print.lede }}</p>
      </header>

      <hr>

      <section class="pcv-intro">
        <div class="pcv-profile">
          <p v-for="(para, i) in cv.print.profile" :key="i">{{ para }}</p>
        </div>
        <div>
          <div class="pcv-label pcv-colhead">Contact</div>
          <ul class="pcv-pairs">
            <li v-if="phone"><span class="k">Phone</span><span class="v">{{ phone }}</span></li>
            <li><span class="k">Email</span><span class="v">cv@ringling.info</span></li>
            <li><span class="k">Web</span><span class="v">ringling.info</span></li>
            <li><span class="k">Location</span><span class="v">{{ cv.basics.location.city }}, Denmark</span></li>
          </ul>
          <div class="pcv-label pcv-colhead">Languages</div>
          <ul class="pcv-pairs pcv-flush">
            <li v-for="lang in cv.languages" :key="lang.language">
              <span class="k">{{ lang.language }}</span><span class="v">{{ lang.fluency }}</span>
            </li>
          </ul>
        </div>
      </section>

      <hr>

      <section>
        <h2>Experience</h2>
        <article v-for="block in experienceBlocks" :key="block.key" class="pcv-exp">
          <div class="pcv-exp-meta"><div class="pcv-label">{{ block.period }}</div></div>
          <div class="pcv-exp-body">
            <template v-if="block.roles.length === 1">
              <h3>{{ block.roles[0].printTitle || block.roles[0].title }}</h3>
              <div class="pcv-org">{{ block.roles[0].companyName }}<template v-if="block.roles[0].note"> · {{ block.roles[0].note }}</template></div>
              <p v-html="block.roles[0].summary" />
              <div v-if="block.roles[0].technologies?.length" class="pcv-tags">{{ block.roles[0].technologies.join(' · ') }}</div>
            </template>
            <template v-else>
              <h3>{{ block.company }}</h3>
              <div class="pcv-org">{{ block.roles.length }} roles</div>
              <div v-for="role in block.roles" :key="role.startDate" class="pcv-sub">
                <div class="pcv-sub-head"><h4>{{ role.title }}</h4><span class="pcv-label">{{ period(role) }}</span></div>
                <p v-html="role.summary" />
                <div v-if="role.technologies?.length" class="pcv-tags">{{ role.technologies.join(' · ') }}</div>
              </div>
            </template>
          </div>
        </article>
      </section>

      <section v-if="ventures.length" class="pcv-keep pcv-gap">
        <h2>Ventures</h2>
        <article v-for="v in ventures" :key="v.companyName" class="pcv-exp">
          <div class="pcv-exp-meta"><div class="pcv-label">{{ period(v) }}</div></div>
          <div class="pcv-exp-body">
            <h3>{{ v.printTitle || v.title }}</h3>
            <div class="pcv-org">{{ v.companyName }}<template v-if="alongsideEmployment(v)"> · alongside employment</template></div>
            <p v-html="v.summary" />
            <div v-if="v.technologies?.length" class="pcv-tags">{{ v.technologies.join(' · ') }}</div>
          </div>
        </article>
      </section>

      <section class="pcv-keep">
        <div class="pcv-exp">
          <div class="pcv-exp-meta"><div class="pcv-label">{{ cv.print.earlier.period }}</div></div>
          <div class="pcv-exp-body">
            <h3>Earlier</h3>
            <p>{{ cv.print.earlier.text }}</p>
          </div>
        </div>
      </section>

      <section class="pcv-keep pcv-gap pcv-grid2">
        <div>
          <h2>Certifications</h2>
          <ul class="pcv-pairs pcv-flush">
            <li v-for="a in certifications" :key="a.title"><span class="k">{{ a.printTitle || a.title }}</span><span class="v">{{ a.printMeta }}</span></li>
          </ul>
        </div>
        <div>
          <h2>Coursework</h2>
          <ul class="pcv-pairs pcv-flush">
            <li v-for="a in coursework" :key="a.title"><span class="k">{{ a.printTitle || a.title }}</span><span class="v">{{ a.printMeta }}</span></li>
          </ul>
        </div>
      </section>

      <section class="pcv-keep pcv-gap pcv-grid2">
        <div>
          <h2>Education</h2>
          <ul class="pcv-pairs pcv-flush">
            <li v-for="edu in education" :key="edu.studyType">
              <span class="k">{{ edu.printTitle || edu.studyType }}</span>
              <span class="v">{{ edu.printMeta || `${edu.institution} · ${edu.startDate}–${edu.endDate}` }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h2>Courses</h2>
          <ul class="pcv-pairs pcv-flush">
            <li v-for="a in courses" :key="a.title"><span class="k">{{ a.printTitle || a.title }}</span><span class="v">{{ a.printMeta || a.description }}</span></li>
          </ul>
        </div>
      </section>

      <section class="pcv-keep pcv-gap">
        <h2>Technologies</h2>
        <ul class="pcv-pairs pcv-flush pcv-grid3">
          <li v-for="s in coreSkills" :key="s.name">
            <span class="k">{{ s.name }}</span><span class="v">{{ tier(s.proficiencyLevel) }} · since {{ s.firstUsed }}</span>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { CVResponse, Experience, Achievement } from '~/types/cv'

const route = useRoute()
const { data } = await useFetch<CVResponse>('/api/cv')
const cv = computed(() => data.value?.cv)

// The phone number is never stored in the repo or data.json; it is only passed in when generating the PDF.
const phone = computed(() => typeof route.query.phone === 'string' ? route.query.phone : '')

useHead({
  title: 'Thomas Ringling — CV',
  meta: [{ name: 'robots', content: 'noindex' }],
  link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap' }],
  bodyAttrs: { class: 'pcv-body' },
})

const updated = new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })

const year = (s: string) => Number((s || '').match(/\d{4}/)?.[0] ?? 0)
const period = (x: Experience) => `${x.startDate} — ${x.endDate || 'Present'}`
const tier = (level: number) => ({ 1: 'Expert', 2: 'Advanced', 3: 'Proficient' } as Record<number, string>)[level] ?? 'Basic'

interface Block { key: string, company: string, period: string, roles: Experience[] }

// Regular roles since the cut-off, newest first; consecutive roles sharing a `group` become one block.
const experienceBlocks = computed<Block[]>(() => {
  if (!cv.value) return []
  const roles = cv.value.experiences.filter(x => !x.venture && year(x.startDate) >= cv.value!.print.detailedSince)
  const blocks: Block[] = []
  for (const role of roles) {
    const last = blocks[blocks.length - 1]
    if (role.group && last?.key === role.group) {
      last.roles.push(role)
      last.period = `${role.startDate} — ${last.roles[0].endDate || 'Present'}`
    } else {
      blocks.push({ key: role.group || `${role.companyName}-${role.startDate}`, company: role.companyName, period: period(role), roles: [role] })
    }
  }
  return blocks
})

// Ventures still running or ended after the cut-off; older ones belong in the "Earlier" text.
const ventures = computed(() => (cv.value?.experiences ?? []).filter(x =>
  x.venture && (!x.endDate || year(x.endDate) >= cv.value!.print.detailedSince)))

const monthIndex = (s: string) => {
  const t = Date.parse(`1 ${s}`)
  return Number.isNaN(t) ? year(s) * 12 : new Date(t).getFullYear() * 12 + new Date(t).getMonth()
}
const alongsideEmployment = (v: Experience) => {
  const start = monthIndex(v.startDate)
  const end = v.endDate ? monthIndex(v.endDate) : Infinity
  return (cv.value?.experiences ?? []).some(x => !x.venture
    && monthIndex(x.startDate) <= end
    && (x.endDate ? monthIndex(x.endDate) : Infinity) >= start)
}

const achievements = computed<Achievement[]>(() => cv.value?.achievements.list ?? [])
const certifications = computed(() => achievements.value.filter(a => a.type === 'certifications' && a.print === true))
const coursework = computed(() => achievements.value.filter(a => a.type === 'certifications' && a.print === 'coursework'))
const courses = computed(() => achievements.value.filter(a => a.type === 'courses' && a.print !== false))
const education = computed(() => (cv.value?.educations ?? []).filter(x => x.print !== false))
const coreSkills = computed(() => (cv.value?.skills ?? [])
  .filter(s => s.core)
  .sort((a, b) => a.proficiencyLevel - b.proficiencyLevel || a.name.localeCompare(b.name)))

function print() {
  window.print()
}
</script>

<style>
@page {
  size: A4;
  margin: 18mm 20mm 20mm;
  @bottom-left {
    content: "Thomas Ringling";
    font: 400 7.6pt "Crimson Pro", Georgia, serif;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #6b6b6b;
    vertical-align: top;
    padding-top: 6mm;
  }
  @bottom-right {
    content: counter(page) " / " counter(pages);
    font: 400 7.6pt "Crimson Pro", Georgia, serif;
    letter-spacing: .1em;
    color: #6b6b6b;
    vertical-align: top;
    padding-top: 6mm;
  }
}

body.pcv-body { background: #e9e7e3; }

.pcv-toolbar {
  max-width: 210mm;
  margin: 24px auto 12px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Crimson Pro", Georgia, serif;
  font-size: 15px;
}
.pcv-toolbar a { color: #3f3f3f; background-image: none; }
.pcv-toolbar button {
  font: inherit;
  padding: 6px 14px;
  border: 1px solid #1c1c1c;
  background: #1c1c1c;
  color: #fff;
  cursor: pointer;
}

.pcv {
  --ink: #1c1c1c; --soft: #3f3f3f; --mute: #6b6b6b; --rule: #d0d0d0;
  box-sizing: border-box;
  max-width: 210mm;
  margin: 0 auto 48px;
  padding: 18mm 20mm 20mm;
  background: #fff;
  color: var(--ink);
  box-shadow: 0 2px 12px rgba(0, 0, 0, .12);
  font-family: "Crimson Pro", Georgia, serif;
  font-size: 10.5pt;
  line-height: 1.45;
}
.pcv *, .pcv *::before, .pcv *::after { box-sizing: border-box; }
.pcv a { background-image: none; }

.pcv-label, .pcv-tags, .pcv-pairs .k, .pcv-pairs .v { font-size: 7.6pt; letter-spacing: .1em; text-transform: uppercase; }
.pcv-label, .pcv-pairs .v, .pcv-tags { color: var(--mute); }
.pcv-pairs .k { color: var(--ink); font-weight: 600; margin-right: 2.5mm; }

.pcv-masthead { display: flex; justify-content: space-between; }
.pcv h1 { font-weight: 300; font-size: 40pt; line-height: 1.05; margin: 8mm 0 4mm; letter-spacing: normal; color: var(--ink); }
.pcv-lede { font-style: italic; font-size: 14pt; line-height: 1.4; color: var(--soft); max-width: 130mm; margin: 0; }
.pcv hr { border: 0; border-top: .5pt solid var(--rule); margin: 7mm 0; }

.pcv-intro { display: grid; grid-template-columns: 1.25fr 1fr; gap: 12mm; }
.pcv-profile p { margin: 0 0 2.5mm; color: var(--soft); }
.pcv-profile p:first-child::first-letter { float: left; font-size: 36pt; line-height: .82; padding: 1.4mm 2mm 0 0; color: var(--ink); }

.pcv-pairs { list-style: none; margin: 0 0 5mm; padding: 0; }
.pcv-pairs li { margin: 0 0 1.8mm; }
.pcv-flush { margin: 0; }
.pcv-colhead { margin-bottom: 2.5mm; }
.pcv h2 { font-weight: 300; font-size: 22pt; line-height: 1.2; margin: 0 0 5mm; break-after: avoid; color: var(--ink); }

.pcv-exp { display: grid; grid-template-columns: 32mm 1fr; gap: 7mm; padding: 0 0 5mm; }
.pcv-exp-meta { padding-top: 1.6mm; }
.pcv h3 { font-weight: 500; font-size: 14pt; line-height: 1.2; margin: 0; break-after: avoid; color: var(--ink); }
.pcv-org { font-style: italic; color: var(--soft); margin-bottom: 1.6mm; break-after: avoid; }
.pcv-exp p { margin: 0 0 1.6mm; color: var(--soft); orphans: 3; widows: 3; }
.pcv-tags { line-height: 1.8; }
.pcv-sub { margin: 3mm 0 0; break-inside: avoid; }
.pcv-sub-head { display: flex; justify-content: space-between; align-items: baseline; gap: 4mm; }
.pcv h4 { font-weight: 500; font-size: 11pt; margin: 0 0 .8mm; color: var(--ink); }

/* Later sections are separated by space, not rules, so no rule can end up alone at the top of a page. */
.pcv-gap { margin-top: 9mm; }
.pcv-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0 12mm; }
.pcv-grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 8mm; }
.pcv-keep { break-inside: avoid; }

@media screen and (max-width: 640px) {
  .pcv { padding: 24px 16px; }
  .pcv-intro, .pcv-grid2, .pcv-grid3, .pcv-exp { grid-template-columns: 1fr; gap: 4mm; }
}

@media print {
  html:has(body.pcv-body), body.pcv-body { background: #fff !important; }
  .pcv-toolbar { display: none; }
  .pcv { max-width: none; margin: 0; padding: 0; box-shadow: none; }
}
</style>
