const LOCAL_STORAGE_NAME = 'qwefix-HRAMCHENKO_A_G-test-task-to-ivashin-from-NYBLE-CRAFT';

//VARIABLES TO POVIDE ACTION TO DISPATCH
const DELETE_POST_BY_NUMBER = 'DELETE_POST_BY_NUMBER'
const CHANGE_NEW_POST_TEXTAREA_VALUE = 'CHANGE_NEW_POST_TEXTAREA_VALUE'
const ADD_NEW_POST_FROM_INPUT = 'ADD_NEW_POST_FROM_INPUT'
const OPEN_OLD_POST_EDITOR = 'OPEN_OLD_POST_EDITOR'
const OPEN_NEW_POST_EDITOR = 'OPEN_NEW_POST_EDITOR'
const CLOSE_EDITOR = 'CLOSE_EDITOR'
const CHANGE_OLD_POST = 'CHANGE_OLD_POST'
const OPEN_FILTER_PANEL = 'OPEN_FILTER_PANEL'
const CLOSE_FILTER_PANEL = 'CLOSE_FILTER_PANEL'
const REMOVE_FILTER_TAG_BY_CLICK = 'REMOVE_FILTER_TAG_BY_CLICK'
const UPDATE_FILTER_OUTPUT_ARRAY = 'UPDATE_FILTER_OUTPUT_ARRAY'
const ADD_FILTER_TAG_BY_CLICK = 'ADD_FILTER_TAG_BY_CLICK'
const FILTER_INPUT_CHANGE = 'FILTER_INPUT_CHANGE'
const ADD_FILTER_TAG_BY_INPUT = 'ADD_FILTER_TAG_BY_INPUT'

const initialState = {
    filter: {
        active: false,
        input: '',
        tags: [],
        filtredPosts: [],
    },
    notesList: JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)) || require('../initialState'),
    input: {
        value: '',
        tags: [],
        mode: false,
    },
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        //COMMON
        case DELETE_POST_BY_NUMBER:
            let listAfterDelete = [...state.notesList].filter(a => a.key !== action.key)
            return {
                ...state,
                notesList: listAfterDelete.map((a, i) => ({ ...a, key: i }))
            }
        //EDITOR
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
        case CLOSE_EDITOR:
            return {
                ...state,
                input: {
                    value: '',
                    tags: [],
                    mode: false,
                }
            }
        //EDITOR NEW POST 
        case ADD_NEW_POST_FROM_INPUT:
            return {
                ...state,
                notesList: [{
                    tags: state.input.tags,
                    text: state.input.value,
                }, ...state.notesList].map((a, i) => ({ ...a, key: i })),
            }
        case OPEN_NEW_POST_EDITOR:
            return {
                ...state,
                input: {
                    ...state.input,
                    mode: 'new',
                }
            }
        //EDITOR OLD POST 
        case OPEN_OLD_POST_EDITOR:
            const selectedPost = state.notesList.find(a => a.key === action.key)
            return {
                ...state,
                input: {
                    value: selectedPost.text,
                    tags: selectedPost.tags,
                    key: action.key,
                    mode: 'old',
                },

            }
        case CHANGE_OLD_POST:
            let listAfterChange = [...state.notesList]
            listAfterChange.splice(state.input.key, 1, {
                tags: state.input.tags,
                text: state.input.value,
            })
            return {
                ...state,
                notesList: listAfterChange.map((a, i) => ({ ...a, key: i }))
            }
        //FILTER
        case OPEN_FILTER_PANEL:

            return {
                ...state,
                filter: {
                    ...state.filter,
                    active: true,
                    key: action.key
                }
            }
        case CLOSE_FILTER_PANEL:
            return {
                ...state,
                filter: {
                    active: false,
                    input: '',
                    tags: [],
                    filtredPosts: [],
                },
            }
        case UPDATE_FILTER_OUTPUT_ARRAY:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    filtredPosts: [...state.notesList].filter(
                        post => {
                            return !state.filter.tags.map(tag => {
                                return post.tags.includes(tag)
                            }).includes(false)
                        }
                    )
                }
            }
        //FILTER TAGS
        case REMOVE_FILTER_TAG_BY_CLICK:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    tags: state.filter.tags.filter(t => t !== action.tag)
                }
            }
        case ADD_FILTER_TAG_BY_CLICK:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    tags: [...state.filter.tags, action.tag].filter((v, i, s) => s.indexOf(v) === i)
                }
            }
        case FILTER_INPUT_CHANGE:
            let string = action.value
            string = string[0] === '#' ? string : '#' + string
            if (string.indexOf(' ') !== -1) {
                string = string.split('').filter(a => a !== ' ').join('')
            }
            if (string.indexOf('\n') !== -1) {
                string = string.split('').filter(a => a !== '\n').join('')
            }
            return {
                ...state,
                filter: {
                    ...state.filter,
                    input: string,
                }
            }
        case ADD_FILTER_TAG_BY_INPUT:
            if (state.filter.input === '' || state.filter.input === '#') return state
            return {
                ...state,
                filter: {
                    ...state.filter,
                    input: '',
                    tags: [...state.filter.tags, state.filter.input]
                }
            }
        default:
            return state;
    }

}
const ac = {
    openOldPostEditor: (key) => ({
        type: OPEN_OLD_POST_EDITOR,
        key,
    }),
    changeOldPost: () => ({
        type: CHANGE_OLD_POST,
    }),
    addNewPost: () => ({
        type: ADD_NEW_POST_FROM_INPUT,
    }),
    openNewPostEditor: (key) => ({
        type: OPEN_NEW_POST_EDITOR,
        key
    }),
    openFilter: () => ({
        type: OPEN_FILTER_PANEL
    }),
    closeFilter: () => ({
        type: CLOSE_FILTER_PANEL
    }),
    removeTagFromFilter: (tag) => ({
        type: REMOVE_FILTER_TAG_BY_CLICK,
        tag
    }),
    updateFilterOutputArray: () => ({
        type: UPDATE_FILTER_OUTPUT_ARRAY,
    }),
    addTagToFilterByClick: (tag) => ({
        type: ADD_FILTER_TAG_BY_CLICK,
        tag
    }),
    changeFilterValue: (value) => ({
        type: FILTER_INPUT_CHANGE,
        value
    }),
    addFilterTagByInput: () => ({
        type: ADD_FILTER_TAG_BY_INPUT,
    }),
    changeEditorValue: (value) => ({
        type: CHANGE_NEW_POST_TEXTAREA_VALUE,
        value
    }),
    closeEditor: () => ({
        type: CLOSE_EDITOR
    }),
    deletePost: (key) => ({
        type: DELETE_POST_BY_NUMBER,
        key
    }),
}
const thunks = {
    addNewPost: () => (dispatch, getState) => {
        if (getState().notes.input.value !== '') {
            dispatch(ac.addNewPost())
            dispatch(ac.closeEditor())
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(getState().notes.notesList))
        }
    },
    confirmOldPostChange: () => (dispatch, getState) => {
        dispatch(ac.changeOldPost())
        dispatch(ac.closeEditor())
        dispatch(ac.updateFilterOutputArray())
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(getState().notes.notesList))
    },
    deletePost: (key) => (dispatch, getState) => {
        dispatch(ac.deletePost(key))
        dispatch(ac.updateFilterOutputArray())
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(getState().notes.notesList))
    },
    openFilter: () => {
        return (dispatch) => {
            dispatch(ac.openFilter())
            dispatch(ac.updateFilterOutputArray())
        }
    },
    removeTagFromFilter: (tag) => (dispatch) => {
        dispatch(ac.removeTagFromFilter(tag))
        dispatch(ac.updateFilterOutputArray())
    },
    addTagToFilterByClick: (tag) => (dispatch) => {
        dispatch(ac.openFilter())
        dispatch(ac.addTagToFilterByClick(tag))
        dispatch(ac.updateFilterOutputArray())
    },
    addFilterTagByInput: () => (dispatch) => {
        dispatch(ac.addFilterTagByInput())
        dispatch(ac.updateFilterOutputArray())
    }
}

export const interFace = {
    openOldPostEditor: ac.openOldPostEditor,
    closeEditor: ac.closeEditor,
    changeEditorValue: ac.changeEditorValue,
    deletePost: thunks.deletePost,
    openNewPostEditor: ac.openNewPostEditor,
    closeFilter: ac.closeFilter,
    changeFilterValue: ac.changeFilterValue,
    addFilterTagByInput: thunks.addFilterTagByInput,
    openFilter: thunks.openFilter,
    removeTagFromFilter: thunks.removeTagFromFilter,
    addTagToFilterByClick: thunks.addTagToFilterByClick,
    addNewPost: thunks.addNewPost,
    confirmOldPostChange: thunks.confirmOldPostChange,
}