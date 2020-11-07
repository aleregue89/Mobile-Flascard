import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'react-native-unimodules';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import {Platform} from 'react-native'

// importing components and navigations
import MainAppNavigator from './navigation/MainAppNavigator'

// importing actions and reducers
import reducer from './reducers' 
import { addCard } from './actions';

// importing colors
import {purple, white, green, gray, lightPurp, black} from './utils/colors'

// importing tab and stack
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//importing notifications from helpers
import {setLocalNotification} from './utils/helpers'

// creating an status bar for the app
function AppStatusBar({ backgroundColor, ...props }) {
  return ( 
      <View style = {{ backgroundColor, height: Constants.statusBarHeight }}>
          <StatusBar translucent backgroundColor = { backgroundColor } {...props }/> 
      </View >
  )
}

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(logger, thunk))}>
        <View style={styles.container}>
          <AppStatusBar backgroundColor = { white } barStyle = 'light-content' />
          <MainAppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
