<template>
  <div>
    <content-page-title :page-title="'Cards'"></content-page-title>
    <element-star-project></element-star-project>

    <!-- Big section cards -->
    <content-section-title :section-title="'Big section cards'"></content-section-title>
    <element-card-big-section :content="'Large, full width sections goes here'"></element-card-big-section>

    <!-- Responsive cards -->
    <content-section-title :section-title="'Responsive cards'"></content-section-title>
    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <element-card-responsive-with-icon :cardType="'totalClients'" :title="'Total clients'" :content="'6389'"></element-card-responsive-with-icon>
      <element-card-responsive-with-icon :cardType="'accountBalance'" :title="'Account balance'" :content="'$ 46,760.89'"></element-card-responsive-with-icon>
      <element-card-responsive-with-icon :cardType="'newSales'" :title="'New sales'" :content="'376'"></element-card-responsive-with-icon>
      <element-card-responsive-with-icon :cardType="'pendingContacts'" :title="'Pending contacts'" :content="'35'"></element-card-responsive-with-icon>
    </div>

    <!-- Cards with title -->
    <content-section-title :section-title="'Cards with titles'"></content-section-title>
    <div class="grid gap-6 mb-8 md:grid-cols-2">
      <element-card-with-title
        :title="'Regular card'"
        :content="$utils.stringUtils.lipsum()"
      >
      </element-card-with-title>
      <element-card-with-title
        :title="'Colored card'"
        :content="$utils.stringUtils.lipsum()"
        :bgColor="'bg-purple-600'"
        :textColor="'text-white'"
      >
      </element-card-with-title>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({});
</script>
