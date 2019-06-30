import { fake } from 'faker';

export const state = () => ({
	name: fake('{{name.firstName}}'),
	position: null,
	race: null,
})

export const mutations = {
	SET_NAME(state, string) {
		state.name = string
	},
}
