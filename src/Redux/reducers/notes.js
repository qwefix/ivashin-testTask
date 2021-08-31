const DELETE_POST_BY_NUMBER = 'DELETE_POST_BY_NUMBER'
const CHANGE_NEW_POST_TEXTAREA_VALUE = 'CHANGE_NEW_POST_TEXTAREA_VALUE'
const ADD_NEW_POST_FROM_INPUT = 'ADD_NEW_POST_FROM_INPUT'
const OPEN_OLD_POST_EDITOR = 'OPEN_OLD_POST_EDITOR'
const OPEN_NEW_POST_EDITOR = 'OPEN_NEW_POST_EDITOR'
const CLOSE_EDITOR = 'CLOSE_EDITOR'

let initialState = {
    notesList: require('../initialState'),
    input: {
        value: '',
        tags: [],
        mode: 'new',
    },
};

export const notesReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case DELETE_POST_BY_NUMBER:
            return {
                ...state,
                noteList: state.notesList.splice(action.number, 1)
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
            if (state.input.value === '') return state
            return {
                ...state,
                notesList: [{
                    tags: state.input.tags,
                    text: state.input.value,
                },
                ...state.notesList],
                input: {
                    value: '',
                    tags: []
                },
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
export const ac = {
    deletePost: (number) => ({
        type: DELETE_POST_BY_NUMBER,
        number
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
    })
}