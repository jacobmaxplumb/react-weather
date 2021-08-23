import { combineReducers, createStore } from "redux";
import { weatherFormReducer } from "./weather-form.reducer";
import { weatherInfoReducer } from "./weather-info.reducer";

const reducer = combineReducers({
    form: weatherFormReducer,
    info: weatherInfoReducer
})

export const store = createStore(reducer);