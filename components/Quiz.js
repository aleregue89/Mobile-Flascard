import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native'
import { red, white } from '../utils/colors'
import PressButton from './PressButton'
import TextButton from './TextButton'
import {green, black} from '../utils/colors'
import { connect } from 'react-redux'
import {getDeckByTitle} from '../actions/index'
import {clearLocalNotification, setLocalNotification} from '../utils/helpers'

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

    /*
    componentDidMount() {
        clearLocalNotification()
            .then(setLocalNotification)
    }
    */

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
                    clearLocalNotification()
                        .then(setLocalNotification)

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

    // handleReset
    handleReset = () => {
        this.setState(prevState => ({
            view: screen.QUESTION,
            correct: 0,
            incorrect: 0,
            answeredQuestions: Array(prevState.questionCounter).fill(0)
        }))
    }
    
    render() {

        const {questions} = this.props.deck
        const {view, questionCounter} = this.state
        //
        const {deck, navigation} = this.props
        const {route} = this.props
        const {title} = route.params
        //console.log('here is the deck passing as a prop to quiz');
        //console.log(JSON.stringify(deck));
        

        // first conditional - case: there is not cards on the deck
        if(questions.length === 0) {
            return(
                <View style={styles.viewStyle}>
                    <View style={styles.header}>
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
                    <View style={styles.header}>
                        <Text style={styles.quizCompleted}>
                            Quiz Completed!
                        </Text>
                        <Text style={[styles.cardCount, {textAlign: 'center'}]}>{correct}/{questionCounter}</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={[styles.cardCount, {textAlign: 'center'}]}>
                            Percentage correct
                        </Text>
                        <Text style={resultStyle}>
                            {percent}%
                        </Text>
                    </View>
                    <View>
                        <PressButton onPress={this.handleReset}>
                            Reset Quiz
                        </PressButton>
                    </View>
                    <View>
                        <PressButton onPress={() => {
                            this.handleReset()
                            this.props.navigation.goBack()
                        }}>
                            Go back to Deck
                        </PressButton>
                    </View>
                    <View>
                        <PressButton onPress={() => {
                            this.handleReset()
                            this.props.navigation.navigate('Home')
                        }}>
                            Go Home
                        </PressButton>
                    </View>
                </View>
            )
        }

        return (
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
                        <View style={styles.header}> 
                            <Text style={styles.cardCount}>
                                {index + 1} / {questions.length}
                            </Text>
                        </View>
                        <View style={[styles.header, styles.questionContainer]}>
                            <Text style={styles.textQuestion}>
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
                            <PressButton  
                                         onPress={() => this.handleAnswer(answer.CORRECT, index)}
                                         disabled={this.state.answeredQuestions[index] === 1}>
                                Correct
                            </PressButton>
                            <PressButton 
                                         onPress={() => this.handleAnswer(answer.INCORRECT, index)}
                                         disabled={this.state.answeredQuestions[index] === 1}>
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
        justifyContent: 'space-around',
        width: SCREEN_WIDTH
    },
    header: {
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
        borderColor: black,
        backgroundColor: white,
        borderRadius: 5,
        paddingLeft: 14,
        paddingTop: 18,
        paddingBottom: 18,
        paddingRight: 14,
        flexGrow: 1
    },
    textQuestion: {
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
