import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import Quiz from './components/Quiz';
import Test from './components/Test';

export default function App() {
  return (
    <View style={styles.container}>
      <Test />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
