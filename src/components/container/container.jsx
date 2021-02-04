import React, {useEffect} from 'react'
import style from './container.module.css'
import Header from "../header/header";
import HeaderList from './../headerlist/headerlist'
import List from "../ListTodo/list";
import {useState} from 'react'

function Container() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => {
                setItems(data)
            })
    }, []);

    const callbackFunction = (taskName) => {
        const newItem = {
            id: +new Date(),
            title: taskName,
            completed: false,
        }
        let newItems = [...items, newItem]
        setItems(newItems)
    }


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
    }

    return (
        <div className={style.container}>
            <Header/>
            <HeaderList parentCallback={callbackFunction}/>
            <List items={items} handleClick={handleClick} handleRemove={handleRemove} />
        </div>
    )
}

export default Container

