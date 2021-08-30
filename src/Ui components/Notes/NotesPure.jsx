import React from 'react';
import Note from './Note/Note';
import c from './Notes.module.scss';

function NotesPure(props) {
    return (
        <div className={c.notes}>
            <div className={c.add_note}>Add Note</div>
            <div className={c.notes_list_container}>
                <div className={c.notes_list}>
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag1']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag2']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag3']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag1', '#tag3']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag1']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag2']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag3']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag1', '#tag3']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag1']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag2']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag3']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag1', '#tag3']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag1']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag2']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag3']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag1', '#tag3']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag1']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag2']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag3']}
                    />
                    <Note
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a?'
                        tags={['#tag1', '#tag3']}
                    />
                </div>
            </div>
            <div className={c.input_container +' '+c.active}>
                <div className={c.text}>
                    <div className = {c.textarea} contentEditable>
                        <mark>span</mark>asdfsd
                    </div>
                </div>
                <div className={`${c.accept} ${c.button}`}></div>
                <div className={`${c.cancel} ${c.button}`}></div>
            </div>
        </div>
    )

}

export default NotesPure