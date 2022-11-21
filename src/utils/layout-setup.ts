import { useLayoutStore } from '@/stores/LayoutStore';
import { mapState } from 'pinia';

export default defineComponent({
    computed: {
        ...mapState(useLayoutStore, ['dark', 'isMobileSideMenuOpen'])
    }
});