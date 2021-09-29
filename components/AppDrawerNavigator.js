import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import BloodDonateScreen from '../Screens/BloodDonateScreen';
import BloodRequestScreen from '../Screens/BloodRequestScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import MyDonationScreen from '../Screens/MyDonationScreen';
import MyReceivedDonarScreen from '../Screens/MyReceivedDonarScreen';

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    MyDonation:{
        screen:MyDonationScreen,
        navigationOptions:{
            drawerLabel:"My Donations"
        }
    },
    MyReceivedDonarList:{
        screen:MyReceivedDonarScreen,
        navigationOptions:{
            drawerLabel:"My Received Donar List"
        }
    },
    Notifications:{
        screen:NotificationScreen,
        navigationOptions:{
            drawerLabel:"Notifications"
        }
    },
    Setting:{
        screen:SettingsScreen,
        navigationOptions:{
            drawerLabel:"Setting"
        }
    }
},
{contentComponent:CustomSideBarMenu},
{initialRouteName:'Home'}
)
