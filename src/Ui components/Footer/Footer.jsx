import React from 'react';
import c from './Footer.module.scss';
import gitHubLogo from '../assets/GitHubLogo.png'
import phoneIcon from '../assets/phone icon.png'

function Footer(props) {
    return (
        <footer className={c.footer}>
            <div className = {c.background}></div>
            <a href='https://github.com/qwefix' target='_blank' rel="noreferrer">
                <img src={gitHubLogo} height = '16' alt="GitHub logo" />
                my GitHub
            </a>
            <a href='tel:+375298641451'>
                <img src={phoneIcon} height = '16' alt="Call me" />
                +375298641451
                </a>
            <a href="https://rabota.by/resume/181070faff0931fbe00039ed1f36446f534476" target='_blank' rel="noreferrer">My resume</a>
        </footer>
    )
}

export default Footer