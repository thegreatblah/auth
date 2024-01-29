import { defineStore } from 'pinia';

var timeout = null
export const useErrorStore = defineStore({
  id: 'error',
  state: () => ({
    error: '',
  }),
  actions: {
    setError(errorMessage: string) {
      if (timeout) window.clearTimeout(timeout)
      this.error = errorMessage;

      timeout = setTimeout(() => {
        this.error = ''
      }, 4 * 1000);
    },
  },
});