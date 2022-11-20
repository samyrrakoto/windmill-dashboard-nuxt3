<template>
<div>
    <content-page-title :page-title="'Tables with avatars and actions'"></content-page-title>
    <element-star-project></element-star-project>
    <table-wrapper :table-data="tableData"></table-wrapper>
</div>
</template>

<script lang="ts">
import tableData from '@/assets/js/table-data'

export default defineComponent({
    data() {
    return {
      tableData: tableData,
    }
  },
});
</script>