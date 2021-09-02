import React from 'react';
import Filter from './Filter/Filter';
import Input from './Input/Input';
import Note from './Note/Note';
import c from './Notes.module.scss';

function NotesPure(props) {
    console.log(props)
    const { notesList, deletePost, changeEditorValue, input, addNewPost, filter,
        closeEditor, openNewPostEditor, openOldPostEditor, confirmOldPostChange, openFilter, closeFilter } = props
    return (
        <div className={c.notes}>
            <Filter 
                openFilter={openFilter}
                closeFilter={closeFilter}
                {...filter}
             />
            <div className={c.notes_list_container}>
                <div className={c.notes_list}>
                    {notesList.map((a, i) => <Note
                        editPost={() => openOldPostEditor(i)}
                        deletePost={() => deletePost(i)}
                        key={i}
                        blink={i === input.index}
                        isEditorIsActive={input.mode}
                        {...a}
                    />)}
                </div>
            </div>
            <div
                className={c.add_note + ` ${input.mode ? c.disabled : ''}`}
                onClick={input.mode ? null : () => openNewPostEditor()}
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
