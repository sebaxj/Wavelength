import { StatusBar } from 'expo-status-bar';
import { ListItem, Avatar } from 'react-native-elements';
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

const LiveListeningScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                data={DATA}
                ListHeaderComponent={
                    <>
                        <View style={{ marginTop: 10, marginBottom: 20, textAlign: 'center' }}>
                            <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 18 }}>
                                Live Listening Session
                            </Text>
                        </View>
                        <View style={{ marginTop: 10, marginBottom: 20, flexDirection: 'row' }}>
                            <View style={{ textAlign: 'center' }}>
                                <Image
                                    style={styles.picture}
                                    source={{
                                        uri: 'https://cdn.rockhopper.app/images/6910539456031171-connor-avatar.png',
                                    }}
                                />
                                <Text>Connor</Text>
                            </View>
                            <View style={{ textAlign: 'center', marginLeft: 'auto' }}>
                                <Image
                                    style={styles.picture}
                                    source={{
                                        uri: 'https://cdn.rockhopper.app/images/6910539456031171-connor-avatar.png',
                                    }}
                                />
                                <Text>Connor</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, marginBottom: 20, textAlign: 'center' }}>
                            <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 18 }}>Song Queue</Text>
                        </View>
                    </>
                }
                renderItem={({ item, index, separators }) => (
                    <ListItem bottomDivider>
                        <Avatar source={{ uri: item.albumImage }} size={50} />
                        <ListItem.Content>
                            <ListItem.Title style={{ fontFamily: 'Montserrat_400Regular' }}>
                                {item.trackName}
                            </ListItem.Title>
                            <ListItem.Subtitle
                                style={{ fontFamily: 'Montserrat_400Regular' }}
                            >{`${item.artistName}`}</ListItem.Subtitle>
                        </ListItem.Content>
                        <FontAwesome name="trash-o" size={20} />
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
        resizeMode: 'contain',
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
    },
});

export default LiveListeningScreen;
