import React from 'react';
import './index.css'

import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm';

function App() {
  return (
    <>
      <Navbar />
      <div className="container px2">
        <TodoForm />
      </div>
    </>
  );
}

export default App;
