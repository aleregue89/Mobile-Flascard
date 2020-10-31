import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {gray} from '../utils/colors'
import PressButton from './PressButton'
import DeckPreview from './DeckPreview'
import {connect} from 'react-redux'

export class DeckView extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.deck !== undefined
    }

    render() {

        const {deck, navigation} = this.props
        const {route} = this.props
        const {title} = route.params
        //const deck = state[title]
        console.log('lllllllllllllllllllllllllll')
        console.log(JSON.stringify(title))
        console.log(JSON.stringify(deck))
        console.log('*********************************')
        //console.log(deck)
        

        return (
            <View style={styles.container}>
                <DeckPreview id={title}/>
                <View>
                    <PressButton onPress={() => this.props.navigation.navigate('AddCard', {title: title})}>
                        Add Card
                    </PressButton>
                </View>
                <View>
                    <PressButton onPress={() => this.props.navigation.navigate('Quiz', {title: deck.title})}>
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

const mapStateToProps = (state, {route, navigation}) => {
    const {title} = route.params
    const deck = state[title]

    return {
        deck
    }
}

export default connect(mapStateToProps)(DeckView)