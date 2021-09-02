import React from 'react';
import c from './Note.module.scss';

function Note(props) {
    const { text, tags, deletePost, isEditorIsActive, blink, editPost, addTagToFilterByClick } = props
    return (
        <div className={c.note + (blink ? ' ' + c.blink : '')}>
            <div className={c.main}>
                <div className={c.tags}>
                    {tags.map((tag, i) => <div className={c.tag} onClick={() => { addTagToFilterByClick(tag) }} key={i}>{tag}</div>)}
                </div>

                <div className={c.text_holder}>
                    {text}
                </div>
            </div>
            {isEditorIsActive ?
                <div
                    className={`${c.delete} ${c.button} ${c.disabled}`}
                    title='Close editor to delete this note'
                >
                    D
                </div>
                :
                <div
                    className={`${c.delete} ${c.button}`}
                    title='Delete note'
                    onClick={() => deletePost()}
                >
                    D
                </div>
            }
            {isEditorIsActive ?
                <div className={`${c.edit} ${c.button} ${c.disabled}`} title='Close editor to edit this note'>
                    E
                </div>
                :
                <div className={`${c.edit} ${c.button}`} onClick={() => editPost()} title='Edit note'>
                    E
                </div>
            }

        </div>
    )
}
export default Note