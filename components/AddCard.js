import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import PressButton from './PressButton'
import {black} from '../utils/colors'
import {connect} from 'react-redux'
import {addCard} from '../actions/index'
import {addCardToDeck} from '../utils/APITesting'

export class AddCard extends Component {

    state = {
        question: '',
        answer: ''
    }

    // handle questionchange
    handleQuestionTextChange = question => {
        this.setState({question})
    }

    // handleanswerchange
    handleAnswerTextChage = answer => {
        this.setState({answer})
    }

    // handle submit
    handleSubmit = () => {

        const {navigation, dispatch} = this.props
        const {route} = this.props
        const {title} = route.params
        //const {title} = item
        //console.log('lllllllllllllllllllllllllll')
        //console.log(JSON.stringify(route.params))

        const card = {
            question: this.state.question,
            answer: this.state.answer
        }

        dispatch(addCard(title, card))
        addCardToDeck(title, card)

        //reseting the state after the submission
        this.setState({
            question: '',
            answer: ''
        })
        navigation.goBack()

    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            Add a question
                        </Text>
                    </View>
                    <View style={styles.header}>
                        <TextInput value={this.state.question}
                                    placeholder="enter question"
                                    autoFocus={true}
                                    style={styles.input}
                                    returnKeyType='next'
                                    blurOnSubmit={false}
                                    onChangeText={this.handleQuestionTextChange}
                                    onSubmitEditing={() => this.answerTextInput.focus()}>

                        </TextInput>
                    </View>
                    <View style={styles.header}>
                        <TextInput value={this.state.answer}
                                    placeholder="enter answer"
                                    autoFocus={true}
                                    style={styles.input}
                                    returnKeyType='done'
                                    onChangeText={this.handleAnswerTextChage}
                        >

                        </TextInput>
                    </View>
                    <View>
                        <PressButton onPress={this.handleSubmit} disabled={this.state.question === '' || this.state.answer === ''}>
                            Submit
                        </PressButton>
                    </View>
                </View>
                <View style={{height: '25%'}}></View>
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
        borderColor: black,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
        fontSize: 20,
        height: 40
    }

})

export default connect()(AddCard)