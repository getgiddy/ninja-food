import { defineStore } from 'pinia'

export const useMyMobileMenuStore = defineStore({
  id: 'myMobileMenuStore',
  state: () => ({ showMenu: false }),
  actions: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
})
