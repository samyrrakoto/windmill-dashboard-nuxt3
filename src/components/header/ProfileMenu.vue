<template>
    <!-- Profile menu -->
    <li class="relative">
        <button class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none" @click="toggleProfileMenu"
            @keydown.escape="closeProfileMenu" aria-label="Account" aria-haspopup="true">
            <img class="object-cover w-8 h-8 rounded-full"
                src="/assets/img/avatar/pixelpanda.jpg"
                alt="" aria-hidden="true" />
        </button>
        <div v-if="isProfileMenuOpen">
            <ul x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100"
                x-transition:leave-end="opacity-0" v-click-outside="closeProfileMenu" @keydown.escape="closeProfileMenu"
                class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                aria-label="submenu">
                <header-profile-elements />
            </ul>
        </div>
    </li>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            isProfileMenuOpen: false,
        }
    },
    methods: {
        toggleProfileMenu(): void {
            this.isProfileMenuOpen = !this.isProfileMenuOpen;
        },
        closeProfileMenu(): void {
            this.isProfileMenuOpen = false;
        },
    },
});
</script>