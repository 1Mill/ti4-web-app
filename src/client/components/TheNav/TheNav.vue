<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState('player', [
			'name',
		]),
	},
}
</script>

<template>
	<v-container>
		<v-layout>
			<v-flex>
				{{ name }}
			</v-flex>
			<v-flex shrink>
				{{ $peer.id }}
			</v-flex>
		</v-layout>
	</v-container>
</template>
