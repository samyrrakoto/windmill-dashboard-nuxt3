<template>
        <auth-image></auth-image>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">

            <div class="w-full">
                <content-module-title :module-title="'Create Account'"></content-module-title>
                <element-form-text-input :is-first-element="true" :input-label="'E-mail'" :place-holder="'Dane Joe'"></element-form-text-input>
                <element-form-text-input :input-label="'Password'" :place-holder="'*********'" :type="'password'"></element-form-text-input>
                <element-form-text-input :input-label="'Confirm password'" :place-holder="'*********'" :type="'password'"></element-form-text-input>
                <element-form-check-box :checkbox-text="'I agree to the privacy policy'"></element-form-check-box>

                <div class="w-full mt-4">
                    <element-button :button-text="'Create account'" :size="'regular'" :is-block-level="true"></element-button>
                </div>

                <hr class="my-8" />

                <auth-social-login></auth-social-login>
                <auth-helper-link class="mt-4" :text="'Already have an account ? Login here'" :to="'/'"></auth-helper-link>
            </div>
        </div>
</template>

<script lang="ts">
export default defineComponent({});
</script>