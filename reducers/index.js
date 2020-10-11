import {RECEIVE_DECKS, ADD_CARD, ADD_DECK} from '../actions'

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
        default:
            return state
    }
}

export default decks