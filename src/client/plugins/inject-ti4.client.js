const MAX_PLAYER_COUNT = 6
const PLAYABLE_RACES = [
	'Arborec',
	'Barony of Letnev',
	'Brotherhood of Yin',
	'Clan of Saar',
	'Embers of Muat',
	'Emirates of Hacan',
	'Federation of Sol',
	'Ghosts of Creuss',
	'L1z1x Mindnet',
	'Mentak Coalition',
	'Nalu Collective',
	'Nekro Virus',
	'Sardak Norr',
	'Universities of Jol - Nar',
	'Winnu',
	'Xxcha Kingdoms',
	'Yssrail Tribes',
]

export default ({ app }, inject) => {
	inject('ti4', {
		races: PLAYABLE_RACES,
		tablePositions: [... new Array(MAX_PLAYER_COUNT)].map((_, index) => index + 1),
	})
}
