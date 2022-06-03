<template>
    <figure class="box">
        <figcaption class="flex items-center space-x-4">
            <div class="flex-auto">
                <h3>{{ item.title }}</h3>
                <div class="mt-0.5">{{ item.year }} - {{ item.company }}</div>
            </div>
        </figcaption>
    </figure>
</template>

<script setup>
const props = defineProps({
    item: {
        type: [Object],
    },
});
</script>