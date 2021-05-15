import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, DefaultTheme } from "react-native-paper";
import { ThemeContext } from "../context/ThemeContext";

const Check = () => {
	const { theme, changeTheme } = useContext(ThemeContext);
	console.log(theme);
	return (
		<View style={{ margin: 10 }}>
			<Button style={styles(theme).buttonStyle} color={theme.colors.text}>
				Check
			</Button>
			<Text style={{ color: theme.colors.primary }}>This is checkingo</Text>
		</View>
	);
};

const styles = (theme) =>
	StyleSheet.create({
		buttonStyle: {
			backgroundColor: theme.colors.primary,
			borderRadius: theme.borderRadius,
		},
	});

export default Check;
