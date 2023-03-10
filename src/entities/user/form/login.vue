<script setup lang="ts">
const form = ref({
	phone: '',
	password: '',
});

const login = () => {
	console.log('login', form.value);
};
</script>

<template lang="pug">
h2.text-center.font-bold Вход
form
	q-input(
		outlined,
		label='Номер телефона',
		v-model='form.phone',
		:rules='[(val) => (val && val.length > 0) || "Поле обязательно для заполнения"]'
	)
	q-input(
		outlined,
		label='Пароль',
		v-model='form.password',
		:rules='[(val) => (val && val.length > 0) || "Поле обязательно для заполнения"]',
		type='password'
	)
	q-btn.mx-0.mt-5.w-full(label='Войти', color='primary', @click='login')
</template>
