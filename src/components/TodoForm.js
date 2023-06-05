import React, {useState} from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(value);
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='tetx' className='todo-input' placeholder='Jakie zadanie czeka dzisiaj na ciebie ?'onChange={(e)=> setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Dodaj zadanie</button>
        </form>
    )
}