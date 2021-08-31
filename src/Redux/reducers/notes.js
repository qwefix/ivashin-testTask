const DELETE_POST_BY_NUMBER = 'DELETE_POST_BY_NUMBER'
const CHANGE_NEW_POST_TEXTAREA_VALUE = 'CHANGE_NEW_POST_TEXTAREA_VALUE'
const ADD_NEW_POST_FROM_INPUT = 'ADD_NEW_POST_FROM_INPUT'

export const notesReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_POST_BY_NUMBER:
            return {
                ...state,
                noteList: state.notesList.splice(action.number, 1)
            }
        case CHANGE_NEW_POST_TEXTAREA_VALUE:
            return {
                ...state,
                newPostInput: {
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
                    tags: state.newPostInput.tags,
                    text: state.newPostInput.value,
                },
                ...state.notesList],
                newPostInput: {
                    value: '',
                    tags: []
                },
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
    })
}