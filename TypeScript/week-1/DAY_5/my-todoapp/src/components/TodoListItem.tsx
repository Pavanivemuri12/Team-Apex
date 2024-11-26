import React from "react";

interface TodoListItemProps{
    todo: Todo;
    toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> =({ todo , toggleComplete}) =>{
    return(
        <li>

                <input
                type ="checkbox"
                onChange={()=> toggleComplete(todo)}
                checked={todo.complete}
                />
                            <label className={todo.complete? "todo-row completed":"todo-row"}>
                {todo.text}
            </label>
        </li>
    )
}