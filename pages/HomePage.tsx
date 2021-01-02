import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Alert
} from 'react-native';
// importing database
import Database from '../database/database';

import BackGroundCurve from '../components/BackGroundCurve'
import FullWidthButton from '../components/FullWidthButton'
import HalfWidthButton from '../components/HalfWidthButton'
import TopHeader from '../components/TopHeader'
import PopupModal from '../components/PopupModal'

const HomePage = (props) => {

  const db = new Database();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dateText, setDatetext] = useState('');
  const [locationText, setLocationText] = useState('');
  const [currentHuboReadingText, setCurrentHuboReadingText] = useState('');

  let data;
  let location;
  let hubo;

  const onDateTimeChanged = (changedText) => {
    console.log('This is the datetime changed text: ', changedText);
    setDatetext(changedText);
  }
  const onLocationChanged = (changedText) => {
    setLocationText(changedText);
  }
  const onInputChanged = (changedText) => {
    setCurrentHuboReadingText(changedText);
  }

  const [isDataAvailable, setData] = useState({
    setDate: '',
    setLocation: '',
    setCHRValue: 0,
    isDataSet: false
  });

  const saveData = async () => {
    let data = {
      date: dateText,
      location: locationText,
      hubo: currentHuboReadingText
    }

    setData({
      setDate: dateText,
      setLocation: locationText,
      setCHRValue: currentHuboReadingText,
      isDataSet: true
    })

    db.addNewJobs(data).then((result) => {
      Alert("Data Saved Sucessfully!!");
    }).catch((err) => {
      Alert("Data Not Saved!!");
    }).then(setIsModalVisible(false))
  }

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <BackGroundCurve style={styles.svg} />
        <View style={styles.headerTitleContainer}>
          <Image source={require('../asserts/openbook.png')}
            resizeMode={'contain'} style={{ height: '50%' }}
          />
          <Text style={styles.headertitle}>DriveTime</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>

        <View style={styles.topConteiner}>
          <TopHeader />
        </View>

        <View style={styles.mainButtonContainer}>
          {isDataAvailable.isDataSet ?
            <View style={styles.containerDetails}>
              <Text>Date = {isDataAvailable.setDate}</Text>
              <Text>Location = {isDataAvailable.setLocation}</Text>
              <Text>Hubometer ={isDataAvailable.setCHRValue}</Text>
            </View> :
            <FullWidthButton onClicked={() => setIsModalVisible(true)}
              name="START DRIVING"
              firstButton={true} 
              imageUri={require('../asserts/button.png')}/>}
        </View>

        <View style={styles.midleButtonContainer}>
          <HalfWidthButton
            name="START OTHER WORK"
            firstButton={true}
            imageUri={require('../asserts/briefcase.png')} />
          <HalfWidthButton
            name="START REST"
            firstButton={false}
            imageUri={require('../asserts/coffee.png')} />
        </View>

        <View style={styles.mainButtonContainer}>
          <FullWidthButton
            name="END OF DAY"
            firstButton={false}
            imageUri={require('../asserts/clock.png')} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textNormal}>Driver's Lastest Remarks:</Text>
          <Text style={styles.textBold}>Get access code is 8237452.ask for Mike</Text>
        </View>

      </View>

      {isModalVisible ? <PopupModal
        visible={isModalVisible}
        onClose={() => { setIsModalVisible(false) }}
        onSave={() => saveData()}
        onDateTimeChanged={(val) => onDateTimeChanged(val)}
        onLocationChanged={(val) => onLocationChanged(val)}
        onCHRChanged={(val) => onInputChanged(val)} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  svg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerContainer: {
    flex: 0.25,
    flexDirection: 'row',
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '15%'
  },
  headertitle: {
    color: '#000000',
    fontSize: 22,
    marginLeft: '2%',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10
  },
  topConteiner: {
    flex: 0.1,
    padding: '1%',
    top: '3%'
  },
  mainButtonContainer: {
    flex: 0.3,
    padding: '1%',
  },
  midleButtonContainer: {
    flex: 0.3,
    flexDirection: 'row',
    padding: '1%',
  },
  bottomNavigationBar: {
    flex: 0.2,
    padding: '1%',
  },
  textContainer: {
    flex: 0.1,
    padding: '1%',
  },
  textBold: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textNormal: {
    color: '#000000',
    fontSize: 12,
  },
  containerDetails: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#DEFEE5',
    padding: 10
  },
});

export default HomePage;