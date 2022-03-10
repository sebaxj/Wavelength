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

import { ListItem, Avatar } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';

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
                style={{width: '100%'}}
				data={DATA}
				ListHeaderComponent={
					<>
						<View style={{ marginTop: 20, marginBottom: 20, justifyContent: 'center' }}>
							<Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 18, alignSelf: 'center' }}>
								New Friend Drop 3/18/22 at 9PM PST
							</Text>
						</View>
					</>
				}
				renderItem={({ item, index, separators }) => (
                    <ListItem bottomDivider key={item.id}>
                        <Avatar source={{uri: item.avatar}} size={50} rounded/>
                        <ListItem.Content >
                        <ListItem.Title style={{fontFamily: 'Montserrat_400Regular'}}>{item.user_name}</ListItem.Title>
                        <ListItem.Subtitle style={{fontFamily: 'Montserrat_400Regular'}}>{`${item.currently_listening.trackName} • ${item.currently_listening.artistName}`}</ListItem.Subtitle>
                        </ListItem.Content>
                        {/* <ListItem.Chevron /> */}
						<FontAwesome name='headphones' size={20} />
                    </ListItem>
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
