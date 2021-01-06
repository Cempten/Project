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
  }

  const removeHandler = (id: number) => {
    const agree = window.confirm('Вы уверены, что хотите удалить задачу?')
    if (agree) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  const completeHandler = (id: number) => {
    setTodos(prev => 
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed                                         //не работает
        }
        return todo
      }
    ))
  }

  return (
    <>
      <Navbar />
      <div className="container px2">
        <TodoForm onAdd={addHandler}/>
        <TodoList todos={todos} 
        onRemove={removeHandler}
        onComplete={completeHandler}/>
      </div>
    </>
  );
}

export default App;
