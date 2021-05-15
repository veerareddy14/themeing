import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	Text,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Display = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="dark" hidden />
			{modalVisible ? (
				<View style={styles.topModal}>
					<MaterialIcons
						name="settings"
						size={52}
						onPress={() => navigation.navigate("Settings")}
					/>
				</View>
			) : null}
			<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
				<Text style={{ alignSelf: "center" }}>Tap the screen</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
	},
	topModal: {
		height: 60,
		flexDirection: "row",
		width: "100%",
		backgroundColor: "transparent",
		backgroundColor: "white",
		position: "absolute",
		zIndex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		top: 0,
	},
});

export default Display;
