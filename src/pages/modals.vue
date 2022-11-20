<template>
	<main class="h-full pb-16 overflow-y-auto">
		<div class="container grid px-6 mx-auto">
			<content-page-title :page-title="'Modals'"></content-page-title>
			<!-- CTA -->
			<element-star-project></element-star-project>
      <div>
        <element-button :button-text="'Open Modal'" :size="'regular'" @click="openModal"></element-button>
      </div>
		</div>
	</main>
  <element-modal
    v-show="isModalOpen"
    v-on:opened-modal="openModal"
    v-on:closed-modal="closeModal"
    :header="'Modal Header'"
    :content="$utils.stringUtils.lipsum()"
    :cancel="'Cancel'"
    :ack="'Accept'"
  >
  </element-modal>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      isModalOpen: false,
    }
  },
  methods: {
    openModal(){
      this.isModalOpen = true;
    },
    closeModal(){
      this.isModalOpen = false;
    },
  },
});
</script>