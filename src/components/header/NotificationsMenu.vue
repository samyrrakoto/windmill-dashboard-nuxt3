<template>
    <!-- Notifications menu -->
    <li class="relative">
        <button class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
            @click="toggleNotificationsMenu" @keydown.escape="closeNotificationsMenu" aria-label="Notifications"
            aria-haspopup="true">
            <element-svg aria-hidden="true" :class="'w-5 h-5'" :view-box="'0 0 20 20'" :fill="'currentColor'" :pic="'bell'" />
            <!-- Notification badge -->
            <span aria-hidden="true"
                class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
        </button>
        <div v-if="isNotificationsMenuOpen">
            <ul x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100"
                x-transition:leave-end="opacity-0" v-click-outside="closeNotificationsMenu"
                @keydown.escape="closeNotificationsMenu"
                class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
                aria-label="submenu">
                <header-notification-elements />
            </ul>
        </div>
    </li>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            isNotificationsMenuOpen: false,
        }
    },
    methods: {
        toggleNotificationsMenu(): void {
            this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen;
        },
        closeNotificationsMenu(): void {
            this.isNotificationsMenuOpen = false;
        },
    },
});
</script>