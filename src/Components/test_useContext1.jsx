import React, { useContext, createContext } from 'react';

const MiContexto = createContext();

export function ProveedorDeContexto({ children }) {
  const valorContextual = 'Hola desde el contexto';
  return (
    <MiContexto.Provider value={valorContextual}>
      {children}
    </MiContexto.Provider>
  );
}

export function ConsumidorDeContexto() {
  const valorContextual = useContext(MiContexto);
  return <p>{valorContextual}</p>;
}

