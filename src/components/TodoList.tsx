import React from 'react' 

export const TodoList: React.FC = () => {
    return (
        <ul>
            <li className="list">
                <label>
                    <input type="checkbox" />
                    <span>Дело</span>
                    <i className="material-icons">delete</i>
                </label>
            </li>
        </ul>
    )
}