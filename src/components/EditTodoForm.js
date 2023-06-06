import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }
    return (
        <form className='EditTodoForm' onSubmit={handleSubmit}>
            <input type='tetx' className='todo-input' value={value} placeholder='Zmień zadanie' onChange={(e)=> setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Dokonaj zmiany</button>
        </form>
    )
}