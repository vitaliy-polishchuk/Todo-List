import React from "react";
import style from './list.module.css'


function List(props) {
    const renderTaskList = () => {
        return props.dataFromParent.map((task) => <li>{task}</li>);
    }
    return (
        <div className={style.list_block}>
            <ol> {renderTaskList()}</ol>
        </div>

    )

}

export default List