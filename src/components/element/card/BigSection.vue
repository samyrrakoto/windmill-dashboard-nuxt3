<template>
  <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <p class="text-sm text-gray-600 dark:text-gray-400">
      {{ content }}
    </p>
  </div>
</template>

<script lang="ts">
export default defineComponent({
    props: {
      content: String,
    }
})
</script>