import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Switch } from "react-native-paper";
const MyComponent = () => {
	const [isSwitchOn, setIsSwitchOn] = React.useState(false);

	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

	return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default function App() {
	return (
		<View style={styles.container}>
			<View style={{ marginHorizontal: 25 }}>
				<Text style={styles.largeText}>Settings</Text>
				<TextInput style={styles.textInput} placeholder="Search" />
				<TouchableOpacity style={styles.rectangle}>
					<View style={styles.circle}>
						<Text style={{ color: "white", fontWeight: "bold", fontSize: 50 }}>
							AL
						</Text>
					</View>
					<View>
						<Text
							style={{ marginLeft: 12.5, fontWeight: "bold", fontSize: 24 }}
						>
							Alexander Lin
						</Text>
						<Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 12 }}>
							Apple ID, iCloud, Media & Purchases
						</Text>
					</View>
					<Text style={{ marginLeft: "auto", marginTop: 15 }}>></Text>
				</TouchableOpacity>
				<View
					style={{
						flexDirection: "row",
						marginTop: 50,
						backgroundColor: "white",
						padding: 12.5,
						borderTopRightRadius: 10,
						borderTopLeftRadius: 10,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginLeft: 5,
							height: 25,
							witdh: 25,
							borderRadius: 7.5,
							backgroundColor: "orange",
						}}
					>
						<Ionicons
							name="airplane"
							color="white"
							size={20}
							style={{ marginLeft: 3 }}
						/>
					</View>
					<Text style={{ marginLeft: 25, fontWeight: "bold" }}>
						Airplane Mode
					</Text>
					<View style={{ marginLeft: "auto" }}>
						<Switch></Switch>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						marginTop: 0,
						backgroundColor: "white",
						padding: 12.5,
						borderColor: "grey",
						borderTopWidth: 1,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginLeft: 5,
							height: 25,
							witdh: 25,
							borderRadius: 7.5,
							backgroundColor: "blue",
						}}
					>
						<Ionicons
							name="wifi-outline"
							color="white"
							size={20}
							style={{ marginLeft: 2 }}
						/>
					</View>
					<Text style={{ marginLeft: 25, fontWeight: "bold" }}>Wi-Fi</Text>
					<View style={styles.rightSideItem}>
						<Text>5GHZ Network</Text>
						<Text>></Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						marginTop: 0,
						backgroundColor: "white",
						padding: 12.5,
						borderColor: "grey",
						borderTopWidth: 1,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginLeft: 5,
							height: 25,
							witdh: 25,
							borderRadius: 7.5,
							backgroundColor: "blue",
						}}
					>
						<Ionicons
							name="bluetooth-outline"
							color="white"
							size={20}
							style={{ marginLeft: 2 }}
						/>
					</View>
					<Text style={{ marginLeft: 25, fontWeight: "bold" }}>Bluetooth</Text>
					<View style={styles.rightSideItem}>
						<Text>Not Connected</Text>
						<Text>></Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						marginTop: 0,
						backgroundColor: "white",
						padding: 12.5,
						borderColor: "grey",
						borderTopWidth: 1,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginLeft: 5,
							height: 25,
							witdh: 25,
							borderRadius: 7.5,
							backgroundColor: "green",
						}}
					>
						<Ionicons
							name="radio-outline"
							color="white"
							size={20}
							style={{ marginLeft: 2 }}
						/>
					</View>
					<Text style={{ marginLeft: 25, fontWeight: "bold" }}>Cellular</Text>
					<View style={styles.rightSideItem}>
						<Text>></Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						marginTop: 0,
						backgroundColor: "white",
						padding: 12.5,
						borderColor: "grey",
						borderTopWidth: 1,
						borderBottomRightRadius: 10,
						borderBottomLeftRadius: 10,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginLeft: 5,
							height: 25,
							witdh: 25,
							borderRadius: 7.5,
							backgroundColor: "blue",
						}}
					>
						<Text style={{ color: "white" }}>VPN</Text>
					</View>
					<Text style={{ marginLeft: 25, fontWeight: "bold" }}>VPN</Text>
					<View style={{ marginLeft: "auto" }}>
						<Switch></Switch>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: ConstantSourceNode.statusBarHeight + 58,
		backgroundColor: "#F0F0F0",
	},
	largeText: {
		fontWeight: "bold",
		fontSize: 36,
	},
	textInput: {
		backgroundColor: "lightgray",
		marginTop: 10,
		padding: 5,
		borderRadius: 10,
	},
	rectangle: {
		flexDirection: "row",
		backgroundColor: "white",
		padding: 20,
		marginTop: 15,
		borderRadius: 10,
	},
	circle: {
		backgroundColor: "lightgray",
		height: 100,
		width: 100,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	rightSideItem: {
		marginLeft: "auto",
		flexDirection: "row",
	},
	setting: {
		flexDirection: "row",
		marginLeft: 5,
		height: 25,
		witdh: 25,
		borderRadius: 7.5,
	},
});
