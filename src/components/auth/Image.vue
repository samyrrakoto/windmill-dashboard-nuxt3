<template>
    <div class="h-32 md:h-auto md:w-1/2">
    <img aria-hidden="true" class="object-cover w-full h-full dark:hidden"
        :src="`/_nuxt/assets/img/${getImagePath}.jpeg`" alt="Office" />
    <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block"
        :src="`/_nuxt/assets/img/${getImagePath}-dark.jpeg`"/>
</div>
</template>

<script lang="ts">
export default defineComponent({
    computed: {
        getImagePath() {
            switch (this.$route.name){
                case 'create-account':
                    return 'create-account-office'
                case'forgot-password':
                    return 'forgot-password-office'
                default:
                    return 'login-office'
            }
        }
    },
});
</script>