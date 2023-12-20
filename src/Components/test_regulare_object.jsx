//funcion regular donde se define un objeto llamado Saludo que contiene una propiedad nombre y una función llamada mensaje.
const SaludoObj = {
    nombre: "Diego",
    mensaje: function() {
      console.log(`Hola, ${this.nombre}`); // Se utliza this para acceder a la propiedad nombre del objeto Saludo
    }
  };

  export default SaludoObj;