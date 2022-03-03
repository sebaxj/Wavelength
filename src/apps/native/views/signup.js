import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Montserrat_100Thin,
	Montserrat_200ExtraLight,
	Montserrat_300Light,
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
	Montserrat_800ExtraBold,
	Montserrat_900Black,
	Montserrat_100Thin_Italic,
	Montserrat_200ExtraLight_Italic,
	Montserrat_300Light_Italic,
	Montserrat_400Regular_Italic,
	Montserrat_500Medium_Italic,
	Montserrat_600SemiBold_Italic,
	Montserrat_700Bold_Italic,
	Montserrat_800ExtraBold_Italic,
	Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

const SignupScreen = () => {
	let [fontsLoaded] = useFonts({
		Montserrat_100Thin,
		Montserrat_200ExtraLight,
		Montserrat_300Light,
		Montserrat_400Regular,
		Montserrat_500Medium,
		Montserrat_600SemiBold,
		Montserrat_700Bold,
		Montserrat_800ExtraBold,
		Montserrat_900Black,
		Montserrat_100Thin_Italic,
		Montserrat_200ExtraLight_Italic,
		Montserrat_300Light_Italic,
		Montserrat_400Regular_Italic,
		Montserrat_500Medium_Italic,
		Montserrat_600SemiBold_Italic,
		Montserrat_700Bold_Italic,
		Montserrat_800ExtraBold_Italic,
		Montserrat_900Black_Italic,
	});

	// state to keep track of email and password fields
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={[styles.container, { flexDirection: 'column' }]}>
				<View style={{ marginTop: 100, marginBottom: 30 }}>
					<Image style={styles.picture} source={require('../assets/soundwave.png')} />
				</View>
				<View style={styles.inputView}>
					<TextInput style={styles.textInput} placeholder="Name" onChangeText={(email) => setEmail(email)} />
				</View>
				<View style={styles.inputView}>
					<TextInput style={styles.textInput} placeholder="Email" onChangeText={(email) => setEmail(email)} />
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.textInput}
						placeholder="Password"
						secureTextEntry={true}
						onChangeText={(password) => setPassword(password)}
					/>
				</View>
				<TouchableOpacity style={[styles.signupButton, { marginTop: 20 }]}>
					<Text style={styles.signupText}>Sign Up!</Text>
				</TouchableOpacity>
				<Text style={styles.spotifyButton}>OR</Text>
				<TouchableOpacity style={styles.signupButton}>
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
						<FontAwesome5 name="spotify" size={30} color="black" />
						<Text style={[styles.signupText, { padding: 5 }]}>Login with Spotify</Text>
					</View>
				</TouchableOpacity>

				<StatusBar style="auto" />
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center', // aligns items in the x direction
		justifyContent: 'flex-start', // aligns items in the y direction
	},
	picture: {
		resizeMode: 'contain',
		height: 100,
	},
	inputView: {
		backgroundColor: '#FF84849c',
		borderRadius: 30,
		width: '70%',
		height: 45,
		marginBottom: 20,
	},
	textInput: {
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
		fontFamily: 'Montserrat_600SemiBold',
	},
	spotifyButton: {
		height: 30,
		fontFamily: 'Montserrat_800ExtraBold',
	},
	signupButton: {
		borderRadius: 30,
		width: '70%',
		height: 45,
		marginBottom: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#a1cddbff',
	},
	signupText: {
		fontFamily: 'Montserrat_800ExtraBold',
		fontSize: 20,
	},
});

export default SignupScreen;
