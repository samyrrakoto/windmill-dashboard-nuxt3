<template>
    <p>
        <NuxtLink class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" :to="to">
            {{ text }}
        </NuxtLink>
    </p>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        text: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
    }
});
</script>

