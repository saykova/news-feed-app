import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { createBottomTabNavigator, createStackNavigator,  createAppContainer } from "react-navigation";
import SettingsScreen from './src/screens/SettingsScreen';
import NewsScreen from './src/screens/NewsScreen';
import CategoryNewsScreen from './src/screens/CategoryNewsScreen';
import NewsDetailsScreen from './src/screens/NewsDetailsScreen';
import { Provider } from 'mobx-react';
import NewsStore from './src/storage/NewsStore';

const NewsStack = createStackNavigator(
  {
    News: { screen: NewsScreen },
    Category: { screen: CategoryNewsScreen},
    Details: { screen: NewsDetailsScreen }
  },
  {
    navigationOptions: {
      tabBarLabel: 'News',
      tabBarIcon: ({tintColor, activeTintColor}) => {
        return(
          <Icon type="EvilIcons" name="navicon" size={30} color={tintColor} />
        );
      },
      style: {
        borderLeftWidth: 1,
        backgroundColor: '#ccc'
      }
    }
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen }
  },
  {
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor, activeTintColor}) => {
        return(
          <Icon type="EvilIcons" name="gear" size={30} color={tintColor} />
        );
      },
      style: {
        borderLeftWidth: 1,
        backgroundColor: '#ccc'
      }
    }
  }
);

const AppNavigation = createBottomTabNavigator(
  {
    News: { screen: NewsStack },
    Settings: { screen: SettingsStack }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 15
      },
      style: {
        height: 55,
        marginBottom: 10,
        paddingTop: 10,
      },
      activeTintColor: '#8a2be2',
      showIcon: true,
    }
  }
);

const AppTabNavigator = createAppContainer(AppNavigation);

export default function App() {
  return (
    <Provider store={NewsStore}>
      <AppTabNavigator />
    </Provider>
  );
}
