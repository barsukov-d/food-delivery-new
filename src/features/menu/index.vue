<script setup lang="ts">
const router = useRouter();

const tab = ref('/');

const toPage = (page: string) => {
	if (page === 'home') {
		router.push('/');
	} else if (page === 'category') {
		router.push('/category/1');
	} else if (page === 'account') {
		router.push('/account');
	} else if (page === 'cart') {
		router.push('/cart');
	}
};

watch(
	() => tab.value,
	() => {
		toPage(tab.value);
	}
);
</script>

<template lang="pug">
q-tabs.w-full.bg-grey-2.text-teal.fixed.justify-around.bottom-0.z-10(
	v-model='tab',
	dense
)
	q-tab.p-0(name='home', icon='home', label='Главная')
	q-tab.p-0(name='category', icon='restaurant', label='Категории')
	q-tab.p-0(name='account', icon='person', label='Кабинет')
	q-tab.p-0(name='cart', icon='shopping_cart', label='Карзина')
</template>
