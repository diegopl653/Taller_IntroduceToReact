import React, { useState } from 'react';

function InputControlado() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Texto ingresado: {inputValue}</p>
    </div>
  );
}

export default InputControlado;