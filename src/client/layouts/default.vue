<script>
import { TheNav } from '@/components/TheNav'

export default {
	components: {
		TheNav,
	},
}
</script>


<template>
	<v-app dark>
		<the-nav/>
		<v-content>
			<v-container>
				<nuxt/>
			</v-container>
		</v-content>
	</v-app>
</template>
