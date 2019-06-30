export const actions = {
	nuxtClientInit({ commit, state }) {
		// * If the room id is missing, look for it in the url query, otherwise redirect to the home page.
		if (!state.room.id) {
			const { roomId } = this.app.router.history.current.query;

			if (roomId) {
				commit('room/SET_ID', roomId)
			} else {
				this.app.router.push('/')
			}
		}

		// * Check that $peer object exists on page mount, otherwise redirect to homepage
		if (!this.$peer.id) this.app.router.push('/')
	},
}
