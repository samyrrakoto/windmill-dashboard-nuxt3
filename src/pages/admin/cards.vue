<template>
  <div>
    <content-page-title :page-title="'Cards'" />
    <content-star-project />

    <!-- Big section cards -->
    <content-section-title :section-title="'Big section cards'" />
    <card-big-section :content="'Large, full width sections goes here'" />

    <!-- Responsive cards -->
    <content-section-title :section-title="'Responsive cards'" />
    <div :class="cardContainersClass" class="xl:grid-cols-4">
      <card-responsive-with-icon :cardType="'totalClients'" :title="'Total clients'" :content="'6389'" />
      <card-responsive-with-icon :cardType="'accountBalance'" :title="'Account balance'" :content="'$ 46,760.89'" />
      <card-responsive-with-icon :cardType="'newSales'" :title="'New sales'" :content="'376'" />
      <card-responsive-with-icon :cardType="'pendingContacts'" :title="'Pending contacts'" :content="'35'" />
    </div>

    <!-- Cards with title -->
    <content-section-title :section-title="'Cards with titles'" />
    <div :class="cardContainersClass">
      <card-with-title :title="'Regular card'" :content="$utils.stringUtils.lipsum()" />
      <card-with-title :title="'Colored card'" :content="$utils.stringUtils.lipsum()" :bgColor="'bg-purple-600'" :textColor="'text-white'" />
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      cardContainersClass: 'grid gap-6 mb-8 md:grid-cols-2'
    }
  },
});
</script>
