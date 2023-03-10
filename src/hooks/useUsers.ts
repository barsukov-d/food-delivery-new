import { usersService } from 'src/services/users';
import type { IUser } from 'src/types/user';

export const useUsers = () => {
	const $w = useWait();

	/**
	 *
	 * Fetch users
	 *
	 */

	const users = ref<IUser[]>([]);
	const fetchUsersLoadingSymbol = Symbol('fetchUsers');
	const getUsers = async () => {
		try {
			$w.start(fetchUsersLoadingSymbol);
			users.value = await usersService.getUsers();
		} catch (error) {
			throw error;
		} finally {
			$w.end(fetchUsersLoadingSymbol);
		}
	};
	// const banner = ref<IUser>();
	// const getBannerLoadingSymbol = Symbol('getBanner');
	// const getBanner = async (id: number) => {
	// 	try {
	// 		$w.start(getBannerLoadingSymbol);
	// 		banner.value = await usersService.getUsers();
	// 	} catch (error) {
	// 		throw error;
	// 	} finally {
	// 		$w.end(getBannerLoadingSymbol);
	// 	}
	// };
	// const fetchBanners = async (): Promise<void> => {
	// 	$w.start('fetchBanners');
	// 	try {
	// 		_banners.value = await bannersService.getBanners();
	// 	} catch (error) {
	// 		if (error instanceof bannersServiceErrors.ErrorNotFoundBanners) {
	// 			bannersError.value = 'Я вернул 404';
	// 		} else if (
	// 			error instanceof bannersServiceErrors.ErrorBadRequestBanners
	// 		) {
	// 			bannersError.value = 'Я вернул 400';
	// 		} else {
	// 			throw error;
	// 		}
	// 	} finally {
	// 		$w.end('fetchBanners');
	// 	}
	// };

	return {
		users,
		fetchUsersLoadingSymbol,
		getUsers,
	};
};
