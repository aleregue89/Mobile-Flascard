import {getDecks} from '../utils/APITesting'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
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