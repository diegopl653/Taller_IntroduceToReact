import React, { createContext, useContext } from 'react';

const MiContexto = createContext();

function Padre() {
  return (
    <MiContexto.Provider value="Valor desde el padre">
      <Hijo />
    </MiContexto.Provider>
  );
}

function Hijo() {
  const valorContextual = useContext(MiContexto);
  return <p>{valorContextual}</p>;
}

export default Padre;