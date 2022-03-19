import React from 'react'
import logo from "../../Reacticon.svg.png";
import classes from './Header.module.css'

const Header = () => {
    return(
        <header className={classes.Header}>
            <img src={logo} alt="logo"/>
        </header>
        )
}

export default Header;