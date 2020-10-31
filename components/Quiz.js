import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native'
import { red } from '../utils/colors'
import PressButton from './PressButton'
import TextButton from './TextButton'
import {gray, green} from '../utils/colors'
import { connect } from 'react-redux'
import {getDeckByTitle} from '../actions/index'

// I will have 3 types of screens on this component
const screen = {
    QUESTION: 'question',
    ANSWER: 'answer',
    RESULT: 'result'
}

const answer = {
    CORRECT: 'correct',
    INCORRECT: 'incorrect'
}

// getting the screen width in order to render the components the best way possible
const SCREEN_WIDTH = Dimensions.get('window').width

export class Quiz extends Component {

    // adding state to component
    state = {
        view: screen.QUESTION,
        correct: 0,
        incorrect: 0,
        questionCounter: this.props.deck.questions.length,
        answeredQuestions: Array(this.props.deck.questions.length).fill(0)

    }

    // handleScroll
    handleScroll = () => {
        this.setState({
            view: screen.QUESTION
        })
    }

    // handle onPress on the textbuttons
    handleAnswerTextButton = () => {
        this.setState({
            view: screen.ANSWER
        })
    }

    handleQuestionTextButton = () => {
        this.setState({
            view: screen.QUESTION
        })
    }

    // handleAnswer
    handleAnswer = (response, page) => {
        if(response === answer.CORRECT) {
            this.setState(prevState => ({
                correct: prevState.correct + 1
            }))
        } else {
            this.setState(prevState => ({
                incorrect: prevState.incorrect + 1
            }))
        }

        this.setState(
            prevState => ({
                answeredQuestions: prevState.answeredQuestions.map((value, index) => (page === index ? 1 : value))
            }), () => {
                const {correct, incorrect, questionCounter} = this.state

                if(questionCounter === correct + incorrect) {
                    this.setState({
                        view: screen.RESULT
                    })
                } else {
                    this.scrollView.scrollTo({ x: (page + 1) * SCREEN_WIDTH})
                    this.setState(prevState => ({
                        view: screen.QUESTION
                    }))
                }
            }
        )
    }
    
    render() {

        const {questions} = this.props.deck
        const {view, questionCounter} = this.state
        //
        const {deck, navigation} = this.props
        const {route} = this.props
        const {title} = route.params
        console.log('here is the deck passing as a prop to quiz');
        console.log(JSON.stringify(deck));
        

        // first conditional - case: there is not cards on the deck
        if(questions.length === 0) {
            return(
                <View style={styles.viewStyle}>
                    <View style={styles.renderStyle}>
                        <Text style={styles.textNoQuestions}>
                            There is cards on this deck, please add some cards and try again
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
                        <Text>{correct}/{questionCounter}</Text>
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
                            Go back to Deck
                        </PressButton>
                    </View>
                    <View>
                        <PressButton>
                            Go Home
                        </PressButton>
                    </View>
                </View>
            )
        }

        return (
            // {index = 1} / questions.length
            <ScrollView style={styles.container} 
                        pagingEnabled={true} 
                        horizontal={true}
                        onMomentumScrollBegin={this.handleScroll}
                        ref={scrollView => {
                            this.scrollView = scrollView
                        }}
            >
                {questions.map((question, index) => (
                    <View style={styles.viewStyle} key={index}>
                        <View style={styles.renderStyle}> 
                            <Text style={styles.cardCount}>
                                {index + 1} / {questions.length}
                                {JSON.stringify(route.params)}
                            </Text>
                        </View>
                        <View style={[styles.renderStyle, styles.questionContainer]}>
                            <Text style={styles.textHeader}>
                                {view === screen.QUESTION ? 'Question' : 'Answer'}
                            </Text>
                            <View style={styles.wrapper}>
                                <Text style={styles.title}>
                                    {view === screen.QUESTION
                                        ? question.question
                                        : question.answer
                                    }
                                </Text>
                            </View>
                        </View>
                        {view === screen.QUESTION ? (
                            <TextButton onPress={this.handleAnswerTextButton}>
                                Show Answer
                            </TextButton>
                        ) : (
                            <TextButton onPress={this.handleQuestionTextButton}>
                                Show Question
                            </TextButton>
                        )}
                        <View>
                            <PressButton onPress={() => this.handleAnswer(answer.CORRECT, index)}>
                                Correct
                            </PressButton>
                            <PressButton onPress={() => this.handleAnswer(answer.INCORRECT, index)}>
                                Incorrect
                            </PressButton>
                        </View>
                    </View>
                ))}
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
        width: SCREEN_WIDTH
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
    },
    questionContainer: {
        borderWidth: 1,
        borderColor: 'tomato',
        backgroundColor: gray,
        borderRadius: 5,
        paddingLeft: 16,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 16,
        flexGrow: 1
    },
    textHeader: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 20
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center'
    }
})

const mapStateToProps = (state, {route, navigation}) => {
    const {title} = route.params
    const deck = state[title]

    return {
        deck
    }
}


export default connect(mapStateToProps)(Quiz)
