<template>
  <Title>Create account - {{ $utils.globals.projectName }}</Title>
  <auth-create-account />
</template>

<script lang="ts">
export default defineComponent({});

definePageMeta({
  layout: 'non-auth-layout',
});
</script>