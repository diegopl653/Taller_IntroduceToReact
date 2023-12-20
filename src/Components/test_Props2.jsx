const  Mensaje = ({ nombre, contenido }) => {
    return (
      <div>
        <p>{nombre}</p>
        <p>{contenido}</p>
      </div>
        );
  };

export default Mensaje;