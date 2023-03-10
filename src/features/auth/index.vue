<script setup lang="ts">
import { useUsers } from 'src/hooks/useUsers';

const { users, getUsers } = useUsers();

const FormLogin = defineAsyncComponent(
	() => import('src/entities/user/form/login.vue')
);
const FormReg = defineAsyncComponent(
	() => import('src/entities/user/form/reg.vue')
);
const FormSmsCode = defineAsyncComponent(
	() => import('src/entities/user/form/sms-code.vue')
);

const activeForm = ref('FormLogin');

const Form = computed(() => {
	switch (activeForm.value) {
		case 'FormLogin':
			return FormLogin;
		case 'FormReg':
			return FormReg;
		case 'FormSmsCode':
			return FormSmsCode;
	}
});

getUsers();
</script>
<template lang="pug">
pre {{ users }}
component(:is='Form')
</template>
