import api from '../api';
const axios = require('axios').default;

import connorSongData from '../assets/blah.json';
import connorUserData from '../assets/connor_data.json';

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

const DATA = connorSongData.items.map((track) => {
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

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaView style={styles.safeArea}>
				<ScrollView contentContainerStyle={{ alignItems: 'center' }}>
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
			// <View style={[styles.container, { flexDirection: 'column', flex: 1 }]}>
				<ScrollView contentContainerStyle={styles.container}>
				<View style={{ marginTop: 30, marginBottom: 30 }}>
					<Image style={styles.picture} source={{uri: user.avatar}} />
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
				{/* <View style={{ marginTop: 20, flex: 1 }}> */}
					{/* <FlatList
						data = {connorSongData.items}
						renderItem = {(track) => {
							track = track.item
							console.log(track.track.album.images[0].url)
							return (<Image style={styles.picture} source={track.track.album.images[0].url} key={track.track.album.id} />)
						}
					}
					/> */}
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
									<Image
										style={styles.album_picture}
										source={{ uri: item.albumImage }}
										key={item.id}
									/>
								</TouchableHighlight>
								<View style={{ alignItems: 'flex-start', width: '80%' }}>
									<Text
										numberOfLines={1}
										style={{ fontFamily: 'Montserrat_400Regular', fontSize: 16 }}
									>
										{item.trackName}
									</Text>
									<Text numberOfLines={1} style={{ fontFamily: 'Montserrat_300Light', fontSize: 14 }}>
										{item.artistName}
									</Text>
								</View>
							</View>
						)}
					/>
				</ScrollView>
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
