import api from '../api';

import connorData from '../assets/blah.json';

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
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

const formatPlaylist = () => {
    // let output = connorData.items
    let output = connorData.items.map((track) => {
        return <Image style={styles.picture} source={track.track.album.images[0].url} key={track.track.album.id} />;
        // console.log(track.track.album.images[0].url)
    });
    // console.log(output)
    return output;
};

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

    // formatPlaylist()

    // api.getUserById('621e9e6c9429c44dc023cfae').then( output => {
    // 	const loadedUser = output.data.data
    // 	setUser(loadedUser)
    // }).catch (err => console.log(err))

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={[styles.container, { flexDirection: 'column', flex: 1 }]}>
                <View style={{ marginTop: 30, marginBottom: 30 }}>
                    <Image style={styles.picture} source={user.avatar} />
                </View>
                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    <Text style={styles.name}>{user.user_name}</Text>
                </View>
                <View style={{ marginTop: 20, marginBottom: 80 }}>
                    <Text>{user.location}</Text>
                </View>
                <View style={{ marginTop: 20, flex: 1 }}>
                    {/* <FlatList
						data = {connorData.items}
						renderItem = {(track) => {
							track = track.item
							console.log(track.track.album.images[0].url)
							return (<Image style={styles.picture} source={track.track.album.images[0].url} key={track.track.album.id} />)
						}
					}
					/> */}
                    <ScrollView>{formatPlaylist()}</ScrollView>
                </View>
                <StatusBar style="auto" />
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
        height: 250,
        width: 250,
        borderRadius: 250 / 2,
    },
});

export default ProfileScreen;
