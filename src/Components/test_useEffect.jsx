import React, { useState, useEffect } from 'react';

function ComponenteConEfecto() {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    console.log('Valor actualizado:', valor);
  }, [valor]); 
}

export default ComponenteConEfecto;