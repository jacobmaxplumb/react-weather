import { combineReducers, createStore } from "redux";
import { userReducer } from "./user.reducer";
import { weatherFormReducer } from "./weather-form.reducer";
import { weatherInfoReducer } from "./weather-info.reducer";

const reducer = combineReducers({
    form: weatherFormReducer, // {prop: values}
    info: weatherInfoReducer, // {prop: values}
    user: userReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());