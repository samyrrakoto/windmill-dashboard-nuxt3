<template>
  <div>
    <Title>Buttons - {{ $utils.globals.projectName }}</Title>
    <content-page-title :page-title="'Buttons'" />
    <content-star-project />

    <!-- Button sizes -->
    <content-section-title :section-title="'Sizes'" />
    <div class="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
      <element-button :button-text="'Block level'" :size="'larger'" :is-block-level="true" />
      <div><element-button :button-text="'Larger'" :size="'larger'" /></div>
      <div><element-button :button-text="'Large'" :size="'large'" /></div>
      <div><element-button :button-text="'Regular'" :size="'regular'" /></div>
      <div><element-button :button-text="'Small'" :size="'small'" /></div>
      <div><element-button :button-text="'Disabled Regular'" :size="'regular'" :is-disabled="true" /></div>
    </div>

    <!-- Buttons with icons -->
    <content-section-title :section-title="'Icons'" />
    <div class="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div><element-button :button-text="'Icon right'" :size="'regular'" :has-icon-right="true" :icon-type="'heart'" :is-svg-even-odd="true" /></div>
        <div><element-button :button-text="'Icon left'" :size="'regular'" :has-icon-left="true" :icon-type="'heart'" :is-svg-even-odd="true" /></div>
        <div><element-button :size="'icon-only'" :icon-only="true" :icon-type="'heart'" :is-svg-even-odd="true" /></div>
        <div><element-button :size="'icon-only'" :icon-only="true" :icon-type="'pencil'" :is-rounded="true" /></div>
        <div><element-button :size="'icon-only'" :icon-only="true" :icon-type="'card'" :is-rounded="true" :is-disabled="true" /></div>
    </div>
  </div>
</template>

<script lang="ts">
  export default defineComponent({});
</script>