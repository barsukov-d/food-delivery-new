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
				component: () => import('src/pages/account/index.vue'),
				children: [
					{
						path: '/account/reg',
						name: 'reg',
						component: () => import('pages/account/reg.vue'),
						meta: { auth: false },
					},
					{
						path: '/account/login',
						name: 'login',
						component: () => import('pages/account/login.vue'),
						meta: { auth: false },
					},
					{
						path: '/account/sms-code',
						name: 'sms-code',
						component: () => import('pages/account/sms-code.vue'),
						meta: { auth: false },
					},
					{
						path: '/account/reset-password',
						name: 'reset-password',
						component: () =>
							import('pages/account/reset-password.vue'),
						meta: { auth: false },
					},
					{
						path: '/account/profile',
						name: 'profile',
						component: () => import('pages/account/profile.vue'),
						meta: { auth: true },
					},
				],
			},
			{
				path: '/:pathMatch(.*)*',
				name: 'NotFound',
				component: () => import('pages/not-found.vue'),
			},
		],
	},
];

export default routes;
