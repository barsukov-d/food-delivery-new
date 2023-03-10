<script setup lang="ts">
import type { ICategory } from 'src/types/categories';
import { useRoute } from 'vue-router';

defineProps<{
	category: ICategory;
}>();

const emit = defineEmits<{
	(e: 'toCategory', id: number): void;
}>();

const route = useRoute();
</script>

<template lang="pug">
.q-card
	q-item
		q-item-section
			pre {{ category }}
			h3(
				@click='() => emit("toCategory", category.id)',
				:class='{ underline: category.id === Number(route.params.id) }'
			) {{ category.title }}
</template>
