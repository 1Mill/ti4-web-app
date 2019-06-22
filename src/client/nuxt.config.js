import colors from 'vuetify/es5/util/colors'

export default {
	mode: 'spa',
	/*
	** Headers of the page
	*/
	head: {
		titleTemplate: '%s - ' + process.env.npm_package_name,
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
		],
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'@plugins/inject-peerjs.client.js',
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/vuetify',
		'nuxt-client-init-module',
	],
	/*
	** vuetify module configuration
	** https://github.com/nuxt-community/vuetify-module
	*/
	vuetify: {
		theme: {
			accent: colors.grey.darken3,
			error: colors.deepOrange.accent4,
			info: colors.teal.lighten1,
			primary: colors.blue.darken2,
			secondary: colors.amber.darken3,
			success: colors.green.accent3,
			warning: colors.amber.base,
		},
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		},
		/*
		** Bundle external packages
		*/
		vendor: [
			'peerjs',
		],
	},
	/*
	** Configure webpack to pick up file changes
	*/
	watchers: {
		webpack: {
			poll: true,
		},
	},
};
