import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { virus_data } from "../store/virus_data";


const reducers = combineReducers({ virus_data });

export const redux_store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

window.get_store = redux_store.getState();






