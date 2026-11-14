<template>
  <div class="m-4 mb-16 text-gray-600 text-sm grid grid-cols-1 gap-4 lg:gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8 uppercase">
    <div v-for="skill in skills" :key="skill.name" class="skill">
      <div class="skill-text">
        {{ skill.name }}
      </div>
      <div class="w-full bg-gray-400 mb-2 flex-grow">
        <div 
          class="bg-gray-600 text-xs leading-none py-1 text-center text-black skill-text" 
          :style="{ width: skill.percentage + '%' }"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SkillOverview {
  name: string
  percentage: number
}

interface SkillsOverviewProps {
  skills: SkillOverview[]
}

const props = defineProps<SkillsOverviewProps>()
</script>