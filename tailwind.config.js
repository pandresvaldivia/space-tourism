/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Barlow', 'sans-serif'],
			['barlow-condensed']: ['Barlow Condensed', 'sans-serif'],
			bellefair: ['Bellefair', 'sans-serif'],
		},
		colors: {
			primary: '#0B0D17',
			secondary: '#D0D6F9',
			white: '#FFFFFF',
		},
		letterSpacing: {
			menu: '0.175em',
		},
		extend: {
			maxWidth: {
				wrapper: '80rem',
			},
			lineHeight: {
				body: '1.75',
			},
		},
	},
	plugins: [],
};
