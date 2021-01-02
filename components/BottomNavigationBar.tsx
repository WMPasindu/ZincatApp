import React from 'react';
import { View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomePage from "../pages/HomePage";
import PreviousData from '../pages/PreviousDrivingDataPage'

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomePage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Image source={require('../asserts/lorry.png')}
                            resizeMode={'contain'} style={{ height: '80%' }}
                        />
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: '#f65a22',
                barStyle: { backgroundColor: '#fff' },
            }
        },
        Profile: {
            screen: PreviousData,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Image source={require('../asserts/cursor.png')}
                            resizeMode={'contain'} style={{ height: '80%' }}
                        />
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: '#f65a22',
                barStyle: { backgroundColor: '#fff' },
            }
        },
        Image: {
            screen: PreviousData,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Image source={require('../asserts/bookmark.png')}
                            resizeMode={'contain'} style={{ height: '80%' }}
                        />
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: '#f65a22',
                barStyle: { backgroundColor: '#fff' },
            }
        },
        Cart: {
            screen: PreviousData,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Image source={require('../asserts/support.png')}
                            resizeMode={'contain'} style={{ height: '80%' }}
                        />
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: '#f65a22',
                barStyle: { backgroundColor: '#fff' },
            }
        },
    },
    {
        initialRouteName: "Home",
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#fff' },
    },
);

export default createAppContainer(TabNavigator);  