import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeContext } from "../context/ThemeContext";
import Check from "./Check";
import Settings from "./Settings";
import Display from "./Display";
import Theming from "./Theming";
import DownloadButton from "./DownloadButton";

const Stack = createStackNavigator();

const Home = () => {
	const { theme, changeTheme } = useContext(ThemeContext);
	console.log(theme);
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
					headerTintColor: theme.colors.text,
				}}
			>
				<Stack.Screen
					name="Display"
					component={Display}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Settings" component={Settings} />
				<Stack.Screen
					name="Theming"
					component={Theming}
					options={{
						title: "Theming",
					}}
				/>
				<Stack.Screen
					name="Check"
					component={Check}
					options={{ title: "Check" }}
				/>
				<Stack.Screen
					name="Download"
					component={DownloadButton}
					options={{ title: "Download Button" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Home;
