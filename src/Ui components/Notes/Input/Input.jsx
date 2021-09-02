import React from 'react';
import c from './Input.module.scss';

function Input(props) {
    const { onChange, value, tags, addNewPost, mode,closeEditor,confirmOldPostChange } = props
    const inputRef = React.createRef()    
    const renderButtons = (mode) => {
        switch (mode) {
            case 'new':
                return <div className={`${c.accept} ${c.button}`} onClick={() => addNewPost()}>
                    Add Note
                </div>
            case 'old':
                return <div
                    className={`${c.accept} ${c.button}`} onClick={confirmOldPostChange}
                >
                    Accept
                </div>
            default:
                break;
        }
    }
    return (
        <div className={c.input_container + ` ${mode ? c.active : ''}`}>

            <div className={c.text}>
                <textarea
                    disabled={!mode}
                    className={c.textarea}
                    value={value}
                    onChange={e => onChange(inputRef.current.value)}
                    ref={inputRef}
                />
            </div>

            {renderButtons(mode)}
            <div className={`${c.cancel} ${c.button}`} onClick={()=>closeEditor()}>
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