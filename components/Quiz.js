import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Quiz extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>
                        number of cards left in the deck - 2/2
                    </Text>
                </View>
                <View>
                    <Text>
                        Does React Native work with Android?
                    </Text>
                    <Text>
                        link - answer if user clicks here same UI will show only this time showing the answer
                    </Text>
                </View>
                <View>
                    <Text>
                        button - correct
                    </Text>
                </View>
                <View>
                    <Text>
                        button - incorrect
                    </Text>
                </View>
            </View>
        )
    }
}