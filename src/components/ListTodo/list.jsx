import React, {useEffect, useState} from "react";
import style from './list.module.css'


function List({ items, handleClick, handleRemove }) {
    return (
        <div className={style.list_block}>
            <ol>
                {
                    items.map((task, index) => {

                        let rootClass = task.completed ? style.li_list : style.li_list2
                        return (
                            <div className={style.main} key={index}>
                                <span className={rootClass}>{index + 1.}. {task.title} </span> <a className={style.aa} href="#"><span
                                onClick={(e) => handleClick(e, task, index)}
                                className={style.span2}>&#10004;</span><span
                                onClick={() => handleRemove(task.id)}
                                className={style.span}>&#10008;</span></a>
                            </div>
                        )
                    })
                }
            </ol>
        </div>
    )
}


export default List