import api from '../api';
const axios = require('axios').default;

import connorData from '../assets/blah.json';

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
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

// Spotify API stuff
const apiURL = 'https://api.spotify.com/v1/tracks/';

const formatPlaylist = () => {
	// let output = connorData.items
	let output = connorData.items.map((track) => {
		return (
			<View style={{ marginTop: 5, marginBottom: 5, flexDirection: 'row', width: '100%' }}>
				<Image
					style={styles.album_picture}
					source={track.track.album.images[0].url}
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

const DATA = connorData.items.map((track) => {
	return {
		id: track.track.id,
		albumImage: track.track.album.images[0].url,
		trackName: track.track.name,
		artistName: track.track.artists[0].name,
	};
});

console.log(DATA);

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
		api.getUserById('621e9e6c9429c44dc023cfae').then((output) => {
			const loadedUser = output.data.data;
			if (mounted) {
				setUser(loadedUser);
			}
		});
		return () => (mounted = false);
	}, []);

	// api.getUserById('621e9e6c9429c44dc023cfae').then( output => {
	// 	const loadedUser = output.data.data
	// 	setUser(loadedUser)
	// }).catch (err => console.log(err))

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaView style={styles.safeArea}>
				{/*
				<View style={[styles.container, { flexDirection: 'column', flex: 1 }]}>
					<ScrollView contentContainerStyle={styles.container}>
						<View style={{ marginTop: 30, marginBottom: 30 }}>
							<Image style={styles.picture} source={user.avatar} />
						</View>
						<View style={{ marginTop: 20, marginBottom: 20 }}>
							<Text style={styles.name}>{user.user_name}</Text>
						</View>
						<View style={{ marginTop: 20, marginBottom: 30 }}>
							<Text>{user.location}</Text>
						</View>
						<View style={{ marginTop: 20, marginBottom: 30 }}>
							<Text>Liked Songs</Text>
						</View>
						{formatPlaylist()}
						<StatusBar style="auto" />
					</ScrollView>
				</View>
				*/}
				<FlatList
					data={DATA}
					renderItem={({ item, index, separators }) => (
						<View style={{ marginTop: 5, marginBottom: 5, flexDirection: 'row', width: '100%' }}>
							<TouchableHighlight
								onPress={() => {
									axios({
										method: 'get',
										url: `https://api.spotify.com/v1/tracks/${item.id}`,
										headers: {
											Authorization:
												'Bearer BQACdWln8Z-MzFt9Ta7cRBixOeTsfiSU7QJPtQCJ5gKmuvvfZMZ1t1KFF7TQOI6STSJ0cXW6Dzm7MHc2nTqyngwH8i-WV15MsA9ly-2GNtIPFS1isk21qInlBTsDI_9oQjq1ogf4Zcb_nXZdy0VeZiBxq_R1aV5lfFUTAgRcl7VPsPq3ftSJuHfprkxOMLoCjSLDZMSNwZZQGg5y',
										},
									})
										.then(function (response) {
											// handle success
											console.log(response.preview_url);
										})
										.catch(function (error) {
											// handle error
											console.log(error);
										});
								}}
								underlayColor="white"
								activeOpacity={0.2}
							>
								<Image style={styles.album_picture} source={{ uri: item.albumImage }} key={item.id} />
							</TouchableHighlight>
							<View style={{ alignItems: 'flex-start', width: '80%' }}>
								<Text numberOfLines={1} style={{ fontFamily: 'Montserrat_300Light', fontSize: 16 }}>
									{item.trackName}
								</Text>
								<Text numberOfLines={1} style={{ fontFamily: 'Montserrat_100Thin', fontSize: 14 }}>
									{item.artistName}
								</Text>
							</View>
						</View>
					)}
				/>
			</SafeAreaView>
		);
	}
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
		backgroundColor: '#fff',
		alignItems: 'center', // aligns items in the x direction
		justifyContent: 'flex-start', // aligns items in the y direction
	},
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
		height: 250,
		width: 250,
		borderRadius: 250 / 2,
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
