import { UPDATE_CITY } from "../actions";

const initialState = {
    city: 'something'
}

export const weatherFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CITY:
            return {...state, city: action.text}
        default:
            return state;
    }
}