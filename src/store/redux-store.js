import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { virus_data } from "../store/virus_data";


const reducers = combineReducers({ virus_data });

export const redux_store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.get_store = redux_store.getState();






