import api from '../api';
import axios from 'axios';

// why doesn't this work?
// import 'dotenv/config';

import connorSongData from '../assets/blah.json';
import connorUserData from '../assets/connor_data.json';

// import connorSongData from '../assets/steven_song_data.json';
// import connorUserData from '../assets/steven_data.json';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	ScrollView,
	TouchableOpacity,
	TouchableHighlight,
} from 'react-native';
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
import { SafeAreaView } from 'react-native-safe-area-context';

// Stack Navigator
const Stack = createNativeStackNavigator();

// Spotify API stuff
const SpotifyAPI_URL = 'https://api.spotify.com/v1/tracks/';

const formatPlaylist = () => {
	let output = connorSongData.items.map((track) => {
		return (
			<View style={{ marginTop: 5, marginBottom: 5, flexDirection: 'row', width: '100%' }}>
				<Image
					style={styles.album_picture}
					source={{ uri: track.track.album.images[0].url }}
					key={track.track.album.id}
				/>
				<View style={{ alignItems: 'flex-start', width: '80%' }}>
					<Text numberOfLines={1} style={{ fontSize: 16 }}>
						{track.track.name}
					</Text>
					<Text numberOfLines={1}>{track.track.artists[0].name}</Text>
				</View>
			</View>
		);
		// console.log(track.track.album.images[0].url)
	});
	return output;
};

// SCREENS
const ConnorProfile = ({ navigation }) => {
	return <ConnorProfile />;
};
const CorbinProfile = ({ navigation }) => {
	return <CorbinProfile />;
};
const SebastianProfile = ({ navigation }) => {
	return <SebastianProfile />;
};
const StevenProfile = ({ navigation }) => {
	return <StevenProfile />;
};

const DATA = connorSongData.items.map((track) => {
	return {
		id: track.track.id,
		albumImage: track.track.album.images[0].url,
		trackName: track.track.name,
		artistName: track.track.artists[0].name,
		previewURL: '',
		//		previewURL: track.track.preview_url,
		isPlaying: false,
	};
});

const ProfileScreen = () => {
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

	const [user, setUser] = useState({});
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			setUser(connorUserData);
		}
		// api.getUserById('621e9e6c9429c44dc023cfae').then((output) => {
		//     const loadedUser = output.data.data;
		//     if (mounted) {
		//         setUser(loadedUser);
		//     }
		// });
		return () => (mounted = false);
	}, []);

	// audio player
	// TODO: FIX THIS
	// Need to change album opacity on play
	// Bug with changing "isPlaying"
	// handle error rejection with no valid link
	// fix onPress method to fetch from spotify each request incase the link has changed
	const [playbackObject, setPlaybackObject] = useState(null);

	// on first render, setup audio player as a state component
	useEffect(() => {
		if (playbackObject === null) {
			setPlaybackObject(new Audio.Sound());
		}
	}, []);

	// TODO
	// Fix: bug when you click a song, then another, then go back to the fist song
	// it doesn't play
	const playSound = async (item) => {
		// first, check status of audio player
		let status = await playbackObject.getStatusAsync();

		// second, check if that song is already playing
		if (item.isPlaying && status.isLoaded === true) {
			console.log('Item already playing, pausing...');
			console.log('Unloading...');
			playbackObject.unloadAsync();
			item.isPlaying = false;
		} else if (!item.isPlaying && status.isLoaded === true) {
			console.log('Another song is playing, reloading player...');
			playbackObject.unloadAsync();

			await playbackObject.loadAsync({ uri: item.previewURL });
			await playbackObject.playAsync();
			item.isPlaying = true;
		} else if (!item.isPlaying && status.isLoaded === false) {
			console.log('Player is empty, loading...');

			await playbackObject.loadAsync({ uri: item.previewURL });
			await playbackObject.playAsync();
			item.isPlaying = true;
		}
	};

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<FlatList
					data={DATA}
					ListHeaderComponent={
						<View style={[styles.container, { marginTop: 20 }]}>
							<View style={{ marginTop: 0, marginBottom: 0 }}>
								<Image style={styles.picture} source={{ uri: user.avatar }} />
							</View>
							<View style={{ marginTop: 20, marginBottom: 0 }}>
								<Text style={styles.name}>{user.user_name}</Text>
							</View>
							<View style={{ marginTop: 4, marginBottom: 10 }}>
								<Text style={{ fontFamily: 'Montserrat_500Medium' }}>{user.location}</Text>
							</View>
							<View style={{ marginTop: 10, marginBottom: 10 }}>
								<Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 18 }}>Liked Songs</Text>
							</View>
						</View>
					}
					renderItem={({ item, index, separators }) => (
						<View style={{ marginTop: 5, marginBottom: 5, flexDirection: 'row', width: '100%' }}>
							<TouchableHighlight
								onPress={() => {
									// TODO
									// Fix: If item is already playing, dont query, just
									// send item to playSound() to be paused
									//								if (item.isPlaying) {
									//									playSound(item);
									//								} else {
									axios({
										method: 'get',
										url: SpotifyAPI_URL + item.id,
										headers: {
											Authorization:
												'Bearer ' +
												'BQDQkFRXVX7Iobbk9bp7aoaulIO_N3Nzo95eCKRx2A20zGiwASajvUZ-bKk4TL-Z1EJqK-y24LEgse5w-NBob2eGgnHDnOmdFRG-a3oX2f448hn_sKV8moRUGPqvhswsdD2Orges5ssUJ9bE4hcu7sJOU6jlavcbzqh0yGaULRO7hAEJQ_QgWg',
										},
									})
										.then((response) => {
											if (response.data.preview_url !== null) {
												item.previewURL = response.data.preview_url;
												playSound(item);
											} else {
												console.log('No Preview URL available');
											}
										})
										.catch((error) => {
											console.log(error);
										});
									//									}
								}}
								underlayColor="white"
								activeOpacity={0.2}
							>
								<Image style={styles.album_picture} source={{ uri: item.albumImage }} key={item.id} />
							</TouchableHighlight>
							<View style={{ alignItems: 'flex-start', width: '80%' }}>
								<Text numberOfLines={1} style={{ fontFamily: 'Montserrat_400Regular', fontSize: 16 }}>
									{item.trackName}
								</Text>
								<Text numberOfLines={1} style={{ fontFamily: 'Montserrat_300Light', fontSize: 14 }}>
									{item.artistName}
								</Text>
							</View>
						</View>
					)}
				/>
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
	name: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 28,
		fontWeight: 'bold',
	},
	picture: {
		resizeMode: 'contain',
		height: 200,
		width: 200,
		borderRadius: 200 / 2,
	},
	album_picture: {
		resizeMode: 'contain',
		height: 50,
		width: 50,
		marginRight: 10,
		marginLeft: 10,
	},
});

export default ProfileScreen;
