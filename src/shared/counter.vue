<script setup lang="ts">
defineProps<{
	setCount: number;
}>();

const emit = defineEmits<{
	(e: 'count', count: number): void;
}>();

const count = ref(1);

watch(count, (val) => {
	emit('count', val);
});
</script>

<template lang="pug">
.flex.items-center.justify-between
	q-btn.text-xs(
		@click='count++',
		round,
		color='primary',
		icon='add',
		:disable='count >= 99'
	)
	span {{ setCount }}
	q-btn.text-xs(
		@click='count--',
		round,
		color='primary',
		icon='remove',
		:disable='count <= 0'
	)
</template>
