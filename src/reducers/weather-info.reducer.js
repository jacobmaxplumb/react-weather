import { GET_WEATHER, GOT_WEATHER } from "../actions";

const initialState = {
    description: '',
    temp: 0,
    hasWeather: false
}

export const weatherInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GOT_WEATHER:
            console.log(action);
            return {...state, hasWeather: true, temp: action.temp, description: action.description}
        default:
            return state;
    }
}

