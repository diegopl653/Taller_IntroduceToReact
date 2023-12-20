import './App.css'
import { myElement } from './Components/test_Props3.jsx'
import  saludo  from './Components/test_arrowFunction1.jsx'
import saludo2 from './Components/test_arrowFunction2.jsx'
import Saludo3 from './Components/test_arrowFunction3.jsx'
import { duplicar } from './Components/test_arrowFunction4.jsx'
import { Garage } from './Components/test_props4.jsx'
import SaludoObj from './Components/test_regulare_object.jsx'
import { ConParametro, Suma } from './Components/test_regulare_with_parameter.jsx'
import { SinParametro } from './Components/test_regulare_without_parameter.jsx'
import Persona from './Components/text_regulare_Constructor.jsx'

function App() {
  //test1
  //saludo();
  //test2
  // const resultado = saludo2(20);
  // console.log(resultado);
  //test3
  //const nombreUsuario= "Diego";
  //test4
  // const numero = duplicar(10);
  // console.log(numero);
  //prop3
  // function Car(props) {
  //   return <h2>Soy un {props.brand}!</h2>
  // }
  
  //------IVAN
  /* const nombre = "Ivan"
  const componenteConParametro = ConParametro({ nombre });
  SinParametro()
  //console.log(SaludoObj.nombre)
  SaludoObj.mensaje()
  const parametroConObj = Suma({ a:5, b:5 });
  const persona1 = new Persona('David', 35) */
  return (
    <>
    {/* test3 */}
    {/* <Saludo3 nombre={nombreUsuario}/> */}
    {/* prop3 */}
    {/* <Car brand="Fiat"/> */}
    {/* {myElement} */}
    {/* prop4 */}
    {/* <Garage/> */}

    
    {/* <div>{ componenteConParametro }</div>
    <div>{ parametroConObj }</div>
    <div>
      <h1>Perfil</h1>
      <p>Nombre: { persona1.nombre }</p>
      <p>Edad: { persona1.edad }</p>
      
    </div> */}
    </>
  )
}

export default App
