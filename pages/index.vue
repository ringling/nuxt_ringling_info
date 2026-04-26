<template>
  <div class="page">
    <section class="hero">
      <img class="hero-img" src="/img/hero-mist.png" alt="" />

      <nav class="nav">
        <NuxtLink class="brand" to="/" aria-label="Thomas Ringling — Home">
          <img class="brand-logo" src="/img/logo-mark.png" alt="" />
        </NuxtLink>
        <div class="nav-links">
          <NuxtLink class="active" to="/">Home</NuxtLink>
          <NuxtLink to="/now">Now</NuxtLink>
          <NuxtLink to="/cv">CV</NuxtLink>
          <NuxtLink to="/team">Team</NuxtLink>
        </div>
        <div class="lang">
          <span>EN</span><span class="dot"></span><span>DA</span><span class="dot"></span>
          <span class="jp-text">日本語</span>
        </div>
      </nav>

      <div class="title-block">
        <div class="kanji-col" aria-hidden="true">
          <span>ト</span>
          <span>ー</span>
          <span>マ</span>
          <span>ス</span>
        </div>
        <h1 class="name">Thomas<br />Ringling</h1>
        <div class="role">
          <span class="bar"></span>
          <span>Developer&nbsp;·&nbsp;Nærum</span>
        </div>
      </div>

      <div class="meta">
        <div class="col">
          <span class="label">Currently</span>
          <span class="value">Building quiet software · Spring '26</span>
        </div>
        <div class="col" style="align-items:center">
          <span class="label">Featured</span>
          <div class="dot-row" style="margin-top:8px">
            <span class="d active"></span><span class="d"></span><span class="d"></span><span class="d"></span><span class="d"></span>
          </div>
        </div>
        <div class="col" style="align-items:flex-end">
          <span class="label">Studio</span>
          <span class="value mono">Nærum · 55.81°N</span>
        </div>
      </div>

      <div class="scroll-hint">Scroll ↓ Index</div>
    </section>

    <footer class="footline">
      <span>© Thomas Ringling&nbsp;·&nbsp;MMXXVI</span>
      <span class="mid">静かに、丁寧に。</span>
      <span>Nærum Hovedgade, 2850 Nærum</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Thomas Ringling — Developer, Nærum',
  meta: [
    { name: 'description', content: 'Thomas Ringling — independent developer working out of Nærum, north of Copenhagen.' }
  ],
  link: [{ rel: 'canonical', href: 'https://www.ringling.info' }]
})
</script>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero {
  position: relative;
  height: 100vh;
  min-height: 720px;
  width: 100%;
  overflow: hidden;
  background: var(--paper);
}
.hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  filter: contrast(1) saturate(.95) brightness(1.02);
  display: block;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background:
    linear-gradient(115deg, rgba(239,231,218,.25) 0%, rgba(239,231,218,.08) 28%, transparent 55%),
    linear-gradient(180deg, rgba(239,231,218,.05) 0%, transparent 35%, transparent 70%, rgba(239,231,218,.35) 100%);
}
.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(40,30,20,.04) 0 1px, transparent 2px),
    radial-gradient(circle at 70% 60%, rgba(40,30,20,.04) 0 1px, transparent 2px),
    radial-gradient(circle at 45% 80%, rgba(40,30,20,.03) 0 1px, transparent 2px);
  background-size: 7px 7px, 11px 11px, 13px 13px;
  mix-blend-mode: multiply;
  opacity: .7;
}

.nav {
  position: absolute;
  inset: 0 0 auto 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 8%;
  color: var(--ink-2);
}
.nav .brand {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
}
.brand-logo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  box-shadow: 0 1px 2px rgba(40,30,20,.08), 0 8px 22px rgba(40,30,20,.06);
  flex: 0 0 56px;
  background: transparent;
}
.nav-links {
  display: flex;
  gap: 38px;
  font-size: 11.5px;
  letter-spacing: .28em;
  text-transform: uppercase;
  color: var(--ink-2);
}
.nav-links a {
  color: inherit;
  text-decoration: none;
  position: relative;
  opacity: .75;
  transition: opacity .2s;
}
.nav-links a:hover { opacity: 1; }
.nav-links a.active { opacity: 1; }
.nav-links a.active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -7px;
  height: 1px;
  background: var(--ochre);
}
.lang {
  font-family: 'Noto Serif JP', serif;
  font-size: 12.5px;
  color: var(--blue);
  letter-spacing: .1em;
  display: flex;
  gap: 10px;
  align-items: center;
}
.lang .dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--teal);
  display: inline-block;
}
.jp-text { font-family: 'Noto Serif JP', serif; }

.title-block {
  position: absolute;
  z-index: 4;
  left: 8%;
  top: 20%;
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 520px;
}
.kanji-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  font-family: 'Noto Serif JP', serif;
  font-weight: 400;
  font-size: 52px;
  line-height: 1.05;
  color: #2a2722;
  letter-spacing: 0;
}
.kanji-col span {
  display: block;
  text-shadow: 0 0 1px rgba(40,30,20,.15);
  filter: blur(.15px);
}
.name {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-size: 30px;
  letter-spacing: .22em;
  line-height: 1.1;
  text-transform: uppercase;
  background: linear-gradient(100deg,
    var(--ink-2) 0%,
    var(--ink-2) 55%,
    var(--blue) 78%,
    rgba(95,110,122,.45) 94%,
    rgba(95,110,122,.1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
}
.role {
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: .52em;
  text-transform: uppercase;
  color: var(--blue);
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: -6px;
}
.role .bar {
  flex: 0 0 44px;
  height: 1px;
  background: var(--blue);
  opacity: .7;
  display: inline-block;
}

.meta {
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: 48px;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  color: var(--ink-2);
  font-family: 'Work Sans', sans-serif;
}
.meta .col { display: flex; flex-direction: column; gap: 5px; }
.meta .label {
  font-size: 10px;
  letter-spacing: .36em;
  text-transform: uppercase;
  color: var(--blue);
}
.meta .value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  letter-spacing: .04em;
  color: var(--ink-2);
}
.meta .mono {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  letter-spacing: .04em;
}
.dot-row { display: flex; gap: 7px; align-items: center; }
.dot-row .d {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--teal);
  opacity: .55;
}
.dot-row .d.active {
  background: var(--ochre);
  opacity: 1;
  width: 26px;
  border-radius: 4px;
}

.scroll-hint {
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  transform-origin: center;
  font-size: 10px;
  letter-spacing: .44em;
  color: var(--blue);
  opacity: .6;
  text-transform: uppercase;
  z-index: 4;
}

.footline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 8% 32px 8%;
  font-size: 10.5px;
  letter-spacing: .28em;
  text-transform: uppercase;
  color: var(--blue);
  background: var(--paper);
}
.footline .mid {
  font-family: 'Noto Serif JP', serif;
  text-transform: none;
  letter-spacing: .12em;
  color: var(--ink-2);
  opacity: .7;
}

@media (max-width: 960px) {
  .nav { padding: 20px 24px; flex-wrap: wrap; gap: 14px; }
  .nav-links { order: 3; width: 100%; justify-content: flex-start; gap: 18px; }
  .title-block { left: 24px; top: 160px; max-width: 80%; }
  .kanji-col { font-size: 42px; }
  .name { font-size: 24px; letter-spacing: .18em; }
  .meta { left: 24px; right: 24px; bottom: 28px; flex-direction: column; align-items: flex-start; gap: 14px; }
  .scroll-hint { display: none; }
  .footline { padding: 16px 24px 24px 24px; flex-direction: column; gap: 8px; align-items: flex-start; }
}
</style>
