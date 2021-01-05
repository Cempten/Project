import React from 'react'

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper orange darken-3 px1">
            <a href="/" className="brand-logo">Todo-list</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">1</a></li>
                <li><a href="/">2</a></li>
            </ul>
            </div>
        </nav>
    )
}