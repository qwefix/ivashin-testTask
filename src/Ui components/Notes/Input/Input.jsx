import React from 'react';
import c from './Input.module.scss';

function Input() {
    const inputRef = React.createRef()
    return (
        <div className={c.input_container + ' ' + c.active}>
            
            <div className={c.text}>
                <textarea className={c.textarea} disabled
                onChange = {e=>console.log(inputRef.current.value)}
                ref= {inputRef}
                />
            </div>

            <div className={`${c.accept} ${c.button}`}>
                Add Note
            </div>
            
            <div className={`${c.cancel} ${c.button}`}>
                Cancel
            </div>

            <div className={c.tags_wrapper}>
                <div className={c.tags}>
                    <div className={c.tag}>#tag2</div>
                </div>
            </div>
        </div>
    )
}

export default Input;