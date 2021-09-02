import React from "react"
import c from './Filter.module.scss'

export default function Filter(props) {
    // console.log(props)
    const { active, tags, openFilter, closeFilter,removeTagFromFilter } = props
    return <div className={c.filter_wrapper}>
        <div className={c.filter + (active ? '' : ' ' + c.closed)}>
            Filter by hashtags:
            <div className={c.tags_container}>
                <div className={c.tags} >
                    {tags.map(t =>
                        <div className={c.tag} key={t}>
                            {t}
                            <div className={c.delete}
                            onClick = {()=>removeTagFromFilter(t)}
                            />
                        </div>)}
                </div>
            </div>
            <div className={c.input_wrapper}>
                <textarea rows='1' disabled={!active}></textarea>
                <div 
                    className={c.add_tag}
                    // onClick = {active?'handler':null}
                >Add tag</div>
            </div>
        </div>
        {active?
        <div className={c.main_button + ' ' + c.close} onClick={closeFilter}>Close Filter</div>
        :
        <div className={c.main_button} onClick={openFilter} >Use filter</div>}
        
        
    </div>
}