import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import BloodDonateScreen from "../Screens/BloodDonateScreen";
import BloodRequestScreen from "../Screens/BloodRequestScreen";
import { AppStackNavigator } from "./AppStackNavigator";

export const AppTabNavigator=createBottomTabNavigator({
    DonateBlood:{
        screen:AppStackNavigator,
        navigationOptions:{
            tabBarLabel:"Donate Blood Here"
        }
    },
    RequestBlood:{
        screen:BloodRequestScreen,
        navigationOptions:{
            tabBarLabel:"Requsest Blood Here"
        }
    }
})