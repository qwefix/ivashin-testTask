// import store from '../state'

const DELETE_POST_BY_NUMBER = 'DELETE_POST_BY_NUMBER'
const CHANGE_NEW_POST_TEXTAREA_VALUE = 'CHANGE_NEW_POST_TEXTAREA_VALUE'
const ADD_NEW_POST_FROM_INPUT = 'ADD_NEW_POST_FROM_INPUT'
const OPEN_OLD_POST_EDITOR = 'OPEN_OLD_POST_EDITOR'
const OPEN_NEW_POST_EDITOR = 'OPEN_NEW_POST_EDITOR'
const CLOSE_EDITOR = 'CLOSE_EDITOR'
const CHANGE_OLD_POST = 'CHANGE_OLD_POST'

const OPEN_FILTER_PANEL = 'OPEN_FILTER_PANEL'
const CLOSE_FILTER_PANEL = 'CLOSE_FILTER_PANEL'
// const ADD_FILTER_TAG_BY_CLICK = 'ADD_FILTER_TAG_BY_CLICK'
// const ADD_FILTER_TAG_BY_INPUT = 'ADD_FILTER_TAG_BY_CLICK'
// const FILTER_INPUT_CHANGE = 'FILTER_INPUT_CHANGE'


const initialState = {
    filter:{
        active:false,
        input:'',
        tags:['#1','#2'],
        filtredPosts:[],
    },
    notesList: require('../initialState'),
    input: {
        value: '',
        tags: [],
        mode: false,
    },
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POST_BY_NUMBER:
            let listAfterDelete =[...state.notesList]
            listAfterDelete.splice(action.index, 1)
            return {
                ...state,
                notesList: listAfterDelete
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
        case OPEN_NEW_POST_EDITOR:
            return {
                ...state,
                input: {
                    ...state.input,
                    mode: 'new',
                }
            }
        case OPEN_OLD_POST_EDITOR: 
            const selectedPost = state.notesList[action.index]
            return {
                ...state,
                input: {
                    value: selectedPost.text,
                    tags: selectedPost.tags,
                    index: action.index,
                    mode: 'old',
                },

            }        
        case CHANGE_OLD_POST:
            let listAfterChange =[...state.notesList]
            listAfterChange.splice(action.index, 1,{
                tags: state.input.tags,
                text: state.input.value,
            })
            return{
                ...state,
                notesList:listAfterChange
            }

        case OPEN_FILTER_PANEL:
            let filteredArrOfPosts = [...state.notesList].filter(
                post=>{
                    return ! state.filter.tags.map(tag => {                        
                        return post.tags.includes(tag)
                    }).includes(false)
                }
            )
            return{
                ...state,
                filter:{
                    ...state.filter,
                    active:true,
                    filtredPosts:[...filteredArrOfPosts]
                }
            }
        case CLOSE_FILTER_PANEL:
            return{
                ...state,
                filter:{
                    active:false,
                    input:'',
                    tags:[],
                    filtredPosts:[],
                },
            }
        default:
            return state;
    }

}
const ac = {
    openOldPostEditor: (index) => ({
        type: OPEN_OLD_POST_EDITOR,
        index,
    }),
    changeOldPost: (index) => ({
        type: CHANGE_OLD_POST,
        index,
    }),

    addNewPost: () => ({
        type: ADD_NEW_POST_FROM_INPUT,
    }),
    openNewPostEditor: () => ({
        type: OPEN_NEW_POST_EDITOR,
    }),
    
    openFilter:()=>({
        type:OPEN_FILTER_PANEL
    }),

    closeFilter:()=>({
        type:CLOSE_FILTER_PANEL
    }),

    changeEditorValue: (value) => ({
        type: CHANGE_NEW_POST_TEXTAREA_VALUE,
        value
    }),
    closeEditor: () => ({
        type: CLOSE_EDITOR
    }),
    deletePost: (index) => ({
        type: DELETE_POST_BY_NUMBER,
        index
    }),

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
    confirmOldPostChange: () => {
        return (dispatch, getState) => {
            const index = getState().notes.input.index;
            dispatch(ac.changeOldPost(index))
            dispatch(ac.closeEditor())
        }
    },
}

export const interFace = {
    openOldPostEditor: ac.openOldPostEditor,
    closeEditor: ac.closeEditor,
    changeEditorValue: ac.changeEditorValue,
    deletePost: ac.deletePost,
    openNewPostEditor: ac.openNewPostEditor,
    closeFilter:ac.closeFilter,
    openFilter:ac.openFilter,
    addNewPost: thunks.addNewPost,
    confirmOldPostChange: thunks.confirmOldPostChange,
}