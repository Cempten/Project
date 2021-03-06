import React, { useEffect, useState } from 'react'

import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../components/Interface';

export const TodoPage = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        document.title = 'Todo-list'
    })

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

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
        prev.map(todo => 
            todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
                }
            : todo
        ))
    } 

    return (
        <>
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos} 
            onRemove={removeHandler}
            onComplete={completeHandler}/>
        </>
    )
}