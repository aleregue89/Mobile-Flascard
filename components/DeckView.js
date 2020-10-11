import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {gray} from '../utils/colors'
import PressButton from './PressButton'
import DeckPreview from './DeckPreview'
import {connect} from 'react-redux'

export class DeckView extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.navigation !== undefined
    }

    render() {

        const {deck, navigation} = this.props
        const {route} = this.props
        const {item} = route.params
        const {title} = item

        return (
            <View style={styles.container}>
                <DeckPreview id={title}/>
                <View>
                    <PressButton onPress={() => navigation.navigate('AddCard', {item: title})}>
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
    return (
        navigation
    )
}

    //const {route} = props
    //const {item} = route.params
    //const {title} = item
    //const title = navigation.getParam('title', 'undefined')
    //const title = route.params.title
    //const deck = {title}

    //return(
        //deck
    //)


export default connect(mapStateToProps)(DeckView)