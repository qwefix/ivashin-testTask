import React from 'react';
import Input from './Input/Input';
import Note from './Note/Note';
import c from './Notes.module.scss';

function NotesPure(props) {
    const {notesList,deletePost,changeNewPostValue,newPostInput,addNewPost}=props
    console.log(props)
    return (
        <div className={c.notes}>
            <div className={c.search}>
                <div className={c.description}>
                    Filter by hashtags: 
                </div>
                <div className={c.tags}>
                    <div className={c.tag}>
                        #bigAss
                        <div className={c.delete}/>
                    </div>
                    <div className={c.tag}>
                        #bigAss
                        <div className={c.delete}/>
                    </div>
                </div>
            </div>
            <div className={c.notes_list_container}>
                <div className={c.notes_list}>
                    {notesList.map((a,i)=><Note
                        deletePost={deletePost}
                        index={i}
                        key={i}
                        text={a.text}
                        tags={a.tags}
                    />)}
                </div>
            </div>
            <div className={c.add_note}>Add Note</div>
            <Input onChange = {changeNewPostValue} addNewPost={addNewPost} {...newPostInput}/> 
        </div>
    )

}

export default NotesPure