<script setup lang="ts">
import PageHeader from 'src/shared/page/header.vue';
import Auth from 'src/features/auth/index.vue';
</script>
<template lang="pug">
q-page
	PageHeader(header='Кабинет')
	Auth
</template>
