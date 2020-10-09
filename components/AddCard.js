import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import PressButton from './PressButton'
import {gray} from '../utils/colors'


export default class AddCard extends Component {

    state = {
        question: '',
        answer: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Add a question
                    </Text>
                </View>
                <View>
                    <TextInput value={this.state.question}
                                placeholder="enter question"
                                autoFocus={true}
                                style={styles.input}>

                    </TextInput>
                </View>
                <View>
                    <TextInput value={this.state.answer}
                                placeholder="enter answer"
                                autoFocus={true}
                                style={styles.input}>

                    </TextInput>
                </View>
                <View>
                    <PressButton>
                        Add Card
                    </PressButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingTop: 16,
        paddingRight: 16,
        justifyContent: 'space-around'
    },
    header: {
        marginBottom: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 32,
    },
    textInput: {
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: gray,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
        fontSize: 20,
        height: 40
    }

})