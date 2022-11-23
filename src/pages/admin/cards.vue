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
      <card-responsive-with-icon
        :svg-pic="'people'"
        :svg-class="'p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500'"
        :title="'Total clients'"
        :content="'6389'" />
      <card-responsive-with-icon
        :svg-pic="'money'"
        :svg-class="'p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500'"
        :title="'Account balance'"
        :content="'$ 46,760.89'" />
      <card-responsive-with-icon
        :svg-pic="'cart'"
        :svg-class="'p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500'"
        :title="'New sales'"
        :content="'376'" />
      <card-responsive-with-icon
        :svg-pic="'message'"
        :svg-class="'p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500'"
        :title="'Pending contacts'"
        :content="'35'" />
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
