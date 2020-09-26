import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class AddCard extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>
                        Add a question - header
                    </Text>
                </View>
                <View>
                    <Text>
                        question - what is the conect method for?
                    </Text>
                </View>
                <View>
                    <Text>
                        answer - to provide store access to component
                    </Text>
                </View>
                <View>
                    <Text>
                        button - submit
                    </Text>
                </View>
            </View>
        )
    }
}