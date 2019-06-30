import { fake } from 'faker';

export const state = () =>  ({
	// * Set default room name
	id: fake('{{random.word}}-{{random.word}}-{{system.fileExt}}').replace(/\s+/g, '-').toLowerCase(),
})

export const mutations = {
	SET_ID(state, string) {
		state.id = string
	}
}
