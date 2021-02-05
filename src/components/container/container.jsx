import React, {useState} from 'react'
import style from './container.module.css'
import Header from "../header/header";
import HeaderList from './../headerlist/headerlist'
import List from "../ListTodo/list";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Info from "../info/info";
import NoMatch from "../nomatch/nomatch";
import Myform from "../form/form";


function Container() {
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/')
    //         .then(response => response.json())
    //         .then(data => {
    //             setItems(data)
    //         })
    // }, []);

    const callbackFunction = (taskName) => {
        const newItem = {
            id: +new Date(),
            title: taskName,
            completed: true,
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
        <BrowserRouter>
            <div className={style.container}>
                <Header/>
                <Route path={['/', '/home']} exact
                       render={(props) => (<HeaderList parentCallback={callbackFunction}/>)}/>
                <Switch>
                    <Route path={['/', '/home']} exact render={(props) => (
                        <List items={items} handleClick={handleClick} handleRemove={handleRemove}/>)}/>
                    <Route path='/info' component={Info}/>
                    <Route path='/form' component={Myform}/>
                    <Route path="*" component={NoMatch}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Container

