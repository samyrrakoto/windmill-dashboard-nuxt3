<template>
  <div>
    <content-page-title :page-title="'Forms'"></content-page-title>
    <element-star-project></element-star-project>

    <!-- General elements -->
    <content-section-title :section-title="'Elements'"></content-section-title>
    <div :class="sectionWrapperClass">
      <element-form-text-input :is-first-element="true" :input-label="'Name'" :place-holder="'Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas'"></element-form-text-input>
      <element-form-radio-button :radio-label="'Account Type'" :radio-inputs="radioInputs"></element-form-radio-button>
      <element-form-select-options :select-label="'Requested Limit'" :select-options="selectOptions"></element-form-select-options>
      <element-form-select-options :is-multiple="true" :select-label="'Multiple requested limits'" :select-options="selectOptions"></element-form-select-options>
      <element-form-text-input :isTextArea="true" :input-label="'Message'" :place-holder="'Your long text here'"></element-form-text-input>
      <element-form-check-box :checkbox-text="checkBoxText"></element-form-check-box>
    </div>

    <!-- Validation inputs -->
    <content-section-title :section-title="'Validation'"></content-section-title>
    <div :class="sectionWrapperClass">
      <element-form-text-input :is-invalid="true" :input-label="'Invalid input'" :place-holder="'Your password'" :input-helper-text="'Your password is too short'"></element-form-text-input>
      <element-form-text-input :is-valid="true" :input-label="'Valid Input'" :place-holder="'Your password'" :input-helper-text="'Your password is strong'"></element-form-text-input>
      <element-form-text-input :has-hint="true" :input-label="'Helper text'" :place-holder="'Your name'" :input-helper-text="'Your password must be at least 6 characters long'"></element-form-text-input>
    </div>

    <!-- Inputs with icons -->
    <content-section-title :section-title="'Icons'"></content-section-title>
    <div :class="sectionWrapperClass">
      <element-form-text-input :has-icon-left="true" :input-label="'Icon left'" :place-holder="'Your e-mail adress'" :is-first-element="true" ></element-form-text-input>
      <element-form-text-input :has-icon-right="true" :input-label="'Icon right'" :place-holder="'Your e-mail adress'"></element-form-text-input>
    </div>

    <!-- Inputs with buttons -->
    <content-section-title :section-title="'Buttons'"></content-section-title>
    <div :class="sectionWrapperClass">
      <element-form-text-input :has-button-left="true" :input-label="'Button left'" :place-holder="'Validate your input'" :is-first-element="true" ></element-form-text-input>
      <element-form-text-input :has-button-right="true" :input-label="'Button right'" :place-holder="'Validate your input'"></element-form-text-input>
    </div>
  </div>
</template>

<script lang="ts">

export default defineComponent({
  data() {
    return {
      radioInputs: [
        { value: 'personal', label: 'Personal' },
        { value: 'business', label: 'Business' },
      ],
      selectOptions: [
        { value: '1000', label: '$1,000' },
        { value: '2000', label: '$2,000' },
        { value: '3000', label: '$3,000' },
        { value: '4000', label: '$4,000' },
        { value: '5000', label: '$5,000' },
      ],
      checkBoxText: 'I agree to the privacy policy',
      sectionWrapperClass: 'px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800'
    }
  },
});
</script>