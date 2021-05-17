import React, { useContext } from "react";
import {
	View,
	ScrollView,
	ImageBackground,
	Text,
	StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import theming from "../assets/theming.jpg";
import check from "../assets/check.png";
import { ThemeContext } from "../context/ThemeContext";

const Settings = () => {
	const navigation = useNavigation();
	const { theme, changeTheme } = useContext(ThemeContext);

	return (
		<ScrollView>
			<View style={styles(theme).container}>
				<View style={styles(theme).item}>
					<TouchableOpacity onPress={() => navigation.navigate("Theming")}>
						<ImageBackground
							source={theming}
							style={styles(theme).image}
							imageStyle={{
								alignSelf: "center",
								opacity: 0.8,
							}}
						>
							<Text style={styles.label}>Theming</Text>
						</ImageBackground>
					</TouchableOpacity>
				</View>
				<View style={styles(theme).item}>
					<TouchableOpacity onPress={() => navigation.navigate("Check")}>
						<ImageBackground
							source={check}
							style={styles(theme).image}
							imageStyle={{
								alignSelf: "center",
								opacity: 0.8,
							}}
						>
							<Text style={styles(theme).label}>Check</Text>
						</ImageBackground>
					</TouchableOpacity>
				</View>
				<View style={styles(theme).item}>
					<TouchableOpacity onPress={() => navigation.navigate("Download")}>
						<ImageBackground
							source={check}
							style={styles(theme).image}
							imageStyle={{
								alignSelf: "center",
								opacity: 0.8,
							}}
						>
							<Text style={styles(theme).label}>Button</Text>
						</ImageBackground>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = (theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "space-evenly",
		},
		item: {
			height: 200,
			width: 150,
			borderRadius: 10,
			borderWidth: 2,
			borderColor: theme.colors.primary,
			alignSelf: "center",
			marginTop: 30,
			marginBottom: 10,
		},
		image: {
			height: 196,
			width: 146,
			borderColor: "blue",
			alignItems: "flex-end",
			justifyContent: "flex-end",
		},
		label: {
			fontSize: 20,
			color: "black",
			fontWeight: "bold",
			alignSelf: "center",
		},
	});

export default Settings;
