import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon:<Icon name = "home" type = "fontawesome5"></Icon>
    }
    },
  MyDonations : {
    screen : MyDonationScreen,
    navigationOptions:{
      drawerIcon:<Icon name = "gift" type = "font-awesome"></Icon>,
      drawerLabel:"my donations"
    }
  },
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon:<Icon name = "bell" type = "font-awesome"></Icon>,
      drawerLabel:"notifications"
    }
  },
  MyRecievedBooks : {
    screen : MyRecievedBooksScreen,
    navigationOptions:{
      drawerIcon:<Icon name = "gift" type = "font-awesome"></Icon>,
      drawerLabel:"my recieved books"
    }
  },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon:<Icon name = "settings" type = "fontawesome5"></Icon>,
      drawerLabel:"settings"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
