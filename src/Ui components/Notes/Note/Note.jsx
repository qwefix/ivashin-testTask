import React from 'react';
import c from './Note.module.scss';

function Note ({text, tags}){
    return(
        <div className = {c.note}>
            <div className={c.tags}>
                {tags.map((tag,i)=><div className={c.tag} key={i}>{tag}</div>)}
            </div>
            <div className={c.text}>
                {text}
            </div>
            <div className={`${c.delete} ${c.button}`} title='Delete note'>
                D
            </div>
            <div className={`${c.edit} ${c.button}`} title='Edit note'>
                E
            </div>
        </div>
    )
}
export default Note