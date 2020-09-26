import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ViewPropTypes} from 'react-native'
import {getDecks, getDeck, saveDeckTitle, addCardToDeck, resetDecks} from '../utils/APITesting'
import {red, white} from '../utils/colors'

export default class Test extends Component {

    // creating state to component
    state = {
        data: ''
    }

    /*componentDidMount() {
        this.handleGetDecks()
    }
    */

    // adding method to handle getDecks call
    handleGetDecks = () => {
        getDecks()
            .then(results => {
                console.log(JSON.stringify(results))

                this.setState({
                    data: results
                })
            })
    }

    // adding method to handle getDeck call
    handleGetDeck = () => {
        getDeck('Redux')
            .then(results => {
                console .log(JSON.stringify(results))

                this.setState({
                    data: results
                })
            })
    }

    // adding a method to save a new title to a deck
    handleSaveTitleToDeck = () => {
        saveDeckTitle('Redux')
    }

    // adding method to handle addCardToDeck call
    handleAddCardToDeck = () => {
        addCardToDeck('Redux', {
            question : 'q1',
            answwer: 'a1'
        })
    }

    // adding method to reset decks
    handleResetDecks = () => {
        resetDecks()
    }

    render()  {

        const {data} = this.state

        return (
            <View style={styles.container}> 
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.handleGetDecks}>
                        <Text style={styles.buttonText}>get Decks</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.handleGetDeck}>
                        <Text style={styles.buttonText}>get Deck</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.handleSaveTitleToDeck}>
                        <Text style={styles.buttonText}>save Deck Title</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.handleAddCardToDeck}>
                        <Text style={styles.buttonText}>add Card to Deck</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.handleResetDecks}>
                        <Text style={styles.buttonText}>reset decks</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{marginLeft: 10}}>
                    {JSON.stringify(data)}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: red,
        borderRadius: 5,
        justifyContent: `center`,
        alignItems: `center`
    }
})