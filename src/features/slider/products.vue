<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Navigation, FreeMode } from 'swiper';

import SliderHeader from 'src/entities/slider/header.vue';
import ProductCard from 'src/entities/product/card.vue';

import { useProducts } from 'src/hooks/useProducts';
import { useCartStore } from 'src/stores/cart';
import type { ICategory } from 'src/types/categories';

const props = defineProps<{ category: ICategory }>();

/**
 *
 * Use hooks
 *
 */
const { products, fetchProductsLoadingSymbol, fetchProducts } = useProducts();

const { t } = useI18n();
const $w = useWait();
const cartStore = useCartStore();
const swiperModules = [Navigation, FreeMode];

fetchProducts({ category_id: props.category.id });
</script>

<template lang="pug">
SliderHeader(
	:header='category.title',
	:action='{ to: { name: "category", params: { id: category.id } }, label: t("common.showAll") }'
)

swiper.h-80(
	:slides-per-view='2.2',
	:space-between='10',
	:modules='swiperModules',
	:pagination='{ clickable: true }',
	:freeMode='true'
)
	template(v-if='$w.is(fetchProductsLoadingSymbol)')
		SwiperSlide(v-for='(product, index) in 5', :key='index')
			q-skeleton.h-72
	template(v-else)
		SwiperSlide(v-for='(product, index) in products', :key='index')
			ProductCard.my-3(
				:product='product',
				:set-count='cartStore.getProductCount(product.id)',
				@count='cartStore.setProductCount(product.id, $event)',
				@addProduct='cartStore.addProduct($event)'
			)
</template>
