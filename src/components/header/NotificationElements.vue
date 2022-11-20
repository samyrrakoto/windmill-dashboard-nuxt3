<template>
    <li class="flex" v-for="notification in notifications" :key="notification.type">
        <NuxtLink class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            to="#">
            <span>{{ notification.type }}</span>
            <span v-if="notification.amount > 0"
                class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                {{ notification.amount }}
            </span>
        </NuxtLink>
    </li>
</template>
<script lang="ts">
export default defineComponent({
    data() {
        return {
            notifications: [
                {
                    type: "Sales",
                    amount: 3
                },
                {
                    type: "Messages",
                    amount: 13
                },
                {
                    type: "Alerts",
                    amount: 0
                },
            ]
        }
    },
});
</script>