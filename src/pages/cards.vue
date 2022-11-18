<template>
  <main class="h-full pb-16 overflow-y-auto">
    <div class="container px-6 mx-auto grid">
      <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Cards
      </h2>
      <!-- CTA -->
      <element-star-project></element-star-project>

      <!-- Big section cards -->
      <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Big section cards
      </h4>
      <element-card-big-section :content="'Large, full width sections goes here'"></element-card-big-section>

      <!-- Responsive cards -->
      <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Responsive cards
      </h4>
      <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <element-card-responsive-with-icon :cardType="'totalClients'" :title="'Total clients'" :content="'6389'"></element-card-responsive-with-icon>
        <element-card-responsive-with-icon :cardType="'accountBalance'" :title="'Account balance'" :content="'$ 46,760.89'"></element-card-responsive-with-icon>
        <element-card-responsive-with-icon :cardType="'newSales'" :title="'New sales'" :content="'376'"></element-card-responsive-with-icon>
        <element-card-responsive-with-icon :cardType="'pendingContacts'" :title="'Pending contacts'" :content="'35'"></element-card-responsive-with-icon>
      </div>

      <!-- Cards with title -->
      <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Cards with title
      </h4>
      <div class="grid gap-6 mb-8 md:grid-cols-2">
        <element-card-with-title
          :title="'Regular card'"
          :content="lipsum"
        >
        </element-card-with-title>
        <element-card-with-title
          :title="'Colored card'"
          :content="lipsum"
          :bgColor="'bg-purple-600'"
          :textColor="'text-white'"
        >
        </element-card-with-title>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      lipsum: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione",
    }
  },
});

</script>
