<template>
  <div class="rl-menu">
    <div class="rl-menu-inner">
      <NuxtLink to="/" class="rl-brand">
        <span class="rl-brand-rule" />
        Thomas&nbsp;Ringling
      </NuxtLink>

      <nav class="rl-nav">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rl-nav-link"
          :class="{ active: route.path === link.to }"
        >
          <span class="rl-nav-num">{{ link.num }}</span>
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="rl-meta">
        <span class="rl-status-dot" />
        <span>Updated Apr 2026</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const links = [
  { to: '/now', num: '01', label: 'Now' },
  { to: '/cv',  num: '02', label: 'CV' },
  { to: '/team', num: '03', label: 'Team' },
]
</script>

<style scoped>
.rl-menu {
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  background: rgba(248, 248, 248, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
}

.rl-menu-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 18px 32px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
}

.rl-brand {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #111827;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  background-image: none !important;
  justify-self: start;
}
.rl-brand:hover { background-image: none !important; }

.rl-brand-rule {
  display: inline-block;
  width: 18px;
  height: 1px;
  background: #111827;
}

.rl-nav {
  display: flex;
  gap: 32px;
  justify-self: center;
}

.rl-nav-link {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6b7280;
  text-decoration: none;
  background-image: none !important;
  padding: 4px 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 220ms ease;
}
.rl-nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease;
}
.rl-nav-link.active,
.rl-nav-link.router-link-active {
  color: #111827;
}
.rl-nav-link.active::after,
.rl-nav-link.router-link-active::after {
  transform: scaleX(1);
}
.rl-nav-link:hover {
  color: #111827;
  background-image: none !important;
}
.rl-nav-link:hover::after { transform: scaleX(1); }

.rl-nav-num {
  color: #d1d5db;
  font-weight: 600;
  transition: color 220ms ease;
}
.rl-nav-link.active .rl-nav-num,
.rl-nav-link.router-link-active .rl-nav-num {
  color: #111827;
}
.rl-nav-link:hover .rl-nav-num { color: #9ca3af; }

.rl-meta {
  justify-self: end;
  font-family: var(--font-mono);
  font-size: 10px;
  color: #6b7280;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.rl-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.18);
  display: inline-block;
}
</style>
