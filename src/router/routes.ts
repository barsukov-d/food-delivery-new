import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('src/layouts/default.vue'),
		children: [
			{
				path: '/',
				name: 'home',
				component: () => import('pages/index.vue'),
			},
			{
				path: '/category/:id',
				name: 'category',
				component: () => import('pages/category.vue'),
			},
			{
				path: '/product/:id',
				name: 'product',
				component: () => import('pages/product.vue'),
			},
			{
				path: '/cart',
				name: 'cart',
				component: () => import('pages/cart.vue'),
			},
			{
				path: '/account',
				name: 'account',
				component: () => import('pages/account.vue'),
			},
		],
	},
];

export default routes;
