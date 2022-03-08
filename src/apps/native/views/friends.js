import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	ScrollView,
	// TouchableOpacity,
	// TouchableHighlight,
} from 'react-native';

import connorFriendData from '../assets/friend_data.json';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = connorFriendData.map((friend) => {
	// console.log(friend.currently_listening.track)
	return {
		id: friend.id,
		user_name: friend.user_name,
		avatar: friend.avatar,
		currently_listening: {
			albumImage: friend.currently_listening.track.album.images[0].url,
			trackName: friend.currently_listening.track.name,
			artistName: friend.currently_listening.track.artists[0].name,
		},
	};
});

const FriendsScreen = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={DATA}
				ListHeaderComponent={
					<>
						<View style={{ marginTop: 10, marginBottom: 20, textAlign: 'center' }}>
							<Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 18 }}>
								New Friend Drop 3/7/22 at 9PM PST
							</Text>
						</View>
					</>
				}
				renderItem={({ item, index, separators }) => (
					<>
						<View style={{ marginTop: 5, marginBottom: 5, flexDirection: 'row', width: '100%' }}>
							<Image style={styles.friend_list_avatar} source={{ uri: item.avatar }} key={item.id} />
							<View style={{ alignItems: 'flex-start', width: '80%' }}>
								<Text numberOfLines={1} style={{ fontFamily: 'Montserrat_400Regular', fontSize: 16 }}>
									{item.user_name}
								</Text>
								{/* <Text numberOfLines={1} style={{ fontFamily: 'Montserrat_300Light', fontSize: 14 }}>
                            {item.artistName}
                        </Text> */}
							</View>
						</View>
						<View style={{ marginTop: 5, marginBottom: 5, flexDirection: 'row', width: '100%' }}>
							<Image
								style={styles.album_picture}
								source={{ uri: item.currently_listening.albumImage }}
								key={item.id}
							/>
							<View style={{ alignItems: 'flex-start', width: '80%' }}>
								<Text numberOfLines={1} style={{ fontFamily: 'Montserrat_400Regular', fontSize: 16 }}>
									{item.currently_listening.trackName}
								</Text>
								<Text numberOfLines={1} style={{ fontFamily: 'Montserrat_400Regular' }}>
									{item.currently_listening.artistName}
								</Text>
							</View>
						</View>
					</>
				)}
			/>
		</View>
	);
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
	friend_list_avatar: {
		resizeMode: 'cover',
		height: 50,
		width: 50,
		borderRadius: 50 / 2,
		marginRight: 10,
		marginLeft: 10,
	},
});

export default FriendsScreen;
