import React, {useEffect, useState} from "react";
import style from './list.module.css'

function List() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => {
                setItems(data)
                
            })
    }, []);

    return (
        <div className={style.list_block}>
            <ol className={style.ol_list}>
                {items.map((task, index) => {
                    return (
                        <li className={style.li_list} key={index}>
                            {task.title} <a className={style.aa} href="#"><span
                            className={style.span}>&times;</span></a>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default List