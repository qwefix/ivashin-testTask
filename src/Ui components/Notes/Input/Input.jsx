import React from 'react';
import c from './Input.module.scss';

function Input(props) {
    // console.log(props)
    const { onChange, value, tags, addNewPost } = props
    const inputRef = React.createRef()
    return (
        <div className={c.input_container + ' ' + c.active}>

            <div className={c.text}>
                <textarea
                    className={c.textarea}
                    value={value}
                    onChange={e => onChange(inputRef.current.value)}
                    ref={inputRef}
                />
            </div>

            <div className={`${c.accept} ${c.button}`} onClick={()=>addNewPost()}>
                Add Note
            </div>

            <div className={`${c.cancel} ${c.button}`}>
                Cancel
            </div>

            <div className={c.tags_wrapper}>
                <div className={c.tags}>
                    {tags.map((tag, i) => <div className={c.tag} key={i}>{tag} </div>)}
                </div>
            </div>
        </div>
    )
}

export default Input;