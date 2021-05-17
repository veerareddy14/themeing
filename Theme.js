import { DefaultTheme, DarkTheme } from "react-native-paper";

export const CustomDefaultTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
	},
};

export const CustomDarkTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
	},
};

export const RedTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: "red",
	},
	borderRadius: 20,
};

export const BlueTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: "blue",
	},
	borderRadius: 20,
};
export const GreenTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: "green",
	},
	borderRadius: 20,
};
export const OrangeTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: "orange",
	},
	borderRadius: 20,
};
export const YellowTheme = {
	...DefaultTheme,
	dark: false,
	colors: {
		...DefaultTheme.colors,
		primary: "yellow",
	},
	borderRadius: 20,
};
