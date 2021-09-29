import React from "react";
import {createStackNavigator} from 'react-navigation-stack';
import BloodDonateScreen from "../Screens/BloodDonateScreen";
import BloodRequestScreen from "../Screens/BloodRequestScreen";
import MyDonationScreen from "../Screens/MyDonationScreen";
import MyReceivedDonarScreen from "../Screens/MyReceivedDonarScreen";

export const AppStackNavigator=createStackNavigator({
    BloodDonateList:{
        screen:BloodDonateScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    BloodRequestList:{
        screen:MyReceivedDonarScreen,
        navigationOptions:{
            headerShown:false
        }
    }
},
{initialRouteName:'BloodDonateList'}
)