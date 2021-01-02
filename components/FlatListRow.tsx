import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const FlatListRow = props => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignSelf: 'center' }} >
                <Text style={styles.allText}>{props.date}</Text>
            </View>
            <View style={{ flex: 1, alignSelf: 'center' }} >
                <Text style={styles.allText} >{props.location}</Text>
            </View>
            <View style={{ flex: 1, alignSelf: 'center' }} >
                <Text style={styles.allText}>{props.hubo}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 60,
        margin: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DBDDDF',
    },
    allText: {
        fontSize: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        margin: '5%',
        textAlign: 'center'
    },
});

export default FlatListRow;