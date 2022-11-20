<template>
    <tr class="text-gray-700 dark:text-gray-400">
        <td :class="columnClass">
            <table-avatar :full-name="avatar.fullname" :title="avatar.title" :picture="avatar.picture"></table-avatar>
        </td>
        <td :class="columnClass" class="text-sm">
            {{ amount }}
        </td>
        <td :class="columnClass" class="text-xs">
            <table-status :value="status"></table-status>
        </td>
        <td :class="columnClass" class="text-sm">
            {{ date }}
        </td>
        <td :class="columnClass" v-if="hasAction">
            <div class="flex items-center space-x-4 text-sm">
                <table-action :action-type="'edit'"></table-action>
                <table-action :action-type="'delete'"></table-action>
             </div>
        </td>
    </tr>
</template>
<script lang="ts">
import Avatar from '@/types/Avatar';
export default defineComponent({
    data() {
        return {
            columnClass: 'px-4 py-3'
        }
    },
    props: {
        avatar: {
            type: Object as PropType<Avatar>,
        },
        amount: {
            type: String,
        },
        status: {
            type: String,
            required: true,
        },
        date: {
            type: String,
        },
        hasAction: {
            type: Boolean,
            default: true,
        }
    }
});
</script>