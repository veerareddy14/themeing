import { DefaultTheme, DarkTheme } from "react-native-paper";

export const CustomDefaultTheme = {
	...DefaultTheme,
	// dark: true,
	colors: {
		...DefaultTheme.colors,
		// primary: "#2196F3",
		// text: "white",
	},
	// borderRadius: 20,
};

export const CustomDarkTheme = {
	...DarkTheme,
	// dark: true,
	colors: {
		...DarkTheme.colors,
		// primary: "#2196F3",
		// text: "white",
	},
	// borderRadius: 20,
};

export const RedTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: "red",
		// text: "white",
	},
	borderRadius: 20,
};

export const BlueTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: "blue",
		// text: "white",
	},
	borderRadius: 20,
};
export const GreenTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: "green",
		// text: "white",
	},
	borderRadius: 20,
};
export const OrangeTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: "orange",
		// text: "white",
	},
	borderRadius: 20,
};
export const YellowTheme = {
	...DefaultTheme,
	dark: false,
	colors: {
		...DefaultTheme.colors,
		primary: "yellow",
		// text: "white",
	},
	borderRadius: 20,
};
