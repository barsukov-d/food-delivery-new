import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

import type { IProductCart } from '../types/products';

export const useCartStore = defineStore('cart', {
	state: () => ({
		productsCart: [] as IProductCart[],
		formCart: useStorage('formCart', {
			phone: '',
			locality: '',
			street: '',
			building: '',
			floor: '',
			apartment: '',
			intercomCode: '',
			comment: '',
		}),
	}),
	getters: {
		// totalPrice: (state) => {
		// 	return state.productsCart.reduce((total, product) => {
		// 		return total + (product.price || 0) * product.count;
		// 	}, 0);
		// },
		totalProducts: (state) => {
			return state.productsCart.reduce((total, product) => {
				return total + product.count;
			}, 0);
		},
		getProductCount: (state) => {
			return (id: number) => {
				const product = state.productsCart.find((p) => p.id === id);
				return product ? product.count : 0;
			};
		},
	},
	actions: {
		addProduct(id: number) {
			this.productsCart.push({ id, count: 1 });
		},
		setProductCount(id: number, count: number) {
			const product = this.productsCart.find((p) => p.id === id);
			if (product) {
				count !== 0 ? (product.count = count) : this.removeProduct(id);
			}
		},
		isProductInCart(id: number) {
			return this.productsCart.some((p) => p.id === id);
		},
		removeProduct(id: number) {
			this.productsCart = this.productsCart.filter((p) => p.id !== id);
		},
		clearCart() {
			this.productsCart = [];
		},
	},
});
