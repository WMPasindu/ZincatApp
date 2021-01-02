import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const HalfWidthButton = (props) => {
    return (
        <View style={props.firstButton ? styles.container : styles.secoundContainer}>
            <Image source={props.imageUri}
                resizeMode={'contain'} style={{ height: '50%' }}
            />
            <Text style={styles.containerText}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '50%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF2B3',
        marginRight: 5
    },
    secoundContainer: {
        height: '100%',
        width: '47%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DEEFFF',
        marginLeft: 5,
    },
    containerImage: {},
    containerText: {
        color: '#000000',
        fontSize: 12,
        textAlign: 'center',
    }
});

export default HalfWidthButton;