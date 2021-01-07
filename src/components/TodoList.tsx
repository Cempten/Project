import React from 'react' 
import { ITodo } from './Interface'

interface TodoListProps {
    todos: ITodo[],
    onRemove(id: number): void,
    onComplete(id: number): void,
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    const clickIconHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        props.onRemove(id)
    }

    if (props.todos.length === 0) {
        return <div className="center">Задач нет</div>
    }

    return (
        <ul>
            {props.todos.map(todo => {
                const style = ['list']
                if (todo.completed === true) {
                    style.push('completed')
                }
                return (
                    <li className={style.join(' ')} key={todo.id}>
                        <label>
                            <input 
                            type="checkbox" 
                            checked={todo.completed} 
                            onChange={() => props.onComplete(todo.id)}/>
                            <span>{todo.title}</span>
                            <i
                            className="material-icons red-text" 
                            onClick={event => clickIconHandler(event, todo.id)}
                            >delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}