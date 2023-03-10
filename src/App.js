import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"

function App() {
  const [text, setText] = useState('');

  const handleClick = () => {
    axios.get('https://catfact.ninja/fact')
      .then(response => {
        setText(response.data.fact);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div >
      <p class = "text">{text}</p>
      <p class = "button"><button onClick={handleClick}>更新</button></p>
    </div>
  );
}

export default App;

