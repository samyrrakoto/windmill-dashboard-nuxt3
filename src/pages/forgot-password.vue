<template>
  <Title>Recover password - {{ $utils.globals.projectName }}</Title>
  <auth-forgot-password />
</template>

<script lang="ts">
export default defineComponent({});
definePageMeta({
  layout: 'non-auth-layout',
});
</script>