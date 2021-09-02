import React from "react"
import c from './Filter.module.scss'

export default function Filter(props) {
    console.log(props)
    const { active, tags } = props
    // if (!active) return <div className={c.open}>Use filter</div>
    return active ?
        <div className={c.filter_wrapper}>
            Filter by hashtags:
            <div className={c.tags_container}>
                <div className={c.tags} >
                    {tags.map(t =>
                        <div className={c.tag}>
                            {t}
                            <div className={c.delete} />
                        </div>)}
                </div>
            </div>
            <div className={c.input_wrapper}>
                <textarea rows='1'></textarea>
                <div className={c.add_tag}>Add tag</div>
            </div>
            <div className={c.main_button+' '+c.close}>Close Filter</div>
        </div>
        :
        <div className={c.filter_wrapper}>
            <div className={c.main_button}>Use filter</div>
        </div>


}