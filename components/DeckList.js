import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class DeckList extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>Deck 1</Text>
                    <Text>3 cards</Text>
                </View>
                <View>
                    <Text>Deck 2</Text>
                    <Text>3 cards</Text>
                </View>
                <View>
                    <Text>Deck 2</Text>
                    <Text>3 cards</Text>
                </View>
            </View>
        )
    }
}