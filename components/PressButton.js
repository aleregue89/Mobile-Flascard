// new component to be used globally for the rest of my components - PressButton
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {red, white} from '../utils/colors'

export default function PressButton({ children, onPress, style = {} }) {
    return (
        <View style={[styles.buttonContainer, style]}>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                <Text>
                    {children}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 20
    },
    button: {
        width: 200,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: red,
        justifyContent: 'center',
        alignItems: 'center'
    }
})