import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class AddDeck extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>
                        What is the title of your new deck?
                    </Text>
                </View>
                <View>
                    <Text>
                        placeholder - user will entry the deck's name
                    </Text>
                </View>
                <View>
                    <Text>
                        adding button - create deck
                    </Text>
                </View>
                
            </View>
        )
    }
}