import { combineReducers, createStore } from "redux";
import { notesReducer } from "./reducers/notes";

const rootReducer = combineReducers({
    notes: notesReducer
});

let initialState = {
    notes: {
        notesList: require('./initialState'),
        newPostInput: {
            value: '',
            tags: [],
        }
    }
};

const store = createStore(rootReducer, initialState)
export default store