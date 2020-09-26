import {AsyncStorage} from 'react-native'
import {decks} from './_DATA'

// asyncStorage key
const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

// method to get the all the data
export function getData() {
    return decks
}

// method to get all decks
export async function getDecks() {
    try{
        const storageResult = await AsyncStorage.getItem(DECKS_STORAGE_KEY)

        if(storageResult === null) {
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
        }

        return storageResult === null
            ? decks
            : JSON.parse(storageResult)

    } catch(error) {
        console.log('error getting the data ', error)
    }
}

// method to get an specific deck (id)
export async function getDeck(id) {
    try{
        const storageResult = await AsyncStorage.getItem(DECKS_STORAGE_KEY)

        return JSON.parse(storageResult)[id]
    } catch (error) {
        console.log('error getting the data ', error)
    }
}

// method to save a deck tittle
export async function saveDeckTitle(title) {
    try{
        await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [title] : {
                title,
                questions: []
            }
        }))
    } catch(error) {
        console.log('error saving title ', error)
    }
}

// method to add card to deck
export async function addCardToDeck(title, card) {
    try{
        const deck = await getDeck(title)

        await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [title] : {
                questions: [...deck.questions].concat(card)
            }
        }))
    } catch(error) {
        console.log('error adding card to deck ', error)
    }
}

// method to reset the decks
export async function resetDecks() {
    try{
        await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
    } catch(error) {
        console.log('error reseting decks ', error)
    }
}