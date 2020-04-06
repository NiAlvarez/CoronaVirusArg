import React, {Component} from 'react'
import './header.styles.scss'
import Logo from '../assets/Ministerio.png'

const Header = () => (
        <div className="header">
            <div className="logo-container">
                <div className="logo"><img src={Logo} alt='Logo de ministerio'/></div>
            </div>
        </div>
)

export default Header