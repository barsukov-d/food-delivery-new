import { route } from 'quasar/wrappers';
import {
	createMemoryHistory,
	createRouter,
	createWebHashHistory,
	createWebHistory,
} from 'vue-router';

import { useUserStore } from 'src/stores/user';
import { RouteLocationNormalized, NavigationGuard } from 'vue-router';

import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store,  } */) {
	const createHistory = process.env.SERVER
		? createMemoryHistory
		: process.env.VUE_ROUTER_MODE === 'history'
		? createWebHistory
		: createWebHashHistory;

	const Router = createRouter({
		scrollBehavior: () => ({ left: 0, top: 0 }),
		routes,

		// Leave this as is and make changes in quasar.conf.js instead!
		// quasar.conf.js -> build -> vueRouterMode
		// quasar.conf.js -> build -> publicPath
		history: createHistory(process.env.VUE_ROUTER_BASE),
	});

	const userStore = useUserStore();

	Router.beforeEach((to: RouteLocationNormalized) => {
		console.log(
			to.meta.auth && !userStore.isAuth,
			' to.meta.auth, userStore.isAuth'
		);

		if (to.meta.auth && !userStore.isAuth) {
			return { name: 'login' };
		}
	});

	return Router;
});
