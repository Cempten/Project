import React, { useState } from 'react' 

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const pressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
          <input 
          value={title}
          onChange={event => changeHandler(event)}
          onKeyPress={event => pressHandler(event)}
          id="title" 
          type="text" 
          className="validate" 
          autoComplete="off" />
          <label className="active" htmlFor="title">Введите задачу: </label>
        </div>
    )
}