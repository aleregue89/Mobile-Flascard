// DeckList component renders just a preview of my decks - I'm using DeckPreview Component to do that

import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {white} from '../utils/colors'
import DeckPreview from './DeckPreview'
import {getDecks} from '../utils/APITesting'
import { decks } from '../utils/_DATA'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/index'
import DeckView from './DeckView'


export class DeckList extends Component {

    componentDidMount() {
        this.props.handleInitialData()
    }

    render() {

        const {decks} = this.props

        return (
            <ScrollView style={styles.container}>
                {Object.values(decks).map(deck => {
                    //console.log(deck)
                    return (
                        // navigation is not working - to be fixed
                        <TouchableOpacity key={deck.title} onPress={() => navigation.navigate('DeckView', {title: deck.title})}>
                            <DeckPreview id={deck.title} /> 
                        </TouchableOpacity>             
                    )
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingTop: 16,
        paddingRight: 16
    },
    deck: {
        flex: 1,
        //flexDirection: 'row',
        //justifyContent: 'center'
        
    },
    text: {

    }
})

const mapStateToProps = state => ({decks: state})

export default connect(mapStateToProps, {handleInitialData})(DeckList)