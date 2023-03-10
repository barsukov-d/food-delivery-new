<script setup lang="ts">
import Counter from 'src/shared/counter.vue';
import { useCartStore } from 'stores/cart';

import type { IProduct } from 'src/types/products';

const props = defineProps<{
	product: IProduct;
}>();

const emit = defineEmits<{
	(e: 'removeProduct', id: number): void;
	(e: 'addProduct', id: number): void;
	(e: 'count', id: number, val: number): void;
}>();

const cartStore = useCartStore();

const count = (val: number) => {
	emit('count', props.product.id, val);
};
</script>

<template lang="pug">
q-card.p-5.mt-2.h-auto.grid.grid-rows-auto.grid-cols-2
	RouterLink(:to='{ name: "product", params: { id: product.id } }')
		//- .p-0.flex.items-center.justify-center
		//- 	q-img(
		//- 		:src='product.image',
		//- 		:ratio='1',
		//- 		fit='contain',
		//- 		style='height: 120px; max-width: 100%'
		//- 	)
		span.mt-3.h-10.block.font-bold.leading-4 {{ product.name }}
		span {{ product.weight }} г
	.flex.text-center.my-3.w-28.self-center.justify-self-end(
		v-if='!cartStore.isProductInCart(product.id)'
	)
		q-btn.w-full(
			@click='emit("addProduct", product.id)',
			unelevated,
			rounded,
			color='primary',
			:label='product.price + " ₽"'
		)
	Counter.my-3.w-28.self-center.justify-self-end(
		v-else,
		@count='count',
		:set-count='cartStore.getProductCount(product.id)'
	)
	span total price {{ cartStore.getProductCount(product.id) * product.price }}
	q-btn.w-20.h-5.justify-self-end(
		glossy,
		label='Удалить',
		color='negative',
		@click='emit("removeProduct", product.id)'
	)
</template>
