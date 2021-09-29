import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './Screens/WelcomeScreen';
import BloodDonateScreen from './Screens/BloodDonateScreen';
import BloodRequestScreen from './Screens/BloodRequestScreen';
import MyDonationScreen from './Screens/MyDonationScreen';
import MyReceivedDonarScreen from './Screens/MyReceivedDonarScreen';
import NotificationScreen from './Screens/NotificationScreen';
import SettingsScreen from './Screens/SettingsScreen';
import Animation from './components/Animation';

export default function App() {
  return (
    <View>
    <WelcomeScreen/>
    <BloodDonateScreen/>
    <BloodRequestScreen/>
    <MyDonationScreen/>
    <MyReceivedDonarScreen/>
    <NotificationScreen/>
    <SettingsScreen/>
    </View>
  )
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{
    screen:AppTabNavigator
  }
}) 

