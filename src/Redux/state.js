import { combineReducers, createStore } from "redux";
import { postsReducer } from "./reducers/posts";

const rootReducer = combineReducers({
    posts: postsReducer
});

let initialState = require('./initialState');

const store = createStore(rootReducer, initialState)
export default store