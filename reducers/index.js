import {RECEIVE_DECKS, ADD_CARD, ADD_DECK, RECEIVE_DECK, RESET_STORE} from '../actions'
import {decks as INITIAL_STATE} from '../utils/_DATA'

function decks (state = {}, action) {
    switch(action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_CARD:
            const {deckId, card} = action
            return {
                ...state,
                [deckId] : {
                    ...state[deckId],
                    questions: [...state[deckId].questions].concat(card)
                }
            }
        case ADD_DECK:
            const {title} = action
            return {
                ...state,
                [title] : {
                    title,
                    questions: []
                }
            }
        case RECEIVE_DECK:
            return {
                ...state,
                ...action.deck
            }
        case RESET_STORE:
            return {
                INITIAL_STATE
            }
        default:
            return state
    }
}

export default decks