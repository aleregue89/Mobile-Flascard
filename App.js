import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import Quiz from './components/Quiz';
import Test from './components/Test';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers' 
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import {Platform} from 'react-native'
import {purple, white} from './utils/colors'

const store = createStore(reducer, applyMiddleware(thunk, logger))

// not using this code
/*
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
*/

const DeckListStack = createStackNavigator()

function DeckListStackScreen() {
  return(
    <DeckListStack.Navigator>
      <DeckListStack.Screen name='Decks' component={DeckList} />
    </DeckListStack.Navigator>
  )
  
}

const AddCardStack = createStackNavigator  ()

function AddCardStackScreen() {
  return(
    <AddCardStack.Navigator>
      <AddCardStack.Screen name='Add Card' component={AddCard} />
    </AddCardStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions= {({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName

              if(route.name === 'DeckList') {
                iconName= focused
                  ? 'ios-bookmarks'
                  : 'md-bookmarks'
              } else if (route.name === AddCard) {
                iconName= focused ? 'add' : 'add-circle'
              }
              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
          tabBarOptions= {{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
          }}
        >
          <Tab.Screen name="DeckList" component={DeckListStackScreen} />
          <Tab.Screen name="AddCard" component={AddCardStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



/* 
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <DeckList />
      </View>
    </Provider>
    
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
