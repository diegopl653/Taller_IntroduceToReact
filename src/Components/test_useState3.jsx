import React, { useState } from 'react';

function Lista() {
  const [elementos, setElementos] = useState(['Item 1', 'Item 2']);

  return (
    <ul>
      {elementos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Lista;