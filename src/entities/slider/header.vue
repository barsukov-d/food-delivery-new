<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

defineProps<{
	header: string;
	subHeader?: string;
	action?: {
		to: RouteLocationRaw;
		label: string;
		color?: string;
	};
}>();
</script>

<template lang="pug">
.flex.justify-between.items-center
	h3.uppercase {{ header }}
	span(v-if='subHeader') {{ subHeader }}
	q-btn(
		v-if='action',
		:to='action.to',
		:label='action.label',
		:color='action.color ? action.color : "primary"',
		outline,
		no-caps
	)
</template>
