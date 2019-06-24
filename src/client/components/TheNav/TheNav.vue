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
			<div>
				Game stuff ...
			</div>
		</v-layout>
	</v-container>
</template>
