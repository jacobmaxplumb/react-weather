import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./user.reducer";
import { weatherFormReducer } from "./weather-form.reducer";
import { weatherInfoReducer } from "./weather-info.reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    form: weatherFormReducer, // {prop: values}
    info: weatherInfoReducer, // {prop: values}
    user: userReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));