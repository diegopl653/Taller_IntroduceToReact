function Car(props) {
    return <h2>soy un { props.brand.model }!</h2>;
  }
  
export function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
        <h1>Que coche tengo en el garaje?</h1>
        <Car brand={ carInfo } />
      </>
    );
  }