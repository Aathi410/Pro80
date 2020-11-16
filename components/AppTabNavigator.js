import * as React from "react";
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';


export const AppTabNavigator = createBottomTabNavigator({
    Exchange :{
        screen:HomeScreen,
        navigationOptions:{
            tabBarLabel:'Exchange Item'
        }
    },
    AddItem:{
        screen:ExchangeScreen,
        navigationOptions:{
            tabBarLabel:'Add Item'
        }
    },    
})