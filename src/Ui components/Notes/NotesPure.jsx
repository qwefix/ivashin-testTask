import React from 'react';
import Filter from './Filter/Filter';
import Input from './Input/Input';
import Note from './Note/Note';
import c from './Notes.module.scss';

function NotesPure(props) {
    const { notesList, deletePost, changeEditorValue, input, addNewPost, filter,removeTagFromFilter,addTagToFilterByClick,
        closeEditor, openNewPostEditor, openOldPostEditor, confirmOldPostChange, openFilter, closeFilter,changeFilterValue,addFilterTagByInput } = props
        const notesToRender = filter.active? filter.filtredPosts: notesList
    return (
        <div className={c.notes}>
            <Filter 
                addFilterTagByInput={addFilterTagByInput}
                changeFilterValue={changeFilterValue}
                removeTagFromFilter={removeTagFromFilter}
                openFilter={openFilter}
                closeFilter={closeFilter}
                {...filter}
             />
            <div className={c.notes_list_container}>
                <div className={c.notes_list}>
                    {notesToRender.map((a) => <Note
                        addTagToFilterByClick = {addTagToFilterByClick}
                        editPost={() => openOldPostEditor(a.key)}
                        deletePost={() => deletePost(a.key)}
                        key={a.key}
                        blink={a.key === input.key}
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
