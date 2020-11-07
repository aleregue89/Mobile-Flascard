import React, {Component} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'

//importing the components
import DeckList from '../components/DeckList'
import AddDeck from '../components/AddDeck'
import DeckView from '../components/DeckView'
import Quiz from '../components/Quiz'
import AddCard from '../components/AddCard'
import Settings from '../components/Settings'

//creating a Tab navigator
const Tab = createBottomTabNavigator()

function AppNavigator() {
    return (
        
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName

                        if(route.name === 'Home') {
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home'
                        } else if(route.name === 'Add Deck') {
                            iconName = focused
                                ? 'ios-add'
                                : 'ios-add'
                        } else if(route.name === 'Settings') {
                            iconName = focused
                                ? 'ios-settings'
                                : 'ios-settings'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}
                tabBarOptions={{
                    activeTintColor : '#101010',
                    inactiveTintColor : 'gray'
                }}
            >
                <Tab.Screen name='Home' component={DeckList} />
                <Tab.Screen name='Add Deck' component={AddDeck} />
                <Tab.Screen name='Settings' component={Settings} />
            </Tab.Navigator>
        
    )
}

// setting parent screen options based on child navigator's state
function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'

    switch(routeName) {
        case 'Home':
            return 'Home'
        case 'Add Deck':
            return 'Add Deck'
        case 'Settings':
            return 'Settings'
    }
}


// creating stack navigator
const Stack = createStackNavigator()

function MainAppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' 
                screenOptions={{gestureEnabled: true, 
                headerStyle: {
                    backgroundColor: '#101010'
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerTintColor: '#ffd700'
                }}>
                <Stack.Screen name='Home' 
                              component={AppNavigator}
                              options={({route}) => ({
                                  headerTitle: getHeaderTitle(route)
                              })}
                />
                <Stack.Screen name='AddDeck' component={AddDeck} options={{title: 'Add New Deck'}}/>
                <Stack.Screen name='DeckView' component={DeckView} options={({route}) => ({title: route.params.title})} />
                <Stack.Screen name='AddCard' component={AddCard} options={{title: 'Add Card'}} />
                <Stack.Screen name='Quiz' component={Quiz} options={{title: 'Quiz'}} />
                <Stack.Screen name='Settings' component={Settings} options={{title: 'Settings'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainAppNavigator