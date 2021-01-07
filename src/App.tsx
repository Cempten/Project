import React from 'react';
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar'
import { TodoPage } from './Pages/TodoPage';
import { AboutPage } from './Pages/AboutPage';



function App() {
    return (
      <BrowserRouter>
        <Navbar/>
        <div className="container px2">
          <Switch>
            <Route component={TodoPage} path="/" exact />
            <Route component={AboutPage} path="/about" />
          </Switch>        
        </div>
      </BrowserRouter>
  );
}

export default App;
