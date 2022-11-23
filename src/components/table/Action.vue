<template>
    <button class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
        <element-svg :class="'w-5 h-5'" :view-box="'0 0 20 20'" :fill="'currentColor'" :pic="actionSvgPath[actionType]" />
    </button>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            actionSvgPath: {
                edit:'edit',
                delete:'trash',
            }
        }
    },
    props: {
        actionType: {
            type: String,
            required: true,
        }
    }
});
</script>