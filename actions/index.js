import {getDeck, getDecks} from '../utils/APITesting'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const RECEIVE_DECK = 'RECEIVE_DECK'
export const RESET_STORE = 'RESET_STORE'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function addDeck(title) {
    return {
        type: ADD_DECK,
        title
    }
}

export function addCard(deckId, card) {
    return {
        type: ADD_CARD,
        deckId,
        card
    }
}

export function handleInitialData() {
    return dispatch => {
        return getDecks()
            .then(decks => {
                dispatch(receiveDecks(decks))
            })
    }
}

export function resetStore() {
    return {
        type: RESET_STORE
    }
}

/*
export function receiveDeck(deck){
    return {
        type: RECEIVE_DECK,
        deck
    }
}

export function getDeckByTitle(title) {
    return dispatch => {
        return getDeck(title)
            .then(deck => {
                dispatch(receiveDeck(deck))
            })
    }
}
*/