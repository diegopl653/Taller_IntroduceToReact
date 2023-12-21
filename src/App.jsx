import './App.css'
import { myElement } from './Components/test_Props3.jsx'
import  saludo  from './Components/test_arrowFunction1.jsx'
import saludo2 from './Components/test_arrowFunction2.jsx'
import Saludo3 from './Components/test_arrowFunction3.jsx'
import { duplicar } from './Components/test_arrowFunction4.jsx'
import { Garage } from './Components/test_props4.jsx'
import Padre from './Components/test_useContext.jsx'
import { ConsumidorDeContexto, ProveedorDeContexto } from './Components/test_useContext1.jsx'
import ComponenteConEfecto from './Components/test_useEffect.jsx'
import Example from './Components/test_useEffect2.jsx'
import ComponenteConRef from './Components/test_useRef1.jsx'
import ComponenteConRef2 from './Components/test_useRef2.jsx'
import Contador from './Components/test_useState.jsx'
import InputControlado from './Components/test_useState2.jsx'
import Lista from './Components/test_useState3.jsx'

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
    {/* usestate1 */}
    {/* <Contador></Contador> */}
    {/* usestate2 */}
    {/* <InputControlado></InputControlado> */}
    {/* usestate3 */}
    {/* <Lista></Lista> */}
    {/* usecontext1 */}
    {/* <ProveedorDeContexto>
      <ConsumidorDeContexto></ConsumidorDeContexto>
    </ProveedorDeContexto> */}
    {/* usecontext2 */}
    {/* <Padre></Padre> */}
    {/* useref1 */}
    {/* <ComponenteConRef></ComponenteConRef> */}
    {/* useref2 */}
    {/* <ComponenteConRef2></ComponenteConRef2> */}
    {/* useeffect1 */}
    {/* <ComponenteConEfecto></ComponenteConEfecto> */}
    {/* useeffect2 */}
    <Example></Example>
    </>
  )
}

export default App