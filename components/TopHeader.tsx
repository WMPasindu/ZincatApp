import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Rating } from 'react-native-ratings';

const TopHeader = () => {
    return (
        <View style={{ flex: 0.1, justifyContent: 'center', alignSelf: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 1, alignSelf: 'center', flexDirection: 'column', justifyContent: 'center' }} >
                <Picker style={styles.picker}
                    itemStyle={{ fontSize: 10 }} >
                    <Picker.Item label="Select Vehicle" value="" />
                </Picker>
                <Text style={styles.textBold}>114,000km</Text>
                <Text style={styles.textItem}>Hubometer</Text>
            </View>
            <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', flexDirection: 'column', borderLeftWidth: 1, borderRightWidth: 1 }} >
                <Text style={styles.textIdle}>Idle</Text>
                <Text style={styles.textItem}>Current Status</Text>
                <Rating
                    imageSize={10}
                />
            </View>
            <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', flexDirection: 'column' }} >
                <Text style={styles.texttime}>3h</Text>
                <Text style={styles.textItem}>Next Break due</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DEFEE5',
    },
    containerImage: {},
    containerText: {
        color: '#000000',
        fontSize: 20,
        textAlign: 'center',
    },
    textIdle: {
        color: '#000000',
        fontSize: 30,
        textAlign: 'center',
    },
    texttime: {
        color: '#000000',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textBold: {
        color: '#000000',
        fontSize: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    textItem: {
        color: '#000000',
        fontSize: 10,
        alignSelf: 'center',
    },
    picker: {
        width: "80%",
        height: 20,
        fontSize: 10,
        alignSelf: 'center',
    },
    pickerItem: {
        height: 10
    },
});

export default TopHeader;