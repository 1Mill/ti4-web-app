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
	<div>
		{{ name }}
	</div>
</template>
