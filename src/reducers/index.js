import { combineReducers, createStore } from "redux";
import { weatherFormReducer } from "./weather-form.reducer";
import { weatherInfoReducer } from "./weather-info.reducer";

const reducer = combineReducers({
    form: weatherFormReducer,
    info: weatherInfoReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());