import React from "react";
import style from './header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (

        <div className={style.header}>
            <div className={style.navbar}>
                <NavLink to='/' className={style.home}>Home</NavLink>
                <NavLink to='/info' className={style.info}>Info</NavLink>
                <NavLink to='/form' className={style.form}>Form</NavLink>
                <div className={style.h2}>Note</div>
            </div>

        </div>

    )

}

export default Header