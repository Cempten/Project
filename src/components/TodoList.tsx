import React from 'react' 
import { ITodo } from './Interface'

interface TodoListProps {
    todos: ITodo[]
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    if (props.todos.length === 0) {
        return <div className="center">Задач нет</div>
    }

    return (
        <ul>
            {props.todos.map(todo => {
                return (
                    <li className="list" key={todo.id}>
                        <label>
                            <input type="checkbox" />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text">delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}