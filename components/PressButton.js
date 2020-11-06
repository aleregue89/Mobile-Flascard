// new component to be used globally for the rest of my components - PressButton
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {black, gray, red, white, yellow} from '../utils/colors'

export default function PressButton({ children, onPress, style = {}, textStyle = {}, disabled = false }) {

    const disabledPressButton = disabled ? styles.buttonDisabled : {}
    const disabledPressButtonText = disabled ? styles.textDisabled : {}

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, style, disabledPressButton]} onPress={onPress} disabled={disabled}>
                <Text style={[styles.text, textStyle, disabledPressButtonText]}>
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
        backgroundColor: black,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: black
    },
    buttonDisabled: {
        backgroundColor: gray,
        borderColor: black
    },
    textDisabled: {
        color: black
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: yellow
    }
})