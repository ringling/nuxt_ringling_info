<template>
    <figure class="box">
        <figcaption class="flex items-center space-x-4">
            <div class="flex-auto">
                <h3 class="mb-1">{{ item.language }}</h3>
                <div class="w-full bg-gray-400 mb-2 flex-grow">
                    <div class="bg-gray-600 text-xs leading-none py-1 text-center text-black skill-text" :style="{
                        width: item.proficiency
                    }">
                    </div>
                </div>
                <div>{{ item.fluency }}</div>
            </div>
        </figcaption>
    </figure>
</template>

<script setup lang="ts">
import type { LanguageProps } from '~/types/cv'

const props = defineProps<LanguageProps>()
</script>