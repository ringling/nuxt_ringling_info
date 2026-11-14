<template>
  <div class="achievement-card">
    <div class="ach-kicker">{{ item.description }}</div>
    <div class="ach-title">{{ item.title }}</div>
    <a v-if="item.documentation && item.documentation.startsWith('/')" :href="item.documentation" target="_blank" class="ach-link">Certificate →</a>
  </div>
</template>

<script setup lang="ts">
import type { CertificationProps } from '~/types/cv'
const props = defineProps<CertificationProps>()
</script>

<style scoped>
.achievement-card {
  border-left: 1px solid #e5e7eb;
  padding: 4px 0 4px 16px;
}
.ach-kicker {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  color: #6b7280;
  margin-bottom: 6px;
}
.ach-title {
  color: #111827;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
}
.ach-link {
  display: inline-block;
  margin-top: 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: #6b7280;
  text-decoration: none;
  background-image: none !important;
  transition: color 220ms ease;
}
.ach-link:hover { color: #111827; background-image: none !important; }
</style>
