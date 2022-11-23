<template>
  <main class="h-full pb-16 overflow-y-auto">
    <div class="container flex flex-col items-center px-6 mx-auto">
      <element-svg :class="'w-12 h-12 mt-8 text-purple-200'" :view-box="'0 0 20 20'" :fill="'currentColor'" :pic="'forbidden'" />
      <content-module-title :module-title="'404'" />
      <p class="text-gray-700 dark:text-gray-300">
        Page not found. Check the address or <NuxtLink class="text-purple-600 hover:underline dark:text-purple-300" to="/admin/dashboard">go back</NuxtLink>.
      </p>
    </div>
  </main>
</template>

<script lang="ts">
export default defineComponent({});
</script>