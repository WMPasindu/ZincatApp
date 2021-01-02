import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from '../components/BottomNavigationBar'

const Navigator = createStackNavigator({
    Home: HomePage,
}, {
    defaultNavigationOptions: {
        headerShown: false,
    }
});

export default createAppContainer(Navigator);