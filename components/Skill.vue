<template>
  <div class="skill-card">
    <div class="skill-name">{{ item.name }}</div>
    <div class="skill-dates">{{ item.firstUsed }} – {{ item.lastUsed }}</div>
    <div class="skill-dots">
      <span v-for="n in 5" :key="n" class="dot" :class="{ filled: n <= (6 - item.proficiencyLevel) }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkillProps } from '~/types/cv'
const props = defineProps<SkillProps>()
</script>

<style scoped>
.skill-card {
  border-left: 1px solid #e5e7eb;
  padding: 6px 0 6px 12px;
}
.skill-name {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #111827;
  line-height: 1.3;
  margin-bottom: 4px;
}
.skill-dates {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #9ca3af;
  margin-bottom: 6px;
}
.skill-dots {
  display: flex;
  gap: 3px;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #e5e7eb;
}
.dot.filled {
  background: #4b5563;
}
</style>
