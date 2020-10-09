import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import PressButton from './PressButton'
import {white, gray} from '../utils/colors'

export default class AddDeck extends Component {

    state={
        text: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>
                        What is the title of your new deck?
                    </Text>
                </View>
                <View style={styles.textInput}>
                    <TextInput value={this.state.value}
                                placeholder= "enter deck name"
                                autoFocus={true}
                                style={styles.input}>

                    </TextInput>
                </View>
                <PressButton>
                    Create Deck
                </PressButton>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 16,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 16
    },
    textInput: {
        marginBottom: 20
    },
    title: {
        marginBottom: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 24
    },
    input: {
        borderWidth: 1,
        borderColor: gray,
        backgroundColor: white,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        fontSize: 20,
        height: 40,
        marginBottom: 20
    }
})