import './App.css'
import { myElement } from './Components/test_Props3.jsx'
import  saludo  from './Components/test_arrowFunction1.jsx'
import saludo2 from './Components/test_arrowFunction2.jsx'
import Saludo3 from './Components/test_arrowFunction3.jsx'
import { duplicar } from './Components/test_arrowFunction4.jsx'
import { Garage } from './Components/test_props4.jsx'

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
  return (
    <>
    {/* test3 */}
    {/* <Saludo3 nombre={nombreUsuario}/> */}
    {/* prop3 */}
    {/* <Car brand="Fiat"/> */}
    {/* {myElement} */}
    {/* prop4 */}
    {/* <Garage/> */}
    </>
  )
}

export default App
