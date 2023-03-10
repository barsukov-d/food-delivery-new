<script setup lang="ts">
import PageHeader from 'src/shared/page/header.vue';

import { useCartStore } from 'src/stores/cart';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const { t } = useI18n();
const productsCartStore = useCartStore();
const { formCart } = storeToRefs(productsCartStore);
const router = useRouter();

const onSubmit = () => {
	console.log(formCart);
	showDialog();
};

const showDialog = () => {
	$q.dialog({
		title: 'Успех',
		message: 'Ваш заказ успешно оформлен',
		ok: 'Ясно',
	})
		.onOk(() => {
			productsCartStore.clearCart();
			router.push({ name: 'home' });
		})
		.onCancel(() => {
			// console.log('Cancel')
		})
		.onDismiss(() => {
			// console.log('I am triggered on both OK and Cancel')
		});
};
</script>

<template lang="pug">
PageHeader(:header='t("order.formHeader")')
q-form(@submit='onSubmit')
	q-input(
		v-model='formCart.phone',
		label='Телефон',
		outlined,
		mask='+7-###-###-##-##',
		:rules='[(val) => !!val || "Поле обязательно для заполнения"]'
	)
	q-input(
		v-model='formCart.locality',
		label='Населённый пункт',
		outlined,
		:rules='[(val) => !!val || "Поле обязательно для заполнения"]'
	)
	q-input(
		v-model='formCart.street',
		label='Улица',
		outlined,
		:rules='[(val) => !!val || "Поле обязательно для заполнения"]'
	)
	q-input(
		v-model='formCart.building',
		label='Дом / строение',
		outlined,
		:rules='[(val) => !!val || "Поле обязательно для заполнения"]'
	)
	q-input.mb-5(v-model='formCart.floor', label='Этаж', outlined)
	q-input.mb-5(v-model='formCart.apartment', label='Квартира / оффис', outlined)
	q-input.mb-5(v-model='formCart.intercomCode', label='Код домофона', outlined)
	q-input.mb-5(v-model='formCart.comment', label='Комментарий', outlined)
	q-btn.mx-0.mt-5.w-full(type='submit', color='primary', label='Оформить заказ')
</template>
