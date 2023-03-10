<script setup lang="ts">
import PageHeader from 'src/shared/page/header.vue';
import CartProductsList from 'src/features/cart/products-list.vue';
import CartTotalPrice from 'src/features/cart/total-price.vue';
import CartOrderForm from 'src/features/cart/order-form.vue';

import { useCartStore } from 'src/stores/cart';

const { t } = useI18n();

const cartStore = useCartStore();
</script>
<template lang="pug">
q-page
	PageHeader(:header='t("order.pageHeader")')
	CartProductsList
	CartTotalPrice(v-if='cartStore.productsCart.length > 0')
	CartOrderForm(v-if='cartStore.productsCart.length > 0')
</template>
