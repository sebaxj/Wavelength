/* TODO:
 * see if icons can be drawn from one library instead of 4
 * refactor icons and their sizes/colors
 * start styling pages
 */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

import * as Linking from 'expo-linking';

// fonts
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

// icons
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// import screens
import ActivityScreen from './views/activity';
import FriendsScreen from './views/friends';
import ProfileScreen from './views/profile';
import SignupScreen from './views/signup';
import LoginScreen from './views/login';
import apis from './api';

// create navigator object
const Tab = createBottomTabNavigator();

// linking stuff
const prefix = Linking.makeUrl('/');

// boolean variable to determine if user us logged in or not
// if yes : display the Activity | Friends | Profile screens
// if no : display the Login | Sign Up screens
async function loginStatus() {
	const token = await SecureStore.getItemAsync('spotify_access_token');
	console.log('FOUND TOKEN', token);
	return token !== null;
}

async function logout() {
	const token = await SecureStore.deleteItemAsync('spotify_access_token');
}

//   console.log("TOKEN", token)

export default function App() {
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

	const [isLoggedIn, setLoginStatus] = useState(true);

	async function onLogin () {
		console.log("IN HERE CONNOR ALMOST THERE")
		let l = await loginStatus();
		setLoginStatus(l);
		// if (l) {
		// 	apis.updateUserData()
		// }
	}
	// useEffect(async () => {
	// 	// await logout()
	// 	let l = await loginStatus();
	// 	setLoginStatus(l);
	// });

	const linking = {
		prefixes: [prefix],
		config: {
			screens: {
				Activity: 'activity',
				Friends: 'friends',
				Login: 'login',
				Profile: 'profile',
				Signup: 'signup',
			},
		},
	};

	const [data, setData] = useState(null);

	function handleDeepLink(event) {
		let data = Linking.parse(event.url);
		setData(data);
	}

	useEffect(() => {
		async function getInitialUrl() {
			const initialUrl = await Linking.getInitialURL();
			if (initialUrl) setData(Linking.parse(initialUrl));
		}

		Linking.addEventListener('url', handleDeepLink);
		if (!data) {
			getInitialUrl();
		}
		return () => {
			Linking.removeEventListener('url');
		};
	}, []);

	console.log(data ? JSON.stringify(data) : 'APP NOT OPENED FROM DEEP LINK');

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<NavigationContainer linking={linking}>
				<Tab.Navigator
					screenOptions={{
						tabBarShowLabel: false,
						tabBarStyle: [
							{
								display: 'flex',
							},
							null,
						],
						headerTitleStyle: {
							fontFamily: 'Montserrat_500Medium',
						},
					}}
					initialRouteName={isLoggedIn ? 'Profile' : 'Signup'}
				>
					{isLoggedIn ? (
						<Tab.Group>
							<Tab.Screen
								name="Activity"
								component={ActivityScreen}
								options={{
									headerTitle: 'Activity Feed',
									tabBarLabel: 'Activity',
									tabBarIcon: (tabInfo) => (
										<Feather name="activity" size={32} color={tabInfo.tintColor} />
									),
								}}
							/>
							<Tab.Screen
								name="Friends"
								component={FriendsScreen}
								options={{
									headerTitle: 'Friends',
									tabBarLabel: 'Friends',
									tabBarIcon: (tabInfo) => (
										<FontAwesome5 name="user-friends" size={30} color={tabInfo.tintColor} />
									),
								}}
							/>
							<Tab.Screen
								name="Profile"
								component={ProfileScreen}
								options={{
									headerTitle: 'Profile',
									tabBarLabel: 'Profile',
									tabBarIcon: (tabInfo) => (
										<Ionicons name="settings" size={30} color={tabInfo.tintColor} />
									),
								}}
							/>
						</Tab.Group>
					) : (
						<Tab.Group>
							<Tab.Screen
								name="Login"
								component={LoginScreen}
								options={{
									headerTitle: 'Login',
									tabBarLabel: 'Login',
									tabBarIcon: (tabInfo) => (
										<Ionicons name="log-in-outline" size={40} color={tabInfo.tintColor} />
									),
								}}
							/>
							<Tab.Screen
								name="Signup"
								component={() => <SignupScreen onLogin={onLogin} />}
								options={{
									headerTitle: 'Sign Up',
									tabBarLabel: 'Sign Up',
									tabBarIcon: (tabInfo) => (
										<FontAwesome name="pencil-square-o" size={30} color={tabInfo.tintColor} />
									),
								}}
							/>
						</Tab.Group>
					)}
				</Tab.Navigator>
			</NavigationContainer>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
