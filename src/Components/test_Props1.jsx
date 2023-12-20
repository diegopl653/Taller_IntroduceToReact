const TarjetaPerfil = (props) => {
  const { imagen, nombre } = props;
  return (
    <div>
        {/* Usando estilos en línea: */}
      <img src={imagen} alt="" style={{ maxWidth: '200px', height: 'auto' }} /> 
      <p>Nombre: {nombre}</p>
    </div>
  );
};

export default TarjetaPerfil;