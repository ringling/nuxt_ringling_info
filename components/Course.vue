<template>
    <figure class="box">
        <figcaption class="flex items-center space-x-4">
            <div class="flex-auto">
                <h3 class="mb-1">{{ item.title }}</h3>
                <div>{{ item.description }}</div>
            </div>
        </figcaption>
    </figure>
</template>

<script setup lang="ts">
import type { CourseProps } from '~/types/cv'

const props = defineProps<CourseProps>()
</script>