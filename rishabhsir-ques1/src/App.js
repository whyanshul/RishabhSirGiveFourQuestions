import logo from './logo.svg';
import './App.css';
import React from 'react';
import Box from './components/Box/Box.component';
import Div from './components/Div/Div.component';

function App() {

  const [toggle, setToggle]= React.useState(true)

  return (
    <div className="App">
      {
        toggle?<Box/>:<Div/>
      }
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default App;
