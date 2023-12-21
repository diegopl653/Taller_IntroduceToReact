//funciones regulares con parametros
function ConParametro({ nombre = " " }) {
    const mensaje = `Hola, ${nombre} soy una funcion con parametros`;
    return <h1>{mensaje}</h1>;
}
const Suma = function({a, b}) {
    return <h1>{a+b}</h1>;
};
  
export { ConParametro, Suma }