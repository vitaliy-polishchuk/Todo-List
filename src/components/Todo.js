import React from 'react'


const Todo = ({id, completed, name, onTodoClick}) => {

    return (
        <li className='todo stack-small'>
            <div className='c-cb'>
                <input
                    id={id}
                    type='checkbox'
                    defaultChecked={completed}
                    onChange={(event) => {
                        let checked = event.target.checked;
                        onTodoClick(checked)
                    }}
                />
                <label className='todo-label' htmlFor={id}>
                    {name}
                </label>
            </div>
            <div className='btn-group'>
                <button type='button' className='btn'>
                    Edit <span className='visually-hidden'>Eat</span>
                </button>
                <button type='button' className='btn btn__danger'>
                    Delete <span className='visually-hidden'>Eat</span>
                </button>
            </div>
        </li>
    )
}

export default Todo