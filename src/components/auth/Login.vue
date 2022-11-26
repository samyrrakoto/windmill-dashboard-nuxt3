<template>
    <auth-image />
    <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div class="w-full">
            <content-module-title :module-title="'Log in'" />
            <form-text-input :is-first-element="true" :input-label="'E-mail'" :place-holder="'made.with@love.me'" v-model="credentials.login"/>
            <form-text-input :input-label="'Password'" :place-holder="'*********'" :type="'password'" v-model="credentials.password"/>
            <div class="w-full mt-4">
                <element-button :button-text="'Log in'" :size="'regular'" :is-block-level="true" :has-hint="true" :input-helper-text="'Just click here to enter the dashboard, there is no login system'" v-on:click="$router.push('/admin/dashboard')" />
            </div>
            <div class="w-full mt-3 text-[10px] text-center text-slate-400 dark:text-zinc-200">
               (Just click "Log in" without credentials to access the dashboard, as there is no auth system implemented)
            </div>
            <hr class="my-8" />
            <auth-social-login></auth-social-login>
            <auth-helper-link class="mt-4" :text="'Forgot your password ?'" :to="'/forgot-password'" />
            <auth-helper-link class="mt-1" :text="'Create account'" :to="'/create-account'" />
        </div>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            credentials: {
                login: '',
                password: '',
            }
        }
    },
});
</script>