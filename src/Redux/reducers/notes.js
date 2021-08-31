// import store from '../state'

const DELETE_POST_BY_NUMBER = 'DELETE_POST_BY_NUMBER'
const CHANGE_NEW_POST_TEXTAREA_VALUE = 'CHANGE_NEW_POST_TEXTAREA_VALUE'
const ADD_NEW_POST_FROM_INPUT = 'ADD_NEW_POST_FROM_INPUT'
// const OPEN_OLD_POST_EDITOR = 'OPEN_OLD_POST_EDITOR'
// const OPEN_NEW_POST_EDITOR = 'OPEN_NEW_POST_EDITOR'
const CLOSE_EDITOR = 'CLOSE_EDITOR'

const initialState = {
    notesList: require('../initialState'),
    input: {
        value: '',
        tags: [],
        mode: 'new',
    },
};

export const notesReducer = (state = initialState, action) => {
    // console.log(action.type)
    switch (action.type) {
        case DELETE_POST_BY_NUMBER:
            return {
                ...state,
                noteList: state.notesList.splice(action.index, 1)
            }
        case CHANGE_NEW_POST_TEXTAREA_VALUE:
            return {
                ...state,
                input: {
                    ...state.input,
                    value: action.value,
                    tags: action.value.split(' ')
                        .map(a => a.split('\n')).flat()
                        .filter(w => w[0] === '#')
                        .filter((v, i, s) => s.indexOf(v) === i)
                }
            }
        case ADD_NEW_POST_FROM_INPUT:
            return {
                ...state,
                notesList: [{
                    tags: state.input.tags,
                    text: state.input.value,
                },
                ...state.notesList],
            }
        case CLOSE_EDITOR:
            return {
                ...state,
                input: {
                    value: '',
                    tags: [],
                    mode: false,
                }
            }
        default:
            return state;
    }

}
const ac = {
    deletePost: (index) => ({
        type: DELETE_POST_BY_NUMBER,
        index
    }),
    changeNewPostValue: (value) => ({
        type: CHANGE_NEW_POST_TEXTAREA_VALUE,
        value
    }),
    addNewPost: () => ({
        type: ADD_NEW_POST_FROM_INPUT,
    }),
    closeEditor: () => ({
        type: CLOSE_EDITOR
    }),
    selectPost: (index) => {

    }
}
const thunks = {
    addNewPost: () => {
        return (dispatch, getState) => {
            if (getState().notes.input.value !== '') {
                dispatch(ac.addNewPost())
                dispatch(ac.closeEditor())
            }
        }
    },
}

export const interFace = {
    addNewPost: thunks.addNewPost,
    closeEditor: ac.closeEditor,
    changeNewPostValue: ac.changeNewPostValue,
    deletePost: ac.deletePost,
}