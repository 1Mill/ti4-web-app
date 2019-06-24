export const state = () => ({
	name: `Player ${Math.floor(Math.random() * (20))}`,
	position: null,
	race: null,
})

export const mutations = {
	SET_NAME(state, string) {
		state.name = string
	},
}
