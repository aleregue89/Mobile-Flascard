import React, {Component} from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {Platform} from 'react-native'
import DeckList from '../components/DeckList'
import DeckPreview from '../components/DeckPreview'
import DeckView from '../components/DeckView'
import AddDeck from '../components/AddDeck'
import AddCard from '../components/AddCard'
import Quiz from '../components/Quiz'
import {blue, purple, white, gray} from '../utils/colors'

// applying for IOS
const deviceIOS = Platform.OS === 'ios' ? true : false

// creating the routes for the Tab Navigation
const routeConfigs = {
    Decks: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({tintColor}) => (
                <FontAwesome name={deviceIOS ? 'ios-bookmarks' : 'md-bookmarks'} size={30} color={tintColor} />
            ) 
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({tintColor}) => (
                <FontAwesome name='plus-square' size={30} color={tintColor} />
            )
        }
    }
}

// Tab Navigation config
const TabNavigator = {
    navigationOptions: {
        header: null
    },
    defaultNavigationOptions: {
        bounces: true
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? blue : purple,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? purple : blue,
            shadowColor: 'rgba(0,0,0,0.24)',
            shadowOffSet: {
                width: 0,
                height: 3,
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
}

// creating Tabs
const Tabs = createBottomTabNavigator(routeConfigs, TabNavigator)

// creating stack navigator - including tab navigator through Tabs
const Stack = createStackNavigator(
    {
        Home: {
            screen: Tabs,
        },
        DeckView: {
            screen: DeckView,
            navigationOptions: {
                headerTintColor: blue,
                headerStyle: {
                    backgroundColor: gray,
                },
                headerTitleStyle: {
                    justifyContent: 'center',
                    textAlign: 'center'
                },
                tittle: 'Deck View'
            }
        },
        AddCard: {
            screen: AddCard,
            navigationOptions: {
                headerTintColor: blue,
                headerStyle: {
                    backgroundColor: gray
                },
                headerTitleStyle: {
                    justifyContent: 'center',
                    textAlign: 'center'
                },
                title: 'Add Card'
            }
        },
        Quiz: {
            screen: Quiz,
            navigationOptions: {
                headerTintColor: blue,
                headerStyle: {
                    backgroundColor: gray
                },
                headerTitleStyle: {
                    justifyContent: 'center',
                    textAlign: 'center'
                },
                title: 'Quiz'
            }
        }
    }
)

export default Stack