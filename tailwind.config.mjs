/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'clr-White': ' #FFFFFF',
			'clr-Iron': ' #d8d8d8',
			'clr-Monsoon': ' #838391',
			'clr-Martinique': ' #38384f',
			'clr-Ebony': '#070724',
			'clr-Pelorous': ' #419EBB',
			'clr-Shamrock': ' #1ec1a2',
			'clr-Royal-Blue': ' #2d68f0',
			'clr-Purple-Heart': ' #6d2ed5',
			'clr-Orange-Roughy': '#cd5120',
			'clr-Valencia': ' #D14C32',
			'clr-Punch': ' #d83a34',
			'clr-Tan-Hide': ' #eda249',
		},
		fontFamily: {
			'primary': ['Antonio', 'sans-serif'],
			'secondary': ['League Spartan', 'sans-serif'],
		},
		extend: {
		},
	},
	plugins: [],
}
