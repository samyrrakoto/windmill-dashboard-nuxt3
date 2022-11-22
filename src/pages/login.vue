<template>
  <auth-login></auth-login>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      title: 'Login',
    }
  },
});
definePageMeta({
  layout: 'non-auth-layout',
});
</script>

