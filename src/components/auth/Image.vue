<template>
    <div class="h-32 md:h-auto md:w-1/2">
    <img aria-hidden="true" class="object-cover w-full h-full dark:hidden"
        :src="`/_nuxt/assets/img/${$route.name}-office.jpeg`" alt="Office" />
    <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block"
        :src="`/_nuxt/assets/img/${$route.name}-office-dark.jpeg`"/>
</div>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            'create-account':  'create-account-office',
            'login': 'login-office',
            'forgotpassword': 'forgot-password-office',
        }
    },
});
</script>