import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const BackgroundCurve = ({ style }) => {
  return (
    <View style={style}>
      <View style={styles.viewAbove} />
      <Svg height="200%" width="100%" style={styles.svg} viewBox="0 0 1440 320">
        <Path
          fill="#F85A2E"
          d="M0,128L48,117.3C96,107,192,85,288,74.7C384,64,480,64,576,80C672,96,768,128,864,144C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  viewAbove: {
    backgroundColor: '#F85A2E',
    height: 60,
  },
  svg: {
    position: 'absolute',
    top: 40,
  },
});

export default BackgroundCurve;