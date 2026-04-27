<template>
  <div>
    <Menu />
    <div class="page-inner">

      <div class="team-header">
        <div class="team-eyebrow">
          <span class="eyebrow-rule" />
          03 — Disciplines
        </div>
        <h1 class="team-h1">
          Meet <span class="accent">the</span> team.
        </h1>
        <p class="team-lede">
          A small, deeply versatile team of one. Each discipline is a hat I've worn for years — sometimes simultaneously.
        </p>
      </div>

      <div class="roster">
        <div v-for="(member, idx) in team" :key="member.role" class="roster-row reveal">
          <div class="row-idx">
            {{ String(idx + 1).padStart(2, '0') }}
            <span class="row-idx-total">/ {{ String(team.length).padStart(2, '0') }}</span>
          </div>
          <img :src="member.img" :alt="member.role" class="row-img" />
          <div class="row-content">
            <div class="row-discipline">Discipline</div>
            <h3 class="row-title">
              {{ member.role }} <span class="accent">{{ member.accent }}</span>
            </h3>
            <p class="row-body">{{ member.body }}</p>
          </div>
        </div>
        <div class="roster-end-rule" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Thomas Ringling — Team',
  link: [{ rel: 'canonical', href: 'https://www.ringling.info/team' }],
  meta: [{ name: 'description', content: 'Meet the team — one developer, many disciplines.' }]
})

const team = [
  {
    img: '/img/agile_coach.jpg',
    role: 'Software',
    accent: 'coach',
    body: 'Passionate and certified agile coach with over a decade of experience implementing agile frameworks. Skilled in coaching teams toward iterative success, fostering collaboration, and creating agile cultures within organizations.',
  },
  {
    img: '/img/frontend.jpg',
    role: 'Frontend',
    accent: 'developer',
    body: 'Skilled frontend developer with extensive experience in UI design, web technologies, and JavaScript frameworks. Known for high adaptability and expertise in agile environments, with a strong commitment to continuous learning and modern frontend practices.',
  },
  {
    img: '/img/backend.jpg',
    role: 'Backend',
    accent: 'developer',
    body: 'Experienced backend developer with a robust foundation in database management, API development, and backend frameworks. Demonstrates strong skills in data architecture, server-side logic, and maintaining high-performance applications.',
  },
  {
    img: '/img/dataengineer.jpg',
    role: 'Data',
    accent: 'engineer',
    body: 'Data engineer with strong programming and data manipulation skills, specializing in transforming and analyzing data for business insights. Expertise in data pipelines, data architecture, and machine learning integration.',
  },
]
</script>

<style scoped>
.page-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

/* Header */
.team-header { margin-top: 80px; }

.team-eyebrow {
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

.team-h1 {
  font-size: clamp(48px, 6vw, 72px);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #111827;
  line-height: 0.95;
  margin: 0 0 8px 0;
  text-align: left;
}

.team-lede {
  font-size: 17px;
  color: #374151;
  line-height: 1.6;
  max-width: 56ch;
  margin-top: 18px;
  margin-bottom: 0;
}

/* Roster */
.roster {
  margin-top: 64px;
  margin-bottom: 64px;
}

.roster-row {
  display: grid;
  grid-template-columns: 80px 200px 1fr;
  gap: 32px;
  align-items: start;
  padding: 32px 0;
  border-top: 1px solid #e5e7eb;
}

@media (max-width: 768px) {
  .roster-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.row-idx {
  font-family: var(--font-mono);
  font-size: 11px;
  color: #9ca3af;
}
.row-idx-total { color: #e5e7eb; }

.row-img {
  width: 200px;
  border-radius: 6px;
  display: block;
}

@media (max-width: 768px) {
  .row-img { width: 100%; max-width: 200px; }
}

.row-discipline {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
  margin-bottom: 8px;
}

.row-title {
  margin: 0 0 12px 0;
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #111827;
  line-height: 1;
  text-align: left;
}

.row-body {
  color: #374151;
  font-size: 15px;
  line-height: 1.6;
  max-width: 60ch;
  margin: 0;
}

.roster-end-rule {
  border-top: 1px solid #e5e7eb;
}
</style>
