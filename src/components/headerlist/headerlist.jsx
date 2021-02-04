import React, {useState} from "react";
import style from './headerlist.module.css'

function HeaderList({ parentCallback }) {
    const [newTodo, setNewTodo] = useState('')

    const addPost = () => {
        parentCallback(newTodo)
        setNewTodo('')
    }

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }
    return (
        <div className={style.first_block}>
            <span className={style.span}>Task:</span>
            <input value={newTodo} onChange={handleChange} className={style.input}/>
            <button onClick={addPost} className={style.button}>+Add+
            </button>
        </div>
    )

}

export default HeaderList