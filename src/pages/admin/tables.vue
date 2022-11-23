<template>
  <div>
      <content-page-title :page-title="'Tables with avatars and actions'" />
      <content-star-project />
      <table-wrapper :table-data="tableData" />
  </div>
</template>

<script lang="ts">
import tableData from '@/utils/table-data'

export default defineComponent({
    data() {
    return {
      tableData: tableData,
    }
  },
});
</script>