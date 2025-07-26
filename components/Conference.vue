<template>
    <figure class="box">
        <figcaption class="flex items-center space-x-4">
            <div class="flex-auto">
                <h3>{{ item.title }}</h3>
                <div class="mt-0.5">{{ item.description }}</div>
            </div>
        </figcaption>
    </figure>
</template>

<script setup lang="ts">
import type { ConferenceProps } from '~/types/cv'

const props = defineProps<ConferenceProps>()
</script>