<template>
  <div>
    <Menu />
    <main class="pp">
      <header>
        <div class="pp-masthead">
          <span class="pp-label">Team</span>
          <span class="pp-label">{{ team.length }} disciplines · 1 person</span>
        </div>
        <h1>Meet the team.</h1>
        <p class="pp-lede">
          A small, deeply versatile team of one. Each discipline is a hat I've worn for years, sometimes several at once.
        </p>
      </header>

      <hr>

      <article v-for="(member, idx) in team" :key="member.role" class="team-row">
        <div class="team-meta">
          <div class="pp-label">{{ String(idx + 1).padStart(2, '0') }} / {{ String(team.length).padStart(2, '0') }}</div>
          <div class="pp-label">Discipline</div>
        </div>
        <figure class="team-figure">
          <img :src="member.img" :alt="member.role">
          <span v-if="member.layedOff" class="team-stamp">Laid off</span>
        </figure>
        <div>
          <h2 class="team-title">{{ member.role }} <em>{{ member.accent }}</em></h2>
          <p class="team-body">{{ member.body }}</p>
        </div>
      </article>

      <footer class="pp-footer">
        <span class="pp-label">ringling.info · © 2026</span>
        <span class="pp-label">Built with Nuxt 3 · Hetzner / Docker</span>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Thomas Ringling — Team',
  link: [{ rel: 'canonical', href: 'https://www.ringling.info/team' }],
  meta: [{ name: 'description', content: 'Meet the team : one developer, many disciplines.' }]
})

const team = [
  {
    img: '/img/ai.jpeg',
    role: 'Feature Development',
    accent: 'Engineer',
    body: 'AI-powered feature development engineer. Writes code, reviews architecture, and ships features — faster than you\'d expect, without the stand-up small talk, and unburdened by the 50 bps conscious bottleneck. Your move.',
    layedOff: false,
  },
  {
    img: '/img/agile_coach.jpg',
    role: 'Software',
    accent: 'coach',
    body: 'Certified agile coach, over a decade in. Helped teams figure out what actually slows them down — usually not what they think. The framework is the easy part.',
    layedOff: true,
  },
  {
    img: '/img/frontend.jpg',
    role: 'Frontend',
    accent: 'developer',
    body: 'Frontend developer who\'s worked across enough stacks to have opinions. UI design, JavaScript frameworks, web technologies. Prefers things that work over things that look impressive in a demo.',
    layedOff: true,
  },
  {
    img: '/img/backend.jpg',
    role: 'Backend',
    accent: 'developer',
    body: 'Backend developer. Databases, APIs, server-side logic — the parts nobody notices until they break. Has kept a few things running that probably shouldn\'t have survived.',
    layedOff: true,
  },
  {
    img: '/img/dataengineer.jpg',
    role: 'Data',
    accent: 'engineer',
    body: 'Data engineer. Mostly pipelines — getting data from where it lives to where it\'s useful. Some machine learning when it makes sense.',
    layedOff: true,
  },
]
</script>

<style scoped>
.team-row {
  display: grid;
  grid-template-columns: 180px 240px minmax(0, 1fr);
  gap: 48px;
  align-items: start;
  padding: 40px 0;
  border-bottom: 1px solid var(--rule);
}
.team-row:first-of-type { padding-top: 0; }
.team-meta { display: grid; gap: 4px; padding-top: 6px; }

.team-figure { position: relative; margin: 0; }
.team-figure img { display: block; width: 100%; aspect-ratio: 4 / 5; object-fit: cover; }
.team-stamp {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 3px 10px;
  background: rgba(255, 255, 255, .92);
  border: 1px solid #a3271b;
  color: #a3271b;
  font-size: 13px;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.pp .team-title { font-size: 46px; font-weight: 300; line-height: 1.1; margin: 0 0 16px; }
.team-title em { color: var(--mute); }
.team-body { max-width: 34em; margin: 0; }

@media screen and (max-width: 900px) {
  .team-row { grid-template-columns: 200px minmax(0, 1fr); gap: 32px; }
  .team-meta { grid-column: 1 / -1; display: flex; gap: 16px; }
}
@media screen and (max-width: 600px) {
  .team-row { grid-template-columns: 1fr; gap: 16px; }
  .team-figure { max-width: 260px; }
  .pp .team-title { font-size: 36px; }
}
</style>
