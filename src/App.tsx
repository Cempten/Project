import React from 'react';
import './index.css'
import { SomeBlock } from './styles'
import { globalStyles } from './global-styles'

import { Button } from './components/generic/Button'

function App() {
  return (
    <div className="App">
      {globalStyles}
      <SomeBlock>8==э</SomeBlock>
      <Button>BUTTON 1</Button>
      <Button variant="secondary">BUTTON 2</Button>
      <Button>BUTTON 3</Button>
    </div>
  );
}

export default App;
