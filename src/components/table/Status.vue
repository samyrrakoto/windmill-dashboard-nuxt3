<template>
<span class="px-2 py-1 font-semibold leading-tight rounded-full" :class="valueClasses">
    {{ $utils.stringUtils.toUcFirst(value) }}
</span>
</template>
<script lang="ts">
import StatusValues from '@/types/StatusValues';

export default defineComponent({
    data() {
        return {
            valueClasses: {
                'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100': this.value === 'approved',
                'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600': this.value === 'pending',
                'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700': this.value === 'denied',
                'text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700': this.value === 'expired',
            }
        }
    },
    props: {
        value: {
            type: <StatusValues>String,
            reqiuired: true,
        }
    }
});
</script>
