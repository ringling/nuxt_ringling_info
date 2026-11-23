<template>
  <div class="page-home">
    <Menu />

    <div class="hero-grid">
      <!-- LEFT — content -->
      <div class="hero-content reveal">
        <div>
          <div class="eyebrow">Thomas Ringling · Nærum, Denmark</div>
          <h1 class="hero-h1">
            Creative technologist
            <em>&amp;</em>
            software enthusiast.
          </h1>
          <p class="hero-lede">
            Twenty-five years of shipping software. Currently working as a data engineer north of Copenhagen.
          </p>

          <div class="link-list reveal d2">
            <NuxtLink to="/cv" class="link-row">
              <span class="link-num">01</span>
              <span>A little about who I am</span>
              <span class="link-arrow">→</span>
            </NuxtLink>
            <NuxtLink to="/now" class="link-row">
              <span class="link-num">02</span>
              <span>What I am doing right now</span>
              <span class="link-arrow">→</span>
            </NuxtLink>
            <NuxtLink to="/cv" class="link-row link-row-last">
              <span class="link-num">03</span>
              <span>And what I have been doing</span>
              <span class="link-arrow">→</span>
            </NuxtLink>
          </div>
        </div>

        <div class="colophon">
          <span>ringling.info · © 2026</span>
          <span>Built with Nuxt 3 · Hetzner / Docker</span>
        </div>
      </div>

      <!-- RIGHT — paper-art panel -->
      <div class="hero-image">
        <div class="cloud-overlay" aria-hidden="true" />
        <div class="image-caption">Midjourney — paper art, Copenhagen</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Thomas Ringling — Developer, Nærum',
  meta: [
    { name: 'description', content: 'Thomas Ringling — Creative technologist and software enthusiast, twenty-five years of shipping software, north of Copenhagen.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ringling.info' }
  ],
})
</script>

<style scoped>
.page-home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  min-height: calc(100vh - 57px);
}

@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
    min-height: auto;
  }
}

/* LEFT: same typography as the print CV and the /cv, /now and /team pages */
.hero-content {
  --ink: #1c1c1c; --soft: #3f3f3f; --mute: #6b6b6b; --rule: #d0d0d0;
  padding: 72px 64px 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  background: #f8f8f8;
  color: var(--ink);
  font-family: "Crimson Pro", Georgia, serif;
  font-size: 20px;
  line-height: 1.55;
}

@media (max-width: 768px) {
  .hero-content { padding: 40px 16px 32px; font-size: 18px; }
}

.eyebrow, .link-num, .colophon {
  font-size: 13px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--mute);
}
.eyebrow { margin-bottom: 28px; }

.hero-h1 {
  font-family: inherit;
  font-size: clamp(48px, 5.6vw, 80px);
  font-weight: 300;
  letter-spacing: normal;
  color: var(--ink);
  line-height: 1.05;
  margin: 0;
  max-width: 13ch;
  text-align: left;
}
.hero-h1 em { color: var(--mute); }

.hero-lede {
  font-style: italic;
  color: var(--soft);
  font-size: 24px;
  line-height: 1.4;
  max-width: 28em;
  margin: 24px 0 0;
}

/* Indexed link list */
.link-list {
  margin-top: 48px;
  max-width: 520px;
}

.link-row {
  display: grid;
  grid-template-columns: 40px 1fr auto;
  gap: 16px;
  align-items: baseline;
  padding: 14px 0;
  border-top: 1px solid var(--rule);
  color: var(--ink);
  text-decoration: none;
  background-image: none !important;
  font-size: 22px;
  transition: padding-left 220ms ease;
}
.link-row-last { border-bottom: 1px solid var(--rule); }
.link-row:hover {
  padding-left: 8px;
  background-image: none !important;
}
.link-row:hover .link-arrow {
  transform: translateX(4px);
  color: var(--ink);
}

.link-arrow {
  font-size: 20px;
  color: var(--mute);
  transition: transform 220ms ease, color 220ms ease;
}

.colophon {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 32px;
  margin-top: 40px;
  padding-top: 16px;
  border-top: 1px solid var(--rule);
}

/* RIGHT */
.hero-image {
  position: relative;
  background-image: url('/img/man.jpg');
  background-size: cover;
  background-position: center;
  min-height: 400px;
}

@media (max-width: 768px) {
  .hero-image { min-height: 300px; }
}

.cloud-overlay {
  position: absolute;
  inset: 0;
  background-image: url('/img/cloud.png');
  background-repeat: repeat-x;
  mix-blend-mode: screen;
  opacity: 0.6;
  animation: ringlingCloud 60s linear infinite;
}

.image-caption {
  position: absolute;
  bottom: 24px;
  left: 24px;
  font-family: "Crimson Pro", Georgia, serif;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;
  background: rgba(17, 24, 39, 0.7);
  padding: 6px 10px;
  backdrop-filter: blur(6px);
}
</style>
