import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";

const DownloadButton = () => {
	const { theme, changeTheme } = useContext(ThemeContext);
	return (
		<TouchableOpacity style={styles(theme).downloadButtonStyle}>
			<View style={styles(theme).downloadIconStyle}>
				<AntDesign name="android1" size={40} color={theme.colors.textColor} />
			</View>
			<View style={styles(theme).downloadTextViewStyle}>
				<Text style={styles(theme).downloadTextStyle}>FREE DOWNLOAD</Text>
				<Text style={styles(theme).downloadTextStyle}>ANDROID</Text>
				<Text style={styles(theme).downloadTextStyle}>LOCAL POSTER</Text>
			</View>
			<View style={styles(theme).downloadIconStyle}>
				<FontAwesome5
					name="download"
					size={40}
					color={theme.colors.textColor}
				/>
			</View>
		</TouchableOpacity>
	);
};

const styles = (theme) =>
	StyleSheet.create({
		downloadButtonStyle: {
			flexDirection: "row",
			borderWidth: 2,
			borderColor: "#304ffe",
			width: 320,
			justifyContent: "space-between",
			borderRadius: 10,
			backgroundColor: "#304ffe",
			margin: 20,
		},
		downloadIconStyle: {
			justifyContent: "center",
			alignItems: "center",
			paddingLeft: 15,
			paddingRight: 15,
		},
		downloadTextViewStyle: {
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
		},
		downloadTextStyle: {
			fontSize: 15,
			fontWeight: "bold",
			color: "white",
		},
	});

export default DownloadButton;
