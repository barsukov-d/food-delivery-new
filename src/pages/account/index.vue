<script setup lang="ts">
import PageHeader from 'src/shared/page/header.vue';
import { useUserStore } from 'src/stores/user';
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const isAuth = computed(() => {
	return userStore.isAuth;
});

onMounted(() => {
	if (route.fullPath === '/account' && !isAuth.value) {
		router.push({ name: 'login' });
	}
});
</script>
<template lang="pug">
q-page
	PageHeader(header='Кабинет')
	router-view
</template>
