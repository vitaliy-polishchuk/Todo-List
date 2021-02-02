import React from 'react'
import style from './container.module.css'
import Header from "../header/header";
import HeaderList from './../headerlist/headerlist'
import List from "../ListTodo/list";

function Container(props) {
    return (
        <div className={style.container}>
            <Header/>
            <HeaderList/>
            <List/>
        </div>
    )
}

export default Container

