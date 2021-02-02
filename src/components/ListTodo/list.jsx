import React from "react";
import style from './list.module.css'
import HeaderList from "../headerlist/headerlist";

function List(props) {
    return (
        <div className={style.list_block}>
            <p>{props.addPost}</p>
        </div>

    )

}

export default List