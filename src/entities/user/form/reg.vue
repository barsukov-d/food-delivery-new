<script setup lang="ts">
const form = ref({
	name: '',
	phone: '',
	password: '',
	repeatPassword: '',
});

const onSubmit = () => {
	console.log('login', form.value);
};
</script>

<template lang="pug">
h2.text-center Регистрация

form(@submit.prevent='onSubmit')
	q-input(
		v-model='form.name',
		label='Name',
		outlined,
		:rules='[(val) => !!val || "Name is required"]'
	)
	q-input(
		v-model='form.phone',
		label='Email',
		outlined,
		:rules='[(val) => !!val || "Email is required", (val) => /.+@.+\..+/.test(val) || "Email must be valid"]'
	)
	q-input(
		v-model='form.password',
		label='Password',
		outlined,
		type='password',
		:rules='[(val) => !!val || "Password is required"]'
	)
	q-input(
		v-model='form.repeatPassword',
		label='Repeat password',
		outlined,
		type='password',
		:rules='[(val) => !!val || "Repeat password is required"]'
	)
	q-btn(label='Sign in', type='submit', color='primary', outline, no-caps)
</template>
