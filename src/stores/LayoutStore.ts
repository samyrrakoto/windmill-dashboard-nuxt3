export const useLayoutStore = defineStore('layout', {
    state: () => (
        {
            dark: false,
            isMobileSideMenuOpen: false,
        }),
    getters: {
        getDarkTheme: (state) => state.dark,
        getMobileSideMenuOpen: (state) => state.isMobileSideMenuOpen,
    },
    actions: {
        toggleDark() {
            this.dark = !this.dark
        },
        toggleMobileSideMenu() {
            this.isMobileSideMenuOpen = !this.isMobileSideMenuOpen
        },
        closeMobileSideMenu() {
            this.isMobileSideMenuOpen = false
        }
    },
})