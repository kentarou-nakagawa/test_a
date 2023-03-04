import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>更新</button>
    </div>
  );
}

export default App;

