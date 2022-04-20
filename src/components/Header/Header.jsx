import React from 'react'
import logo from "../../Reacticon.svg.png";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <img src={logo} alt="logo"/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>'Login'</NavLink>}
            </div>
        </header>
    )
}

export default Header;