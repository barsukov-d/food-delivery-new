import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useUserStore = defineStore('user', {
	state: () => ({
		isAuth: useStorage('isAuth', true),
	}),
	getters: {},
	actions: {},
});
