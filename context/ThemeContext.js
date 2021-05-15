import React, { createContext, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import { CustomDefaultTheme, CustomDarkTheme } from "../Theme";

export const ThemeContext = createContext(null);

export default ({ children }) => {
	const [theme, changeTheme] = useState(CustomDefaultTheme);
	return (
		<ThemeContext.Provider value={{ theme: theme, changeTheme }}>
			<PaperProvider theme={theme}>{children}</PaperProvider>
		</ThemeContext.Provider>
	);
};
