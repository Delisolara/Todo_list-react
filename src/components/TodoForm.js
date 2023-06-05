import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='tetx' className='todo-input' value={value} placeholder='Jakie zadanie czeka dzisiaj na ciebie ?' onChange={(e)=> setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Dodaj zadanie</button>
        </form>
    )
}