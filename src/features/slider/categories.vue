<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Navigation, FreeMode } from 'swiper';

import { useCategories } from 'src/hooks/useCategories';

import CategoryCard from 'src/entities/category/card.vue';

const $w = useWait();

const modules = [Navigation, FreeMode];

const { categories, fetchCategories, fetchCategoriesLoadingSymbol } =
	useCategories();

const toCategory = (id: number) => {
	router.push({ name: 'category', params: { id } });
};

const route = useRoute();
const router = useRouter();

fetchCategories();
</script>

<template lang="pug">
template(v-if='$w.is(fetchCategoriesLoadingSymbol)')
	swiper.h-20(
		:slides-per-view='2.2',
		:space-between='10',
		:modules='modules',
		:pagination='{ clickable: true }',
		:freeMode='true'
	)
		template(v-for='(category, index) in 10', :key='index')
			swiper-slide
				q-skeleton.my-4.h-20

template(v-else)
	swiper.h-20(
		:slides-per-view='2.2',
		:space-between='10',
		:modules='modules',
		:pagination='{ clickable: true }',
		:freeMode='true'
	)
		template(v-for='(category, index) in categories', :key='index')
			swiper-slide
				CategoryCard.my-3(:category='category', @toCategory='toCategory')
</template>
