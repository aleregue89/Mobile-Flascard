import React, {Component} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

//importing the components
import DeckList from '../components/DeckList'
import AddDeck from '../components/AddDeck'
import DeckView from '../components/DeckView'
import Quiz from '../components/Quiz'
import AddCard from '../components/AddCard'

const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{gestureEnabled: true}}>
                <Stack.Screen name='Home' component={DeckList} options={{title: 'Home Screen'}}/>
                <Stack.Screen name='AddDeck' component={AddDeck} options={{title: 'Add New Deck'}}/>
                <Stack.Screen name='DeckView' component={DeckView} options={({route}) => ({
                    title: route.params.item.title
                })} />
                <Stack.Screen name='AddCard' component={AddCard} options={{title: 'Add Card'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator