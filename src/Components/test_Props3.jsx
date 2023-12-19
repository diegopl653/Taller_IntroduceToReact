//ejemplo del codigo, esta parte no esta exportada
function Car(props) {
    return <h2>Soy un { props.brand }!</h2>;
  }
//parte exportada
export const myElement = <Car brand="Ford" />;