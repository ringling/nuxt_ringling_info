<template>
  <div class="rl-menu">
    <div class="rl-menu-inner">
      <NuxtLink to="/" class="rl-brand">
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
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="rl-meta">
        <span>Updated Nov 2026</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const links = [
  { to: '/now', label: 'Now' },
  { to: '/cv', label: 'CV' },
  { to: '/team', label: 'Team' },
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
  font-family: var(--font-label);
  font-size: 18px;
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

.rl-nav {
  display: flex;
  gap: 32px;
  justify-self: center;
}

.rl-nav-link {
  font-family: var(--font-label);
  font-size: 16px;
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

.rl-meta {
  justify-self: end;
  font-family: var(--font-label);
  font-size: 14px;
  font-style: italic;
  color: #6b7280;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

@media (max-width: 640px) {
  .rl-menu-inner {
    grid-template-columns: auto auto;
    justify-content: space-between;
    padding: 14px 16px;
  }
  .rl-brand { font-size: 16px; }
  .rl-nav { gap: 18px; }
  .rl-meta { display: none; }
}
</style>
