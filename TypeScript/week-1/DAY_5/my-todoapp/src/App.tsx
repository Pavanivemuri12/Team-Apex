import React, {useState} from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';


function App() {
  const [todos,setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = newTodo =>{
    if (newTodo !== ""){
      setTodos([...todos,{text:newTodo,complete:false}]);
    }
  }

  const toggleComplete: ToggleComplete = selectedTodo =>{
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo){
        return {...todo,complete:!todo.complete};
       
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div className='border bg-violet-100 border-gray-300 p-6 rounded-lg shadow-md max-w-md mx-auto top-3 mt-5'>
    <div className=' flex justify-center items-center'>
    <div className="App">
      <div className='text-red-600 text-3xl pl-9 ml-2'>
     <h1> Todo App</h1>
     </div>
     <br/>
     <div >
     <TodoForm addTodo={addTodo}/></div>
     <br/>
     <TodoList todos={todos} toggleComplete={toggleComplete}/>
    </div></div></div>
  );
}

export default App;
