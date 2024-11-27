import React, { useState,ChangeEvent, FormEvent } from 'react';

interface TodoFormProps{
addTodo : AddTodo;
}


export const TodoForm: React.FC<TodoFormProps> = ({addTodo}) =>{
    const [newTodo,setNewTodo] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return(
        <form className="todo-form flex flex-row gap-3">
            <div className='outline-none focus:outline focus:outline-0 focus:outline-blue-600 border border-spacing-0 border-green-500 p-2 rounded transition'>
            <input type="text" value={newTodo} className="todo-input" placeholder = "Add a todo" onChange={handleChange}/>
            </div>
            <div className='outline-none focus:outline focus:outline-2 focus:outline-blue-500 bg-green-400 border border-green-600 hover:text-white hover:bg-green-700 p-2 rounded transition'>
            <button type="submit" className='todo-button' onClick={handleSubmit} >
                Add a Todo
            </button>
            </div>
        </form>
    )
}