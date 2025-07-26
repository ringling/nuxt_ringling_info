<template>
  <figure class="box">
    <blockquote class="mt-6">
      <p>{{item.firstUsed}} - {{item.lastUsed}}</p>
    </blockquote>
    <figcaption class="flex items-center space-x-4">
      <div class="flex-auto">
        <h3 class="mb-1">{{item.name}}</h3>
        <div>Level {{5 - item.proficiencyLevel + 1}} of 5</div>
      </div>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import type { SkillProps } from '~/types/cv'

const props = defineProps<SkillProps>()
</script>