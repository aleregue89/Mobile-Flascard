// this component is just a preview of the Deck's Object in order to use it in DeckList Component
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {gray, white, black} from '../utils/colors'
import {connect} from 'react-redux'

const DeckPreview = props => {
    const {deck} = props

    // adding a conditional in order to check for any undefined value
    if(deck === undefined) {
        return <View style={styles.container} />
    }

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
        borderColor: black,
        backgroundColor: white,
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