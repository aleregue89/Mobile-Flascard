// this component is jsut a preview of the Deck's Object in order to use it in DeckList Component

import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {orange, gray} from '../utils/colors'
import { decks } from '../utils/_DATA'
import {connect} from 'react-redux'

const DeckPreview = props => {
    const {deck} = props

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    {deck.title}
                </Text>
            </View>
            <View>
                <Text style={styles.length}>
                    {deck.questions.length}
                </Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: 120,
        minHeight: 120,
        borderWidth: 1,
        borderColor: orange,
        borderRadius: 5,
        marginBottom: 10
    },
    title: {
        fontSize: 28,
    },
    length: {
        fontSize: 18,
        color: gray
    }
})

const mapStateToProps = (state, {id}) => {
    const deck = state[id]

    return {
        deck
    }
}

export default connect(mapStateToProps)(DeckPreview)