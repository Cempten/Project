import React from 'react' 

export const TodoForm: React.FC = () => {
    return (
        <div className="input-field mt2">
          <input 
          value="" 
          id="title" 
          type="text" 
          className="validate" 
          autoComplete="off" />
          <label className="active" htmlFor="title">Введите задачу: </label>
        </div>
    )
}