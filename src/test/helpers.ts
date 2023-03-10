import { mount, shallowMount } from '@vue/test-utils';

export const createComponentShallowMount = (
	component: any,
	props?: any,
	global?: any
) => {
	const wrapper = shallowMount(component, {
		props: props,
		global: global,
	});

	return wrapper;
};
