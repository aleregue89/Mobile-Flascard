import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import PressButton from './PressButton'
import {gray} from '../utils/colors'
import {connect} from 'react-redux'
import {addCard} from '../actions/index'


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

    // handlesubmit
    handleSubmit = () => {
        
        const {navigation} = this.props
        const {route} = this.props
        const {item} = route.params
        const {title} = item

        const card = {
            question: this.state.question,
            answer: this.state.answer
        }

        addCard(title, card)

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
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Add a question
                    </Text>
                </View>
                <View>
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
                <View>
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
                    <PressButton onPress={this.handleSubmit}>
                        Submit
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
        borderColor: 'tomato',
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
        fontSize: 20,
        height: 40
    }

})

const mapStateToProps = (state, {navigation}) => {
    return {
        navigation
    }
}

export default connect()(AddCard)