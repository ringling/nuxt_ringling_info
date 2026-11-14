<template>
  <div class="achievement-card">
    <div class="ach-kicker">{{ item.description }}</div>
    <div class="ach-title">{{ item.title }}</div>
  </div>
</template>

<script setup lang="ts">
import type { CourseProps } from '~/types/cv'
const props = defineProps<CourseProps>()
</script>

<style scoped>
.achievement-card {
  border-left: 1px solid #e5e7eb;
  padding: 4px 0 4px 16px;
}
.ach-kicker {
  font-family: var(--font-label);
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 6px;
}
.ach-title {
  color: #111827;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
}
</style>
