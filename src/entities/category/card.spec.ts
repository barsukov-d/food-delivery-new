import { describe, it, expect, vi } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { createComponentShallowMount } from 'src/test/helpers';
import { useRouter, useRoute } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'src/router/routes';
import CategoryCard from './card.vue';

let router;

// beforeEach(async () => {
// 	router = createRouter({
// 		history: createWebHistory(),
// 		routes: routes,
// 	});

// 	router.push('/');
// 	await router.isReady();
// });

// vi.mock('vue-router', () => ({
// 	useRoute: vi.fn(() => {
// 		return {
// 			name: 'test-name',
// 			params: {
// 				id: '1',
// 			},
// 		};
// 	}),
// 	useRouter: vi.fn(() => ({
// 		// push: () => {},
// 	})),
// }));

// vi.mock('src/hooks/useBanners', () => ({
// 	useBanners: vi.fn(() => {
// 		return {
// 			banners: [
// 				{
// 					id: 1,
// 					title: 'test-title-banners',
// 					image: 'https://picsum.photos/200/300',
// 				},
// 			],
// 			banner: {
// 				id: 1,
// 				title: 'test-title',
// 				image: 'https://picsum.photos/200/300',
// 			},
// 		};
// 	}),
// }));

describe('CategoryCard', () => {
	let wrapper: any;

	it('show image in html', async () => {
		// const wrapper = createComponentShallowMount(
		// 	CategoryCard,
		// 	{
		// 		category: {
		// 			id: '1',
		// 			alias: 'test-alias',
		// 			title: 'test-title',
		// 			image: 'https://picsum.photos/200/300',
		// 		},
		// 	},
		// 	{ global: { stubs: ['router-link', 'router-view'] } }
		// );

		await nextTick();

		// console.log(wrapper.html(), 'wrapper');
	});
});
