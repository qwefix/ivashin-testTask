import { applyMiddleware, combineReducers, createStore } from "redux";
import { notesReducer } from "./reducers/notes";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    notes: notesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store