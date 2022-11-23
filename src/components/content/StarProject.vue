<template>
    <!-- CTA -->
    <a class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
        :href="githubLink">
        <div class="flex items-center">
            <element-svg :class="'w-5 h-5 mr-2'" :view-box="'0 0 20 20'" :fill="'currentColor'" :pic="'star'"/>
            <span>Star this project on GitHub</span>
        </div>
        <span>View more &RightArrow;</span>
    </a>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            githubLink: "https://github.com/estevanmaito/windmill-dashboard"
        }
    },
})
</script>