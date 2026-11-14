<template>
  <div class="achievement-card">
    <div class="ach-kicker">{{ item.description }}</div>
    <div class="ach-title">{{ item.title }}</div>
    <div v-if="item.documentation" class="ach-note">{{ item.documentation }}</div>
  </div>
</template>

<script setup lang="ts">
import type { ConferenceProps } from '~/types/cv'
const props = defineProps<ConferenceProps>()
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
.ach-note {
  margin-top: 4px;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
}
</style>
