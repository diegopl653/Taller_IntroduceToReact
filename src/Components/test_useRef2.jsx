import React, { useRef } from 'react';

function ComponenteConRef2() {
  const contador = useRef(0);

  const incrementarContador = () => {
    contador.current += 1;
    console.log(`Contador: ${contador.current}`);
  };

  return (
    <div>
      <p>Contador: {contador.current}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default ComponenteConRef2;