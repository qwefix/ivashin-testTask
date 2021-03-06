import React from "react"
import c from './Filter.module.scss'

export default function Filter(props) {
    const inputRef = React.createRef()
    const { active, tags, openFilter, closeFilter, removeTagFromFilter, input, changeFilterValue, addFilterTagByInput } = props
    return <div className={c.filter_wrapper}>
        <div className={c.filter + (active ? '' : ' ' + c.closed)}>
            Filter by hashtags:
            <div className={c.tags_container}>
                <div className={c.tags} >
                    {tags.map(t =>
                        <div className={c.tag} key={t}>
                            {t}
                            <div className={c.delete}
                                onClick={() => removeTagFromFilter(t)}
                            />
                        </div>)}
                </div>
            </div>
            <div className={c.input_wrapper}>
                <textarea
                    rows='1'
                    disabled={!active}
                    value={input}
                    onKeyPress={(e) => { if (e.key === 'Enter') addFilterTagByInput() }}
                    onChange={() => changeFilterValue(inputRef.current.value)}
                    ref={inputRef}
                />
                <div
                    className={c.add_tag}
                    onClick={active ? addFilterTagByInput : null}
                >Add tag</div>
            </div>
        </div>
        {active ?
            <div className={c.main_button + ' ' + c.close} onClick={closeFilter}>Close Filter</div>
            :
            <div className={c.main_button} onClick={openFilter} >Use filter</div>}
    </div>
}