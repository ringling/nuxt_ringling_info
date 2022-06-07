<template>
    <figure class="box">
        <figcaption class="flex items-center space-x-4">
            <div class="flex-auto">
                <h3 class="mb-1">{{item.language}}</h3>
                <div>{{item.fluency}}</div>
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