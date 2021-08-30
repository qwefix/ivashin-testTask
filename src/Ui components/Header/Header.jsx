import React from 'react';
import c from './Header.module.scss'

function Header(props) {
    return(
    <header className = {c.header}>
        <div className = {c.background}></div>
        <h1>
            Editable notes by qwefix
        </h1>
    </header>
    )
}

export default Header