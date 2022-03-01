/* TODO:
 * see if icons can be drawn from one library instead of 4
 * refactor icons and their sizes/colors
 * start styling pages
 */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

// create navigator object
const Tab = createBottomTabNavigator();

// boolean variable to determine if user us logged in or not
// if yes : display the Activity | Friends | Profile screens
// if no : display the Login | Sign Up screens
let isLoggedIn = true;

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator tabBarOptions={{ showIcon: true, showLabel: false }}>
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
							component={SignupScreen}
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
