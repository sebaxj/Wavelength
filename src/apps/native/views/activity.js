import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const ActivityScreen = () => {
    return (
        <View style={[styles.container, { flexDirection: 'column' }]}>
            <View style={{ flexDirection: 'row' }}>
                <Text>Activity</Text>
                <Text>Feed</Text>
            </View>
            <View style={[{ flexDirection: 'row' }]}>
                <Text>Activity</Text>
                <Text>Feed</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default ActivityScreen;
