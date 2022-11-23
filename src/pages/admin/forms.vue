<template>
  <div>
    <content-page-title :page-title="'Forms'"></content-page-title>
    <content-star-project></content-star-project>

    <!-- General elements -->
    <content-section-title :section-title="'Elements'"></content-section-title>
    <div :class="sectionWrapperClass">
      <form-text-input :is-first-element="true" :input-label="'Name'" :place-holder="'Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas'"></form-text-input>
      <form-radio-button :radio-label="'Account Type'" :radio-inputs="radioInputs"></form-radio-button>
      <form-select-options :select-label="'Requested Limit'" :select-options="selectOptions"></form-select-options>
      <form-select-options :is-multiple="true" :select-label="'Multiple requested limits'" :select-options="selectOptions"></form-select-options>
      <form-text-input :isTextArea="true" :input-label="'Message'" :place-holder="'Your long text here'"></form-text-input>
      <form-check-box :checkbox-text="checkBoxText"></form-check-box>
    </div>

    <!-- Validation inputs -->
    <content-section-title :section-title="'Validation'"></content-section-title>
    <div :class="sectionWrapperClass">
      <form-text-input :is-invalid="true" :input-label="'Invalid input'" :place-holder="'Your password'" :input-helper-text="'Your password is too short'"></form-text-input>
      <form-text-input :is-valid="true" :input-label="'Valid Input'" :place-holder="'Your password'" :input-helper-text="'Your password is strong'"></form-text-input>
      <form-text-input :has-hint="true" :input-label="'Helper text'" :place-holder="'Your name'" :input-helper-text="'Your password must be at least 6 characters long'"></form-text-input>
    </div>

    <!-- Inputs with icons -->
    <content-section-title :section-title="'Icons'"></content-section-title>
    <div :class="sectionWrapperClass">
      <form-text-input :has-icon-left="true" :input-label="'Icon left'" :place-holder="'Your e-mail adress'" :is-first-element="true" ></form-text-input>
      <form-text-input :has-icon-right="true" :input-label="'Icon right'" :place-holder="'Your e-mail adress'"></form-text-input>
    </div>

    <!-- Inputs with buttons -->
    <content-section-title :section-title="'Buttons'"></content-section-title>
    <div :class="sectionWrapperClass">
      <form-text-input :has-button-left="true" :input-label="'Button left'" :place-holder="'Validate your input'" :is-first-element="true" ></form-text-input>
      <form-text-input :has-button-right="true" :input-label="'Button right'" :place-holder="'Validate your input'"></form-text-input>
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