import React from "react";

interface TodoListItemProps{
    todo: Todo;
    toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> =({ todo , toggleComplete}) =>{
    return(
        <li>
<div className="text-teal-700 flex flex-row gap-3">
               <div className="w-5 h-5 accent-blue-500 hover:accent-blue-600">
                <input
                type ="checkbox"
                onChange={()=> toggleComplete(todo)}
                checked={todo.complete}
                /> 
                </div>
                
                            <label className={todo.complete? "todo-row completed":"todo-row"}>
                {todo.text}
            </label></div>
        </li>
    )
}