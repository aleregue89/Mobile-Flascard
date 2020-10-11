import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import PressButton from './PressButton'
import {white, gray} from '../utils/colors'
import {connect} from 'react-redux'
import {addDeck} from '../actions/index'

export class AddDeck extends Component {

    state={
        text: ''
    }

    // handleChangeText here
    handleChange = text => {
        this.setState({text})
    }

    // handlePress here
    handlePress = () => {
        const {addDeck, navigation} = this.props

        addDeck(this.state.text)

        // reseting the state
        this.setState(() => ({text: ''}))

        navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height:60}}/>
                <View style={styles.title}>
                    <Text style={styles.text}>
                        Add title for your new Deck
                    </Text>
                </View>
                <View style={styles.textInput}>
                    <TextInput value={this.state.value}
                                placeholder= "enter deck name"
                                autoFocus={true}
                                style={styles.input}
                                onChangeText={this.handleChange}>

                    </TextInput>
                </View>
                <PressButton disabled={this.state.text === ''}
                             onPress={this.handlePress}>
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
        borderColor: 'tomato',
        backgroundColor: white,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        fontSize: 20,
        height: 40,
        marginBottom: 20
    }
})

export default connect(null, {addDeck})(AddDeck)