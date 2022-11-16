<template>
<!DOCTYPE html>
    <html x-data="data()" lang="fr">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{{ title }}</title>
        </head>

        <body>
            <div class="flex bg-gray-50 dark:bg-gray-900" :class="{'overflow-hidden': isSideMenuOpen }">
                <side-part></side-part>
                <div class="flex flex-col flex-1">
                    <head-part></head-part>
                    <slot />
                </div>
            </div>
        </body>
    </html>
</template>


<script lang="ts">
export default defineComponent({
    data() {
        return {
            title: 'Windmill Dashboard x Nuxt3',
            isSideMenuOpen: false,
        }
    },
});
</script>