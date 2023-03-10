import { joinURL } from 'ufo';
import { StatusCodes } from 'http-status-codes';
import { createApi } from 'src/modules/axios';
import { AxiosError } from 'axios';

import type { IUser } from 'src/types/user';

import * as errors from './errors';
export const slidersServiceErrors = errors;

const api = createApi(joinURL(<string>process.env.API_URL, 'users'));

export const usersService = {
	/**
	 *
	 * Получить список товаров
	 *
	 * @example slidersService.getUsers();
	 *
	 */
	getUsers: async (): Promise<IUser[]> => {
		try {
			const response = await api.get<IUser[]>('', {
				validateStatus: (status: number) => status === StatusCodes.OK,
			});

			return response;
		} catch (error: unknown) {
			if (
				error instanceof AxiosError &&
				error?.response?.status === StatusCodes.BAD_REQUEST
			) {
				throw new errors.ErrorBadRequestSliders();
			}

			if (
				error instanceof AxiosError &&
				error?.response?.status === StatusCodes.NOT_FOUND
			) {
				throw new errors.ErrorNotFoundSliders();
			}

			throw error;
		}
	},
};
