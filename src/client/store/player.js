export const state = () => ({
	name: `Player ${Math.floor(Math.random() * (100))}`,
})

export const mutations = {
	SET_NAME(state, string) {
		state.name = string
	},
}
