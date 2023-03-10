<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Navigation, FreeMode } from 'swiper';

import BannerCard from 'src/entities/banner/card.vue';

import { useBanners } from 'src/hooks/useBanners';

const $w = useWait();

const modules = [Navigation, FreeMode];

const { banners, fetchBanners, fetchBannersLoadingSymbol } = useBanners();

fetchBanners();
</script>

<template lang="pug">
swiper(
	:slides-per-view='1.2',
	:space-between='10',
	:modules='modules',
	:pagination='{ clickable: true }',
	:freeMode='true'
)
	template(v-if='$w.is(fetchBannersLoadingSymbol)')
		swiper-slide(v-for='(banner, index) in 10', :key='index')
			q-skeleton.my-3.h-40
	template(v-else)
		swiper-slide(v-for='(banner, index) in banners', :key='index')
			BannerCard.my-3(:banner='banner')
</template>
