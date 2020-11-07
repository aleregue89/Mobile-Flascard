import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import PressButton from './PressButton'
import {connect} from 'react-redux'
import {resetDecks} from '../utils/APITesting'
import {resetStore} from '../actions/index'
import { gray, white, black} from '../utils/colors'

export class Settings extends Component {

    handleResetDecks = () => {
        const {resetStore, navigation} = this.props

        resetStore()
        resetDecks()
        navigation.goBack()

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleHeader}>Settings</Text>
                <View style={styles.block}>
                    <View style={styles.blockContainer}>
                        <Text style={styles.blockText}>
                            Reset Data back to original data set
                        </Text>
                        <View style={{height: 20}} />
                        <View />
                        <PressButton onPress={this.handleResetDecks}>
                            Reset Data
                        </PressButton>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#ebebeb'
    },
    titleHeader: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 16,
        color: black
    },
    block: {
        marginBottom: 20
    },
    blockContainer: {
        borderWidth: 1,
        borderColor: black,
        backgroundColor: white,
        borderRadius: 5,
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20
    },
    blockText: {
        fontSize: 18,
        color: black
    }
})

export default connect(null, {resetStore})(Settings)