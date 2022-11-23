<template>
        <svg :class="class" :fill="fill" :viewBox="viewBox">
            <path v-for="path in getSvgPaths" :key="path"
                :d="path"
                :clip-rule="getClipRule"
                :fill-rule="getFillRule"
            >
            </path>
        </svg>
</template>

<script lang="ts">
import svgDictionnary from '@/utils/svg-dictionnary'
export default defineComponent({
    computed: {
        getSvgPaths() {
            return svgDictionnary[this.pic].paths
        },
        getClipRule() {
            if (svgDictionnary[this.pic].clipRule !== null) {
                return svgDictionnary[this.pic].clipRule
            }
        },
        getFillRule() {
            if (svgDictionnary[this.pic].fillRule !== null) {
                return svgDictionnary[this.pic].fillRule
            }
        },
    },
    props: {
        class: {
            type: String,
            required: true,
        },
        fill: {
            type: String,
            required: true,
        },
        viewBox: {
            type: String,
            required: true,
        },
        pic: {
            type: String,
            required: true,
        },
    }
});
</script>