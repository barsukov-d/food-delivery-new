export interface IUser {
	id: number;
	/** @example "Иван" */
	first_name: string;
	/** @example "Иванов" */
	second_name: string;
	/** @example "+7 (999) 999-99-99" */
	phone: string;
	/** @example "example@mail.com" */
	email?: string;
	/** @example "123456" */
	password: string;
	/** @example "0.1" */
	sale?: number;
}

export interface IDelivery {
	id: number;
	/** @example "Пекин" */
	locality: string;
	/** @example "Улица Пушкина" */
	street: string;
	/** @example "Дом 5" */
	building: string;
	/** @example "Этаж 5" */
	floor?: string;
	/** @example "Квартира 5" */
	apartment?: string;
	/** @example "Код 5253" */
	'Intercom code'?: string;
	/** @example "Комментарий" */
	comment?: string;
}

export interface IOrder {
	id: number;
	/** @example 236598 */
	order_number?: number;
	/** @example "Ожидает оплаты, Оплачен, Отменён" */
	payment_status?: 'waiting payment' | 'paid' | 'canceled';
	/** @example "Готовится, Ожидает отгрузки, Доставляется, Завершён, Отменён" */
	'order status'?:
		| 'cooking'
		| 'waiting shipment'
		| 'delivering'
		| 'completed'
		| 'canceled';
	/** @example "самовывоз, доставка" */
	type_of_shipping?: 'pickup' | 'delivery';
	/** @example "Пекин Улица Пушкина Дом 5 Этаж 5 Квартира 5" */
	address?: string;
	/** @example 79999999999 */
	phone?: number;
	/** @example "Хинкали, Суп, Салат, Напиток" */
	order_entry?: string;
	/** @example 1000 */
	order_price?: number;
}
