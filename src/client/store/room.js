export const state = () =>  ({
	id: '',
})

export const mutations = {
	SET_ID(state, string) {
		state.id = string
	}
}
