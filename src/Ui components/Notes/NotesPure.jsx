import React from 'react';
import Input from './Input/Input';
import Note from './Note/Note';
import c from './Notes.module.scss';

function NotesPure(props) {
    // console.log(props)
    const { notesList, deletePost, changeEditorValue, input, addNewPost,
         closeEditor, openNewPostEditor,openOldPostEditor,confirmOldPostChange } = props
    return (
        <div className={c.notes}>
            <div className={c.search}>
                <div className={c.description}>
                    Filter by hashtags:
                </div>
                <div className={c.tags}>
                    <div className={c.tag}>
                        #bigAss
                        <div className={c.delete} />
                    </div>
                    <div className={c.tag}>
                        #bigAss
                        <div className={c.delete} />
                    </div>
                </div>
            </div>
            <div className={c.notes_list_container}>
                <div className={c.notes_list}>
                    {notesList.map((a, i) => <Note
                        editPost = {() => openOldPostEditor(i)}
                        deletePost={() => deletePost(i)}
                        key={i}
                        blink = {i===input.index}
                        isEditorIsActive={input.mode}
                        {...a}
                    />)}
                </div>
            </div>
            <div
                className={c.add_note + ` ${input.mode ? c.disabled : ''}`}
                onClick={input.mode ?null:()=>openNewPostEditor() }
            >
                Add Note
            </div>
            <Input
                closeEditor={closeEditor}
                onChange={changeEditorValue}
                addNewPost={addNewPost}
                confirmOldPostChange={confirmOldPostChange}
                {...input}
            />
        </div>
    )

}

export default NotesPure