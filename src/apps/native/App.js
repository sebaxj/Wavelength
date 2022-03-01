/* TODO:
 * add icons to the touch bar tabs (look at icon libraries on NPM)
 * start styling pages
 */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
let isLoggedIn = false;

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				{isLoggedIn ? (
					<Tab.Group>
						<Tab.Screen
							name="Activity"
							component={ActivityScreen}
							options={{ headerTitle: 'Activity Feed', tabBarLabel: 'Activity' }}
						/>
						<Tab.Screen
							name="Friends"
							component={FriendsScreen}
							options={{ headerTitle: 'Friends', tabBarLabel: 'Friends' }}
						/>
						<Tab.Screen
							name="Profile"
							component={ProfileScreen}
							options={{ headerTitle: 'Profile', tabBarLabel: 'Profile' }}
						/>
					</Tab.Group>
				) : (
					<Tab.Group>
						<Tab.Screen
							name="Login"
							component={LoginScreen}
							options={{ headerTitle: 'Login', tabBarLabel: 'Profile' }}
						/>
						<Tab.Screen
							name="Signup"
							component={SignupScreen}
							options={{ headerTitle: 'Sign Up', tabBarLabel: 'Sign Up' }}
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
