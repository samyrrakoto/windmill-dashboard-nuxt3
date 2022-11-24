<template>
    <!-- Profile menu -->
    <li class="relative">
        <button class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none" @click="toggleProfileMenu"
            @keydown.escape="closeProfileMenu" aria-label="Account" aria-haspopup="true">
            <img class="object-cover w-8 h-8 rounded-full"
                src="/assets/img/avatar/pixelpanda.jpg"
                alt="" aria-hidden="true" />
        </button>
        <transition name="profile-menu">
            <div v-if="isProfileMenuOpen">
                <ul v-click-outside="closeProfileMenu"
                    @keydown.escape="closeProfileMenu"
                    class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                    aria-label="submenu">
                    <header-profile-elements />
                </ul>
            </div>
        </transition>
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

<style>
.profile-menu-leave-active {
    @apply transition ease-in duration-150;
}

.profile-menu-leave-from {
    @apply opacity-100;
}

.profile-menu-leave-to {
    @apply opacity-0;
}
</style>