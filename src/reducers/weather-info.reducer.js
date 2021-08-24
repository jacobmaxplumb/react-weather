import { GET_WEATHER } from "../actions";

const initialState = {
    description: '',
    temp: 0,
    hasWeather: false
}

export const weatherInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_WEATHER:
            return {...state, hasWeather: true}
        default:
            return state;
    }
}

