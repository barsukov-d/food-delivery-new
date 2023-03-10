<script setup lang="ts">
import type { IBanner } from 'src/types/banners';
defineProps<{
	banner: IBanner;
}>();
</script>

<template lang="pug">
.q-card
	q-item.h-40
		q-item-section
			q-img(:src='banner.image')
</template>
