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

// importing components
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import Quiz from './components/Quiz';
import Test from './components/Test';
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


// adding a new way to dd the Tab Navigator and Stack Navigator
/*
const routeConfigs = {
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'} size={30} color={tintColor} />
      )
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name={'plus-square'} size={30} color={tintColor} />
      )
    }
  }
}

const tabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  defaultNavigationOptions: {
    bounces: true
  },
  tabBarOptions: {
    activeTintColor: green,
    style: {
      height: 60,
      backgroundColor: white,
      shadowColor: 'rgba(0,0,0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
      borderTopWidth: 1,
      borderTopColor: gray
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    tabStyle: {
      marginTop: 5,
      marginBottom: 3
    },
    showIcon: true
  }
}

const Tabs = createBottomTabNavigator(routeConfigs, tabNavigatorConfig)

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Tabs
    },
    DeckView: {
      screen: DeckView,
      navigationOptions: {
        headerTintColor: green,
        headerStyle: {
          backgroundColor: lightPurp,
        },
        title: 'Deck View'
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        headerTintColor: green,
        headerStyle: {
          backgroundColor: lightPurp,
        },
        headerTitleStyle: {
          textAlign: 'center',
          justifyContent: 'center',
        },
        title: 'Add Card'
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTintColor: green,
        headerStyle: {
          backgroundColor: lightPurp
        },
        title: 'Quiz'
      }
    }
  },
  { headerLayoutPreset: 'center'}
)
*/

//const Tab = createBottomTabNavigator();
/*
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
*/

/*
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
*/