import React, { useState } from 'react';
import './index.css'

import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './components/Interface';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodos(prev => [newTodo, ...prev])
    console.log(todos)
  }

  return (
    <>
      <Navbar />
      <div className="container px2">
        <TodoForm onAdd={addHandler}/>
        <TodoList />
      </div>
    </>
  );
}

export default App;
