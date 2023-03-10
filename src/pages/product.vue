<script setup lang="ts">
import ProductCard from 'src/entities/product/card.vue';
import { useProducts } from 'src/hooks/useProducts';
import PageHeader from 'src/shared/page/header.vue';

import { useCartStore } from 'src/stores/cart';

const cartStore = useCartStore();
const route = useRoute();
const { product, getProduct } = useProducts();

await getProduct(Number(route.params.id));
</script>

<template lang="pug">
q-page
	PageHeader(header='Товар')
	template(v-if='product')
		ProductCard(
			:product='product',
			:set-count='cartStore.getProductCount(product.id)',
			@count='cartStore.setProductCount(product.id, $event)',
			@addProduct='cartStore.addProduct($event)'
		)
</template>
