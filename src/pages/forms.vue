<template>
  <main class="h-full pb-16 overflow-y-auto">
    <div class="container px-6 mx-auto grid">
      <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Forms
      </h2>
      <!-- CTA -->
      <element-star-project></element-star-project>
      <!-- General elements -->
      <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Elements
      </h4>

      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <element-form-text-input :is-first-element="true" :input-label="'Name'" :place-holder="'Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas'"></element-form-text-input>
        <element-form-radio-button :radio-label="'Account Type'" :radio-inputs="radioInputs"></element-form-radio-button>
        <element-form-select-options :select-label="'Requested Limit'" :select-options="selectOptions"></element-form-select-options>
        <element-form-select-options :is-multiple="true" :select-label="'Multiple requested limits'" :select-options="selectOptions"></element-form-select-options>
        <element-form-text-input :isTextArea="true" :input-label="'Message'" :place-holder="'Your long text here'"></element-form-text-input>
        <element-form-check-box :checkbox-text="checkBoxText"></element-form-check-box>
      </div>

      <!-- Validation inputs -->
      <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Validation
      </h4>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <element-form-text-input
          :is-invalid="true"
          :input-label="'Invalid input'"
          :place-holder="'Your password'"
          :input-helper-text="'Your password is too short'"></element-form-text-input>
        <element-form-text-input
          :is-valid="true"
          :input-label="'Valid Input'"
          :place-holder="'Your password'"
          :input-helper-text="'Your password is strong'"></element-form-text-input>
        <element-form-text-input
          :has-hint="true"
          :input-label="'Helper text'"
          :place-holder="'Your name'"
          :input-helper-text="'Your password must be at least 6 characters long'"></element-form-text-input>
      </div>

      <!-- Inputs with icons -->
      <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Icons
      </h4>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <label class="block text-sm">
          <span class="text-gray-700 dark:text-gray-400">Icon left</span>
          <!-- focus-within sets the color for the icon when input is focused -->
          <div class="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
            <input
              class="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe" />
            <div class="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                </path>
              </svg>
            </div>
          </div>
        </label>

        <label class="block mt-4 text-sm">
          <span class="text-gray-700 dark:text-gray-400">Icon right</span>
          <!-- focus-within sets the color for the icon when input is focused -->
          <div class="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
            <input
              class="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe" />
            <div class="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                </path>
              </svg>
            </div>
          </div>
        </label>
      </div>

      <!-- Inputs with buttons -->
      <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Buttons
      </h4>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <label class="block text-sm">
          <span class="text-gray-700 dark:text-gray-400">
            Button left
          </span>
          <div class="relative">
            <input
              class="block w-full pl-20 mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe" />
            <button
              class="absolute inset-y-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-l-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
              Click
            </button>
          </div>
        </label>

        <label class="block mt-4 text-sm">
          <span class="text-gray-700 dark:text-gray-400">
            Button right
          </span>
          <div class="relative text-gray-500 focus-within:text-purple-600">
            <input
              class="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe" />
            <button
              class="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Click
            </button>
          7</div>
        </label>
      </div>
    </div>
  </main>
</template>

<script lang="ts">

export default defineComponent({
  data() {
    return {
      radioInputs: [
        {
          value: 'personal',
          label: 'Personal',
        },
        {
          value: 'business',
          label: 'Business',

        }
      ],
      selectOptions: [
        {
            value: '1000',
            label: '$1,000',
        },
        {
            value: '2000',
            label: '$2,000',
        },
        {
            value: '3000',
            label: '$3,000',
        },
        {
            value: '4000',
            label: '$4,000',
        },
        {
            value: '5000',
            label: '$5,000',
        },
      ],
      checkBoxText: ' I agree to the <span class=\"underline\">privacy policy</span>',
    }
  },
});
</script>