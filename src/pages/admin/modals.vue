<template>
  <div>
			<content-page-title :page-title="'Modals'" />
			<content-star-project />
      <div class="max-w-2xl px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="mb-4 text-gray-600 dark:text-gray-400">
          This is possibly <strong>the most accessible a modal can get</strong>, using JavaScript. When opened, it uses <code>focus-trap.js</code> to create a <em>focus trap</em>, which means that if you use your keyboard to navigate around, focus won't leak to the elements behind, staying inside the modal in a loop, until you take any action.
        </p>
        <p class="text-gray-600 dark:text-gray-400">
          Also, on small screens it is placed at the bottom of the screen, to account for larger devices and make it easier to click the larger buttons.
        </p>
      </div>
      <element-button :button-text="'Open Modal'" :size="'regular'" @click="openModal" />
      <content-modal v-show="isModalOpen" v-on:opened-modal="openModal" v-on:closed-modal="closeModal" :header="'Modal Header'" :content="$utils.stringUtils.lipsum()" :cancel="'Cancel'" :ack="'Accept'" />
  </div>
</template>

<script lang="ts">
import focusTrap from '@/utils/focus-trap';

export default defineComponent({
  data() {
    return {
      isModalOpen: false,
      trapCleanup: null,
    }
  },
  methods: {
    openModal(){
      this.isModalOpen = true;
      this.trapCleanup = focusTrap(this.$el.querySelector('#modal'));
    },
    closeModal(){
      this.isModalOpen = false;
      this.trapCleanup = null;
    },
  },
});
</script>