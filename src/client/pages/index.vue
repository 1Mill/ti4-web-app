<script>
import { mapState, mapMutations } from 'vuex';

export default {
	computed: {
		...mapState('room', {
			roomId: 'id',
		}),
		...mapState('player', [
			'name',
		]),
	},
	methods: {
		...mapMutations('room', {
			SET_ROOMID: 'SET_ID',
		}),
		...mapMutations('player', [
			'SET_ID',
		]),
	},
}
</script>

<template>
	<div>
		<v-layout justify-around align-center>
			<v-flex>
				1. Select your name:
			</v-flex>
			<v-flex>
				<v-text-field
				:value='name'
				@input='(value) => SET_NAME(value)'
				/>
			</v-flex>
		</v-layout>
		<v-layout justify-around align-center>
			<v-flex>
				2. Room id
			</v-flex>
			<v-flex>
				<v-text-field
				:value='roomId'
				@input='(value) => SET_ROOMID(value)'
				/>
			</v-flex>
		</v-layout>
		<v-layout column>
			<v-flex>
				2. Join a game as a ...
			</v-flex>
			<v-flex>
				<v-layout justify-around>
					<v-flex>
						<v-btn
						color='primary'
						to='/player'
						>
							Join as player
						</v-btn>
					</v-flex>
					<v-flex>
						<v-btn
						to='/game-master'
						color='secondary'
						>
							Game master
						</v-btn>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</div>
</template>
