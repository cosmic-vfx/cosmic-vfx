/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-500": "#2F3136",
				"light-500": "#f2f2f2",
				"gray-400": "#9CA3AF",
				"sky-500": "#7F98E6",
				"sky-400": "#5F68B8",
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
