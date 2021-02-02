import React from 'react'
import style from './container.module.css'
import Header from "../header/header";
import HeaderList from './../headerlist/headerlist'
import List from "../ListTodo/list";
import {useState} from 'react'

function Container(props) {
    const [tasks, setTasks] = useState([]);
    let callbackFunction = (taskName) => {
       let x = [...tasks, taskName]
        setTasks(x)
    }

    return (
        <div className={style.container}>
            <Header/>
            <HeaderList  parentCallback = {callbackFunction} />
            <List dataFromParent = {tasks}/>
        </div>
    )
}

export default Container

