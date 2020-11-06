// DeckList component renders just a preview of my decks - I'm using DeckPreview Component to do that
import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {black} from '../utils/colors'
import DeckPreview from './DeckPreview'
import {getDecks} from '../utils/APITesting'
import { decks } from '../utils/_DATA'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/index'

export class DeckList extends Component {

    componentDidMount() {
        this.props.handleInitialData()
    }

    render() {

        const {decks, navigation} = this.props
        //console.log('//////////////////////')
        //console.log(JSON.stringify(decks))

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}>
                    Mobile FLashcard
                </Text>
                {Object.values(decks).map(deck => {
                    //console.log(deck)
                    return (
                        <TouchableOpacity key={deck.title} onPress={() => navigation.navigate('DeckView', {title: deck.title})}>
                            <DeckPreview id={deck.title} /> 
                        </TouchableOpacity>             
                    )
                })}
                <TouchableOpacity onPress={() => navigation.navigate('AddDeck')}>
                    <Text>got to AddDeck</Text>
                </TouchableOpacity>
                <View style={{marginBottom: 30}}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb',
        paddingBottom: 16,
        paddingLeft: 16,
        paddingTop: 16,
        paddingRight: 16,
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 16,
        color: black
    }
})

const mapStateToProps = state => ({decks: state})

export default connect(mapStateToProps, {handleInitialData})(DeckList)