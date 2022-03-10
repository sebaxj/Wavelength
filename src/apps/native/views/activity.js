import { StatusBar } from 'expo-status-bar';
import { ListItem, Avatar } from 'react-native-elements'
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

import connorSongData from '../assets/blah.json';
import { FontAwesome } from '@expo/vector-icons';

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

const ActivityScreen = () => {
    return (
        <View style={styles.container}>
			<FlatList
                style={{width: '100%'}}
				data={DATA}
				ListHeaderComponent={
					<>
						<View style={{ marginTop: 10, marginBottom: 20, textAlign: 'center' }}>
							<Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 18 }}>
								Now playing:
							</Text>
						</View>
						<View style={{ marginTop: 10, marginBottom: 20, textAlign: 'center' }}>
							{/* <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 18 }}>
								Live Listening Session
							</Text> */}
							<FontAwesome name='headphones' size={60}/>
						</View>
                        <View style={{ marginTop: 10, marginBottom: 20, flexDirection: 'row' }}>
                            <View style={{textAlign: 'center' }}>
							<Image style={styles.picture} source={{ uri: 'https://i.scdn.co/image/ab6775700000ee85c481e249f22585f0c118942b' }} />
                            <Text>Connor</Text>
                            </View>
                            <View style={{textAlign: 'center', marginLeft: 'auto' }}>
                            <Image style={styles.picture} source={{ uri: 'https://i.scdn.co/image/ab6775700000ee859b4a88ce129b7d455dbb3d1d' }} />
                            <Text>Corbin Schmeil</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, marginBottom: 20, textAlign: 'center' }}>
							<Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 18 }}>
								Song Queue
							</Text>
						</View>
					</>
				}
				renderItem={({ item, index, separators }) => (
                    <ListItem bottomDivider>
                        <Avatar source={{uri: item.albumImage}} size={50} />
                        <ListItem.Content >
                        <ListItem.Title style={{fontFamily: 'Montserrat_400Regular'}}>{item.trackName}</ListItem.Title>
                        <ListItem.Subtitle style={{fontFamily: 'Montserrat_400Regular'}}>{`${item.artistName}`}</ListItem.Subtitle>
                        </ListItem.Content>
                        <FontAwesome name='trash-o' size={20} />
                        {/* <ListItem.Chevron /> */}
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
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    picture: {
		resizeMode: 'cover',
		height: 100,
		width: 100,
		borderRadius: 100 / 2,
		marginRight: 20,
		marginLeft: 20
	},
});

export default ActivityScreen;
