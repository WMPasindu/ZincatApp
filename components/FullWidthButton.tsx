import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const FullWidthButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onClicked}>
            <View style={props.firstButton ? styles.container : styles.secoundContainer}>
                <Image source={props.imageUri}
                    resizeMode={'contain'} style={{ height: '50%' }}
                />
                <Text style={styles.containerText}>{props.name}</Text>
            </View>
        </TouchableOpacity>
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
    secoundContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFE7E9',
    },
    containerImage: {},
    containerText: {
        color: '#000000',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default FullWidthButton;