export default defineAppConfig({
	ui: {
		colors: {
			primary: "blue",
			neutral: "zinc",
			secondary: "teal",
		},
		button: {
			slots: {
				base: ["cursor-pointer"],
			},
		},
		dropdownMenu: {
			slots: {
				item: ["cursor-pointer"],
			},
		},
		icons: {
			loading: "i-material-symbols-progress-activity",
		},
	},
});
