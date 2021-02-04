import React, {useEffect, useState} from "react";
import style from './list.module.css'


function List() {
    const [items, setItems] = useState([]);

    //componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => {
                setItems(data)

            })
    }, []);

    //componentDidUpdate


    useEffect(() => {

    }, [items]);

    //componentDidUnmount
    useEffect(() => {

        return () => {

        }
    }, []);


    const handleClick = (e, task, index) => {
        e.preventDefault();

        const newItems = items.map((item) => {
            if (task.title === item.title) {
                item.completed = !item.completed
            }
            return item
        })
        setItems(newItems)

    }

    function handleRemove(id) {
        const newList = items.filter((item) => item.id !== id);
        setItems(newList);
        fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('saved', data)
            })
    }

    return (
        <div className={style.list_block}>
            <ol>
                {
                    items.map((task, index) => {

                        let rootClass = task.completed ? style.li_list : style.li_list2
                        return (
                            <li className={rootClass} key={index}>
                                {task.title} <a className={style.aa} href="#"><span
                                onClick={(e) => handleClick(e, task, index)}
                                className={style.span2}>&#10004;</span><span
                                onClick={() => handleRemove(task.id)}
                                className={style.span}>&#10008;</span></a>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}


export default List