import React, { useState } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import Database from '../database/database';
import FlatListRow from '../components/FlatListRow'

const PreviousDrivingDataPage = (props) => {
  const [arraData, setArrayData] = useState([]);
  const db = new Database();
  let lists;
  db.listProduct().then((data) =>{
    lists = data;
    setArrayData(lists);
  }).catch((err) => {
    console.log(err);
  });

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={arraData}
        renderItem={({ item }) => {
          return (
            <FlatListRow
              date={item.date_time}
              location={item.location}
              hubo={item.hubo_reading}
            />
          )
        }}
        keyExtractor={item => `${item.date_time}`}
      />
    </View>
  )
}

export default PreviousDrivingDataPage;