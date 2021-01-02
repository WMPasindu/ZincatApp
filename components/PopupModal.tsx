import React from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity, TextInput } from 'react-native'

type props = {
    visible?: boolean;
    onClose?: () => void;
    onSave?: () => void;
}

const PopupModal = props => {
    return (
        <View>
            <Modal
                visible={props.visible}
                transparent={true} >
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Text style={styles.textTitle}>Start Driving</Text>
                        <View style={styles.textContainer}>
                            <Text style={styles.textMessage}>Time and Date</Text>
                            <TextInput style={styles.textInput} onChangeText={(changedText) => props.onDateTimeChanged(changedText)}></TextInput>
                            <Text style={styles.textMessage}>Location</Text>
                            <TextInput style={styles.textInput} onChangeText={(changedText) => props.onLocationChanged(changedText)}></TextInput>
                            <Text style={styles.textMessage}>Current Hubo Reading</Text>
                            <TextInput style={styles.textInput} keyboardType="numeric" onChangeText={(changedText) => props.onCHRChanged(changedText)}></TextInput>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.confirmBttonContainer} onPress={props.onSave}>
                                <Text style={styles.confirmButtontext}>CONFIRM AND LOG</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.CancelButtonContainer} onPress={props.onClose}>
                                <Text style={styles.cancelButtonText}>CANCEL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '68%',
        width: '80%',
        position: 'absolute',
        borderRadius: 20,
        padding: 10
    },
    wrapper: {
        backgroundColor: "#000000aa",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flexDirection: 'column',
        marginTop: '2%',
    },
    textTitle: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 15,
    },
    textMessage: {
        fontSize: 12,
        marginTop: 20,
        color: '#939393'
    },
    textInput: {
        height: 40,
        fontSize: 12,
        borderBottomColor: '#FEFAF8',
        borderBottomWidth: 2
    },
    buttonContainer: {
        flexDirection: 'column',
        marginTop: '10%',
    },
    confirmBttonContainer: {
        height: 50,
        backgroundColor: "#fc9208",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: '5%',
        marginRight: '5%'
    },
    CancelButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmButtontext: {
        color: "#ffffff",
        fontSize: 20,
        padding: '2%'
    },
    cancelButtonText: {
        color: "#fc9208",
        fontSize: 20,
        padding: '2%'
    }
});

export default PopupModal;