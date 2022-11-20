<template>
  <thead>
    <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
      <th class="px-4 py-3" v-for="header in headers" :key="header">{{ header }}</th>
    </tr>
  </thead>
</template>
<script lang="ts">
export default defineComponent({
  props: {
    headers: {
        type: Array,
        required: true,
    }
  }
});
</script>