import React from 'react';
import './index.css'

import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <>
      <Navbar />
      <div className="container px2">
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
}

export default App;
