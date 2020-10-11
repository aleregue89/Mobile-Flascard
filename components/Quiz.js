import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native'
import { red } from '../utils/colors'
import PressButton from './PressButton'
import TextButton from './TextButton'
import {gray, green} from '../utils/colors'

// creating const for the three choices I have on this view
const screen = {
    QUESTION: 'question',
    ANSWER: 'answer',
    RESULT: 'result'
}

const answer = {
    CORRECT: 'correct',
    INCORRECT: 'incorrect'
}

export default class Quiz extends Component {

    // adding state to this component
    state = {
        view: screen.QUESTION,
        //correct: 0,
        //incorrect: 0,
        //questionCounter: this.props.deck.questions.length
        //arrayAnsweredQuestions: Array(this.props.deck.questions.length).fill(0)

        correct: 2,
        incorrect:1,
        questionCounter: 3,
    }
    // I will use static data in order to have a preview of my component


    render() {

        //const {questions} = this.props.deck
        const {view, questionCounter} = this.state

        // first conditional - case: there is not cards on the deck
        // if(questions.length === 0)
        if(questionCounter === 0) {
            return(
                <View style={styles.viewStyle}>
                    <View style={styles.renderStyle}>
                        <Text style={styles.textNoQuestions}>
                            There is not questions for this deck, please add some cards and try again
                        </Text>
                    </View>
                </View>
            )
        }

        // second conditional - case: if user already answered all the cards (showing the result view)
        if(this.state.view === screen.RESULT) {
            const {correct, questionCounter} = this.state
            const percent = ((correct/questionCounter)*100).toFixed(0)
            const resultStyle = percent >= 75 ? styles.approved : styles.suspended

            return(
                <View style={styles.viewStyle}>
                    <View style={styles.renderStyle}>
                        <Text style={styles.quizCompleted}>
                            Quiz Completed!
                        </Text>
                    </View>
                    <View style={styles.renderStyle}>
                        <Text style={styles.renderStyle}>
                            Percentage correct
                        </Text>
                        <Text style={resultStyle}>
                            {percent}%
                        </Text>
                    </View>
                    <View>
                        <PressButton>
                            Reset Quiz
                        </PressButton>
                    </View>
                    <View>
                        <PressButton>
                            Back to Deck
                        </PressButton>
                    </View>
                    <View>
                        <PressButton>
                            Home
                        </PressButton>
                    </View>
                </View>
            )
        }

        return (
            // {index = 1} / questions.length
            <ScrollView style={styles.container}>
                <View style={styles.viewStyle}>
                    <View style={styles.renderStyle}> 
                        <Text style={styles.cardCount}>
                            {1} / {questionCounter}
                        </Text>
                    </View>
                    <View style={styles.renderStyle}>
                        <Text>
                            {view === screen.QUESTION ? 'Question' : 'Answer'}
                        </Text>
                    </View>
                    {view === screen.QUESTION ? (
                        <TextButton>
                            Show Answer
                        </TextButton>
                    ) : (
                        <TextButton>
                            Show Question
                        </TextButton>
                    )}
                    <View>
                        <PressButton>
                            Correct
                        </PressButton>
                        <PressButton>
                            Incorrect
                        </PressButton>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    viewStyle: {
        flex: 1,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        //backgroundColor: gray,
        justifyContent: 'space-around',
    },
    renderStyle: {
        marginBottom: 20
    },
    cardCount: {
        fontSize: 24
    },
    title: {
        fontSize: 32,
        textAlign: 'center'
    },
    approved: {
        color: green,
        fontSize: 46,
        textAlign: 'center'
    },
    suspended: {
        color: red,
        fontSize: 46,
        textAlign: 'center'
    },
    textNoQuestions: {
        fontSize: 24,
        textAlign: 'center'
    },
    quizCompleted: {
        fontSize: 24,
        textAlign: 'center'
    }
})


// to use after I've implement Redux
/*
<ScrollView style={styles.container}>
                {questions.map((question, index) => (
                    <View style={styles.viewStyle} key={index}>
                        <View style={styles.renderStyle}> 
                            <Text style={styles.cardCount}>
                                {index + 1} / questions.length
                            </Text>
                        </View>
                        <View style={styles.renderStyle}>
                            <Text>
                                {view === screen.QUESTION ? 'Question' : 'Answer'}
                            </Text>
                            <View>
                                <Text>
                                    {view === screen.QUESTION ? question.question : question.answer}
                                </Text>
                            </View>
                        </View>
                        {view === screen.QUESTION ? (
                            <TextButton>
                                Show Answer
                            </TextButton>
                        ) : (
                            <TextButton>
                                Show Question
                            </TextButton>
                        )}
                        <View>
                            <PressButton>
                                Correct
                            </PressButton>
                            <PressButton>
                                Incorrect
                            </PressButton>
                        </View>
                    </View>
                ))}
            </ScrollView>
*/