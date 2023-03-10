<script setup lang="ts">
import Counter from 'src/shared/counter.vue';
import { useCartStore } from 'stores/cart';
import type { IProduct } from 'src/types/products';

defineProps<{
	product: IProduct;
	setCount: number;
}>();

const emit = defineEmits<{
	(e: 'count', val: number): void;
	(e: 'addProduct', id: number): void;
}>();

const cartStore = useCartStore();
</script>

<template lang="pug">
q-card.p-5.mt-2.h-auto.grid.grid-rows-auto
	RouterLink(:to='{ name: "product", params: { id: product.id } }')
		q-card-section.p-0.flex.items-center.justify-center
			q-img(
				:src='product.image',
				:ratio='1',
				fit='contain',
				style='height: 120px; max-width: 100%'
			)
		span.mt-3.h-10.block.font-bold.leading-4 {{ product.name }}
		span {{ product.weight }} г
	.text-center.my-3.self-end(v-if='!cartStore.isProductInCart(product.id)')
		q-btn.w-full(
			@click='emit("addProduct", product.id)',
			unelevated,
			rounded,
			color='primary',
			:label='product.price + "₽"'
		)
	Counter.my-3.self-end(
		v-else,
		@count='emit("count", $event)',
		:set-count='setCount'
	)
</template>
