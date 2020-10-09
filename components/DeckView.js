import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {gray} from '../utils/colors'
import PressButton from './PressButton'
import DeckPreview from './DeckPreview'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'

export class DeckView extends Component {

    render() {

        const {deck, navigation} = this.props

        return (
            <View style={styles.container}>
                <DeckPreview id={deck.title}/>
                <View>
                    <PressButton>
                        Add Card
                    </PressButton>
                </View>
                <View>
                    <PressButton>
                        Start Quiz
                    </PressButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        //backgroundColor: gray
    }
})

const mapStateToProps = (state, {navigation}) => {

    const title = navigation.getParam('title', 'undefined')
    const deck = state[title]

    return(
        deck
    )
}

export default connect(mapStateToProps)(DeckView)