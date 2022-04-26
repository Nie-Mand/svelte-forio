module.exports = {
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		fontFamily: {
			main: ['Montserrat', 'sans-serif']
		},
		extend: {
			rotate: {
				'pi/2': '90deg',
				pi: '180deg',
				'3pi/2': '270deg',
				'2pi': '360deg'
			},
			colors: {
				socials: {
					twitter: '#00acee',
					linkedin: '#0077b5',
					github: '#e8eaea'
				}
			},
			animation: {
				'ping-slow': 'ping 10s cubic-bezier(0, 0, 0.2, 1) infinite'
			}
		}
	},
	plugins: []
}
