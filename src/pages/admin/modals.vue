<template>
  <div>
			<content-page-title :page-title="'Modals'"></content-page-title>
			<content-star-project></content-star-project>
      <element-button :button-text="'Open Modal'" :size="'regular'" @click="openModal"></element-button>
      <content-modal v-show="isModalOpen" v-on:opened-modal="openModal" v-on:closed-modal="closeModal" :header="'Modal Header'" :content="$utils.stringUtils.lipsum()" :cancel="'Cancel'" :ack="'Accept'"></content-modal>
  </div>
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