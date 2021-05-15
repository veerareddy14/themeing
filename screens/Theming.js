import React, { useContext } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemeContext } from "../context/ThemeContext";
import {
	RedTheme,
	BlueTheme,
	GreenTheme,
	YellowTheme,
	OrangeTheme,
} from "../Theme";

const Theming = () => {
	const { theme, changeTheme } = useContext(ThemeContext);

	return (
		<View
			style={{
				flex: 1,
				flexDirection: "row",
				flexWrap: "wrap",
			}}
		>
			<TouchableOpacity onPress={() => changeTheme(RedTheme)}>
				<View
					style={{
						borderRadius: 100,
						backgroundColor: "red",
						height: 100,
						width: 100,
						margin: 10,
					}}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => changeTheme(BlueTheme)}>
				<View
					style={{
						borderRadius: 100,
						backgroundColor: "blue",
						height: 100,
						width: 100,
						margin: 10,
					}}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => changeTheme(GreenTheme)}>
				<View
					style={{
						borderRadius: 100,
						backgroundColor: "green",
						height: 100,
						width: 100,
						margin: 10,
					}}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => changeTheme(OrangeTheme)}>
				<View
					style={{
						borderRadius: 100,
						backgroundColor: "orange",
						height: 100,
						width: 100,
						margin: 10,
					}}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => changeTheme(YellowTheme)}>
				<View
					style={{
						borderRadius: 100,
						backgroundColor: "yellow",
						height: 100,
						margin: 10,
						width: 100,
					}}
				/>
			</TouchableOpacity>
		</View>
	);
};
export default Theming;
