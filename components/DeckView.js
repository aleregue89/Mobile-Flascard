import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class DeckView extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>
                        Udacicards
                    </Text>
                    <Text>
                        3 cards
                    </Text>
                </View>
                <View>
                    <Text>
                        button - add card
                    </Text>
                    
                </View>
                <View>
                    <Text>
                        button - start quiz
                    </Text>
                    
                </View>
            </View>
        )
    }
}