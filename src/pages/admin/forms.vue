<template>
  <div>
    <Title>Forms - {{ $utils.globals.projectName }}</Title>
    <content-page-title :page-title="'Forms'" />
    <content-star-project />

    <!-- General elements -->
    <content-section-title :section-title="'Elements'" />
    <div :class="sectionWrapperClass">
      <form-text-input :is-first-element="true" :input-label="'Name'" :place-holder="'Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas'" v-model="formValues.simpleInput" />
      <form-radio-button :radio-label="'Account Type'" v-model="formValues.radioInput" :model-value="radioInputs" />
      <form-select-options :select-label="'Requested Limit'" @new-options="(option: string) =>formValues.selectOption = option" :select-options="selectOptions" />
      <form-select-options :is-multiple="true" :select-label="'Multiple requested limits'" @new-options="(options: []) =>formValues.mutliSelectOptions = [...options]" :select-options="selectOptions" />
      <form-text-input :isTextArea="true" :input-label="'Message'" :place-holder="'Your long text here'" v-model="formValues.textInput" />
      <form-check-box :checkbox-text="checkBoxText" v-model="formValues.checkBox" />
    </div>

    <!-- Validation inputs -->
    <content-section-title :section-title="'Validation'" />
    <div :class="sectionWrapperClass">
      <form-text-input :is-invalid="true" :input-label="'Invalid input'" :place-holder="'Your password'" :input-helper-text="'Your password is too short'" />
      <form-text-input :is-valid="true" :input-label="'Valid Input'" :place-holder="'Your password'" :input-helper-text="'Your password is strong'" />
      <form-text-input :has-hint="true" :input-label="'Helper text'" :place-holder="'Your name'" :input-helper-text="'Your password must be at least 6 characters long'" />
    </div>

    <!-- Inputs with icons -->
    <content-section-title :section-title="'Icons'" />
    <div :class="sectionWrapperClass">
      <form-text-input :has-icon-left="true" :input-label="'Icon left'" :place-holder="'Your e-mail adress'" :is-first-element="true"  />
      <form-text-input :has-icon-right="true" :input-label="'Icon right'" :place-holder="'Your e-mail adress'" />
    </div>

    <!-- Inputs with buttons -->
    <content-section-title :section-title="'Buttons'" />
    <div :class="sectionWrapperClass">
      <form-text-input :has-button-left="true" :input-label="'Button left'" :place-holder="'Validate your input'" :is-first-element="true"  />
      <form-text-input :has-button-right="true" :input-label="'Button right'" :place-holder="'Validate your input'" />
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
      formValues: {
        simpleInput: '',
        textInput: '',
        radioInput: '',
        selectOption: '',
        mutliSelectOptions: [],
        checkBox: false,
      },
      checkBoxText: 'I agree to the privacy policy',
      sectionWrapperClass: 'px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800'
    }
  },
});
</script>