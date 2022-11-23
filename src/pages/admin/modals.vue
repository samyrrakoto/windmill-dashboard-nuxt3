<template>
  <div>
			<content-page-title :page-title="'Modals'" />
			<content-star-project />
      <element-button :button-text="'Open Modal'" :size="'regular'" @click="openModal" />
      <content-modal v-show="isModalOpen" v-on:opened-modal="openModal" v-on:closed-modal="closeModal" :header="'Modal Header'" :content="$utils.stringUtils.lipsum()" :cancel="'Cancel'" :ack="'Accept'" />
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