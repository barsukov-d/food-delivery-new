<script setup lang="ts">
// TODO: Перенести куда то
// const { t, locale } = useI18n();

// const localeOptions = ref([
// 	{ value: 'en', label: 'English' },
// 	{ value: 'ru', label: 'Russian' },
// ]);

import Menu from 'src/features/menu/index.vue';
</script>

<template lang="pug">
q-layout
	q-page-container
		RouterView.px-4.mb-14(v-slot='{ Component }')
			Suspense
				component(:is='Component')
		Menu
</template>
