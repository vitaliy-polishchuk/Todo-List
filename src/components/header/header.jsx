import React from "react";
import style from './header.module.css'

function Header(props) {
    return (
        <div className={style.header}>
            <div className={style.navbar}>
                <div className={style.home}>Home</div>
                <div className={style.picture}>Picture</div>
                <div className={style.h2}>Note</div>
            </div>

        </div>
    )

}

export default Header