import { useState } from "react";
import "./styles.css";


function ItemListCointainer({ greetings }) {
    const [saludo, setSaludo] = useState(greetings);


    function changeGreeting() {
setSaludo("Echale un vistazo a nuestra pagina!")
    }

  return (
    <div className="item-list-container">
      <p>{saludo}</p>
      <button onClick={changeGreeting}>Click</button>
    </div>
  );
}

export default ItemListCointainer;
