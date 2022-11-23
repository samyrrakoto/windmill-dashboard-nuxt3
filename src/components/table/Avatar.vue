<template>
    <div class="flex items-center text-sm">
        <!-- Avatar with inset shadow -->
        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
            <img
                class="object-cover w-full h-full rounded-full"
                :src="`/assets/img/avatar/${picture}`"
                :alt="`${fullName} - ${title}`"
                loading="lazy"
            />
            <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        </div>
        <div>
            <p class="font-semibold">{{ fullName }}</p>
            <p class="text-xs text-gray-600 dark:text-gray-400">{{ title }}</p>
        </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
  props: {
    picture: {
        type: String,
        default: "grandpa-harold.jpg",
    },
    fullName: {
        type: String,
        default: "Grandpa Harold"
    },
    title: {
        type: String,
        default: "Living Meme"
    }
  }
});
</script>