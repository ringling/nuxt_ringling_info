<template>
  <div class="page-home">
    <Menu />

    <div class="hero-grid">
      <!-- LEFT — content -->
      <div class="hero-content reveal">
        <div>
          <div class="eyebrow">
            <span class="eyebrow-rule" />
            00 — Thomas Ringling
          </div>
          <h1 class="hero-h1">
            Creative technologist
            <span class="accent">&amp;</span>
            software enthusiast.
          </h1>
          <p class="hero-lede">
            Twenty-three years of shipping software. Currently coaching teams and writing code north of Copenhagen.
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
          <span class="colophon-site">ringling.info</span>
          <span>© 2026</span>
          <span>Hetzner / Docker</span>
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
    { name: 'description', content: 'Thomas Ringling — Creative technologist and software enthusiast, twenty-three years of shipping software, north of Copenhagen.' }
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

/* LEFT */
.hero-content {
  padding: 64px 64px 48px 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  background: #f8f8f8;
}

@media (max-width: 768px) {
  .hero-content { padding: 40px 24px 32px; }
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #111827;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}
.eyebrow-rule {
  display: inline-block;
  width: 24px;
  height: 1px;
  background: #111827;
}

.hero-h1 {
  font-size: clamp(40px, 5.2vw, 72px);
  font-weight: 800;
  letter-spacing: -0.035em;
  color: #111827;
  line-height: 0.95;
  margin: 0;
  max-width: 14ch;
  text-align: left;
}

.hero-lede {
  color: #4b5563;
  font-size: 16px;
  line-height: 1.6;
  max-width: 46ch;
  margin-top: 22px;
  margin-bottom: 0;
}

/* Indexed link list */
.link-list {
  margin-top: 36px;
  max-width: 480px;
}

.link-row {
  display: grid;
  grid-template-columns: 32px 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 14px 0;
  border-top: 1px solid #e5e7eb;
  color: #111827;
  text-decoration: none;
  background-image: none !important;
  font-size: 16px;
  font-weight: 500;
  transition: padding-left 220ms ease;
}
.link-row-last {
  border-bottom: 1px solid #e5e7eb;
}
.link-row:hover {
  padding-left: 8px;
  background-image: none !important;
}
.link-row:hover .link-arrow {
  transform: translateX(4px);
  color: #111827;
}

.link-num {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #9ca3af;
}

.link-arrow {
  font-family: var(--font-mono);
  font-size: 14px;
  color: #9ca3af;
  transition: transform 220ms ease, color 220ms ease;
}

.colophon {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #6b7280;
  display: flex;
  gap: 24px;
  margin-top: 32px;
}
.colophon-site { color: #111827; }

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
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fff;
  background: rgba(17, 24, 39, 0.7);
  padding: 6px 10px;
  backdrop-filter: blur(6px);
}
</style>
