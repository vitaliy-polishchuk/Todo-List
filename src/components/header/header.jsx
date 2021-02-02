import React from "react";
import style from './header.module.css'

function Header(props) {
    return (
        <div className={style.header}>
            <h2 className={style.h2}>Note</h2>
        </div>
    )

}

export default Header